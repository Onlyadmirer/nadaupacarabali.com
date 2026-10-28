"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "@/constants/contact";
import Reveal from "@/components/Reveal";
import Container from "@/components/site/Container";
import SectionHeading from "@/components/site/SectionHeading";

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const initialForm: FormFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormFields>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setStatus("");
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Nama wajib diisi.";
    }
    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      nextErrors.email = "Format email belum valid.";
    }
    if (!formData.message.trim()) {
      nextErrors.message = "Pesan wajib diisi.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      document.getElementById(firstError)?.focus();
      return;
    }

    const text = `Halo, saya ${formData.name}\n\n${
      formData.subject ? `Subjek: ${formData.subject}\n\n` : ""
    }${formData.message}\n\n${formData.email ? `Email saya: ${formData.email}` : ""}`;

    const opened = window.open(
      `https://wa.me/${contactInfo.phoneRaw}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setStatus(
      opened
        ? "WhatsApp dibuka di tab baru. Silakan lanjutkan percakapan di sana."
        : "Popup diblokir browser. Izinkan popup atau hubungi kami langsung via WhatsApp.",
    );
  };

  return (
    <Reveal>
      <section className='section-spacing'>
        <Container className='max-w-3xl'>
          <SectionHeading
            eyebrow='Formulir Pesan'
            title='Kirim Pesan'
            description='Isi formulir di bawah dan pesan Anda akan langsung diteruskan ke WhatsApp kami.'
            className='mb-10'
          />

          <form
            onSubmit={handleSubmit}
            noValidate
            className='space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10'
          >
            <div className='grid gap-6 md:grid-cols-2'>
              <div>
                <Label
                  htmlFor='name'
                  className='mb-2 font-ui text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase'
                >
                  Nama <span className='text-destructive'>*</span>
                </Label>
                <Input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete='name'
                  required
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder='Masukkan nama Anda'
                />
                {errors.name && (
                  <p
                    id='name-error'
                    role='alert'
                    className='mt-1.5 font-body text-xs text-destructive'
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor='email'
                  className='mb-2 font-ui text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase'
                >
                  Email
                </Label>
                <Input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete='email'
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder='Masukkan email Anda'
                />
                {errors.email && (
                  <p
                    id='email-error'
                    role='alert'
                    className='mt-1.5 font-body text-xs text-destructive'
                  >
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label
                htmlFor='subject'
                className='mb-2 font-ui text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase'
              >
                Subjek
              </Label>
              <Input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                placeholder='Masukkan subjek pesan'
              />
            </div>

            <div>
              <Label
                htmlFor='message'
                className='mb-2 font-ui text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase'
              >
                Pesan <span className='text-destructive'>*</span>
              </Label>
              <Textarea
                id='message'
                name='message'
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                placeholder='Ceritakan kebutuhan acara Anda...'
              />
              {errors.message && (
                <p
                  id='message-error'
                  role='alert'
                  className='mt-1.5 font-body text-xs text-destructive'
                >
                  {errors.message}
                </p>
              )}
            </div>

            <div className='flex flex-col gap-3'>
              <Button
                type='submit'
                size='lg'
                className='w-full rounded-full'
              >
                Kirim via WhatsApp
                <MessageCircle className='size-4' aria-hidden='true' />
              </Button>
              <p className='text-center font-body text-xs leading-relaxed text-muted-foreground'>
                Pesan akan dibuka di WhatsApp. Kami tidak menyimpan data
                formulir di server.
              </p>
              {status && (
                <p
                  role='status'
                  aria-live='polite'
                  className='rounded-lg bg-secondary px-3 py-2 text-center font-body text-sm text-foreground'
                >
                  {status}
                </p>
              )}
            </div>
          </form>
        </Container>
      </section>
    </Reveal>
  );
}
