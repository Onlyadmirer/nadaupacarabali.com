export const SESSION_COOKIE_NAME = "nub_admin";

/** Session lifetime: 7 days. */
export const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;

function base64UrlEncode(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let index = 0; index < a.length; index += 1) {
    mismatch |= a.charCodeAt(index) ^ b.charCodeAt(index);
  }
  return mismatch === 0;
}

async function sign(payload: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(payload),
  );
  return base64UrlEncode(new Uint8Array(signature));
}

function getSecret(): string | null {
  const secret = process.env.AUTH_SECRET;
  return secret && secret.length > 0 ? secret : null;
}

/** Creates a signed session token in the form `<expiresAtUnix>.<hmac>`. */
export async function createSessionToken(): Promise<string | null> {
  const secret = getSecret();
  if (!secret) return null;

  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = String(expiresAt);
  const signature = await sign(payload, secret);

  return `${payload}.${signature}`;
}

/** Verifies the signature and expiry of a session token. */
export async function verifySessionToken(
  token: string | undefined | null,
): Promise<boolean> {
  const secret = getSecret();
  if (!secret || !token) return false;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expiresAt = Number(payload);
  if (!Number.isFinite(expiresAt) || expiresAt * 1000 <= Date.now()) return false;

  try {
    const expected = await sign(payload, secret);
    return timingSafeEqual(signature, expected);
  } catch {
    return false;
  }
}

/** Compares the submitted password with ADMIN_PASSWORD without early exits. */
export function isValidPassword(candidate: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  return timingSafeEqual(candidate, expected);
}
