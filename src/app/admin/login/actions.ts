"use server";

import { redirect } from "next/navigation";
import {
  createSession,
  destroySession,
  sanitizeNextPath,
} from "@/lib/auth";
import type { FormState } from "@/lib/form-state";
import { isValidPassword } from "@/lib/session-token";

export async function loginAction(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  if (!process.env.ADMIN_PASSWORD || !process.env.AUTH_SECRET) {
    return {
      ok: false,
      error:
        "Server belum dikonfigurasi. Set ADMIN_PASSWORD dan AUTH_SECRET di file .env.",
    };
  }

  const password = String(formData.get("password") ?? "");
  const next = sanitizeNextPath(String(formData.get("next") ?? ""));

  if (!isValidPassword(password)) {
    return { ok: false, error: "Password salah. Silakan coba lagi." };
  }

  const created = await createSession();

  if (!created) {
    return { ok: false, error: "Gagal membuat sesi. Periksa AUTH_SECRET." };
  }

  redirect(next);
}

export async function logoutAction(): Promise<void> {
  await destroySession();
  redirect("/admin/login");
}
