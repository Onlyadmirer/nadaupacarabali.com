import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  SESSION_COOKIE_NAME,
  SESSION_TTL_SECONDS,
  createSessionToken,
  verifySessionToken,
} from "./session-token";

/** Only allow internal, admin-scoped redirect targets. */
export function sanitizeNextPath(next: string | null | undefined): string {
  if (!next) return "/admin";
  if (!next.startsWith("/") || next.startsWith("//")) return "/admin";
  if (!next.startsWith("/admin")) return "/admin";
  if (next.startsWith("/admin/login")) return "/admin";
  return next;
}

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  return verifySessionToken(store.get(SESSION_COOKIE_NAME)?.value);
}

export async function createSession(): Promise<boolean> {
  const token = await createSessionToken();
  if (!token) return false;

  const store = await cookies();
  store.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });

  return true;
}

export async function destroySession(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE_NAME);
}

/** Redirects to the login page when there is no valid session. */
export async function requireAdmin(nextPath?: string): Promise<void> {
  if (await isAuthenticated()) return;

  const target = nextPath
    ? `/admin/login?next=${encodeURIComponent(sanitizeNextPath(nextPath))}`
    : "/admin/login";

  redirect(target);
}
