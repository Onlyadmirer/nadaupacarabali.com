import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AlertTriangle, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { isAuthenticated, sanitizeNextPath } from "@/lib/auth";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin | Nada Upacara Bali",
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  if (await isAuthenticated()) {
    redirect("/admin");
  }

  const params = await searchParams;
  const next = sanitizeNextPath(params.next);
  const configured = Boolean(
    process.env.ADMIN_PASSWORD && process.env.AUTH_SECRET,
  );

  return (
    <main className='relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-16'>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0'
        style={{
          background:
            "radial-gradient(circle at 15% 10%, rgba(139,94,60,0.16), transparent 45%), radial-gradient(circle at 85% 90%, rgba(184,155,94,0.18), transparent 50%)",
        }}
      />

      <div className='relative w-full max-w-md'>
        <div className='mb-8 text-center'>
          <Link
            href='/'
            className='font-outfit inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground'
          >
            <ArrowLeft className='size-3.5' />
            Kembali ke situs
          </Link>
          <p className='font-outfit mt-8 text-[11px] tracking-[0.4em] text-primary uppercase'>
            Nada Upacara Bali
          </p>
          <h1 className='font-libre-baskerville mt-3 text-4xl text-foreground italic'>
            Panel Admin
          </h1>
          <p className='font-outfit mt-3 text-sm text-muted-foreground'>
            Kelola katalog pertunjukan Nada Upacara Bali.
          </p>
        </div>

        <div className='rounded-2xl bg-card p-8 ring-1 ring-border/70 shadow-[0_30px_90px_-50px_rgba(139,94,60,0.6)]'>
          {!configured && (
            <div className='mb-6 flex items-start gap-2 rounded-md bg-amber-50 px-3 py-2.5 text-amber-900 ring-1 ring-amber-200'>
              <AlertTriangle className='mt-0.5 size-4 shrink-0' />
              <p className='font-outfit text-xs leading-relaxed'>
                Login belum aktif. Tambahkan{" "}
                <code className='font-mono'>ADMIN_PASSWORD</code> dan{" "}
                <code className='font-mono'>AUTH_SECRET</code> ke file{" "}
                <code className='font-mono'>.env</code> lalu restart server.
              </p>
            </div>
          )}

          <LoginForm next={next} configured={configured} />
        </div>

        <p className='font-outfit mt-6 flex items-center justify-center gap-1.5 text-[11px] tracking-[0.15em] text-muted-foreground uppercase'>
          <Sparkles className='size-3.5' />
          Area terbatas · hanya untuk pengelola
        </p>
      </div>
    </main>
  );
}
