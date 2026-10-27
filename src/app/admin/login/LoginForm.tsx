"use client";

import { useActionState } from "react";
import { ArrowRight, Loader2, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { initialFormState } from "@/lib/form-state";
import { loginAction } from "./actions";

interface LoginFormProps {
  next: string;
  configured: boolean;
}

export default function LoginForm({ next, configured }: LoginFormProps) {
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialFormState,
  );

  return (
    <form action={formAction} className='space-y-5'>
      <input type='hidden' name='next' value={next} />

      <div className='space-y-2'>
        <Label
          htmlFor='password'
          className='font-outfit text-[11px] tracking-[0.2em] uppercase text-muted-foreground'
        >
          Password Admin
        </Label>
        <div className='relative'>
          <LockKeyhole className='pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground' />
          <Input
            id='password'
            name='password'
            type='password'
            autoComplete='current-password'
            autoFocus
            required
            placeholder='Masukkan password'
            className='h-11 pl-10'
            disabled={!configured}
          />
        </div>
      </div>

      {state.error && (
        <p
          role='alert'
          className='rounded-md bg-destructive/10 px-3 py-2 font-outfit text-sm text-destructive ring-1 ring-destructive/20'
        >
          {state.error}
        </p>
      )}

      <Button
        type='submit'
        disabled={pending || !configured}
        className='font-outfit h-11 w-full tracking-[0.2em] uppercase'
      >
        {pending ? (
          <>
            <Loader2 className='size-4 animate-spin' />
            Memeriksa
          </>
        ) : (
          <>
            Masuk
            <ArrowRight className='size-4' />
          </>
        )}
      </Button>
    </form>
  );
}
