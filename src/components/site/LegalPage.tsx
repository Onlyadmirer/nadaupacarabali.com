import { Check } from "lucide-react";
import Container from "./Container";
import { contactInfo } from "@/constants/contact";

export interface LegalSection {
  title: string;
  content?: string;
  items?: string[];
  contact?: boolean;
}

interface LegalPageProps {
  title: string;
  description: string;
  updatedAt: string;
  sections: LegalSection[];
}

export default function LegalPage({
  title,
  description,
  updatedAt,
  sections,
}: LegalPageProps) {
  return (
    <main className='min-h-screen bg-background text-foreground'>
      <section className='relative overflow-hidden border-b border-border pt-32 pb-16 md:pb-24'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(178,116,87,0.12)_0%,transparent_70%)]'
        />
        <Container className='max-w-4xl text-center'>
          <p className='font-ui text-xs font-semibold tracking-[0.22em] text-primary uppercase'>
            Legal
          </p>
          <h1 className='mt-4 font-heading text-4xl leading-tight font-semibold text-foreground md:text-5xl'>
            {title}
          </h1>
          <div className='mx-auto my-6 h-px w-16 bg-linear-to-r from-transparent via-primary/50 to-transparent' />
          <p className='mx-auto max-w-2xl font-body text-base leading-relaxed text-muted-foreground md:text-lg'>
            {description}
          </p>
        </Container>
      </section>

      <section className='section-spacing'>
        <Container className='max-w-4xl'>
          <div className='space-y-10 md:space-y-12'>
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className='font-heading text-2xl font-semibold text-foreground md:text-3xl'>
                  {section.title}
                </h2>
                {section.content && (
                  <p className='mt-3 font-body text-base leading-relaxed text-muted-foreground md:text-lg'>
                    {section.content}
                  </p>
                )}
                {section.items && (
                  <ul className='mt-4 space-y-3'>
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className='flex items-start gap-3 font-body text-base leading-relaxed text-muted-foreground'
                      >
                        <span className='mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary text-primary'>
                          <Check className='size-3' aria-hidden='true' />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.contact && (
                  <div className='mt-4 space-y-1 font-body text-base leading-relaxed text-muted-foreground'>
                    <p>WhatsApp: {contactInfo.phone}</p>
                    <p>
                      Email:{" "}
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className='text-primary underline-offset-4 transition-colors hover:text-primary-hover hover:underline'
                      >
                        {contactInfo.email}
                      </a>
                    </p>
                    <p>{contactInfo.address}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className='mt-14 border-t border-border pt-6'>
            <p className='font-body text-xs text-muted-foreground'>
              Terakhir diperbarui: {updatedAt}
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
