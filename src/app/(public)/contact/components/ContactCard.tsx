import type { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    href: string;
    external?: boolean;
  };
}

export default function ContactCard({
  icon,
  title,
  description,
  action,
}: ContactCardProps) {
  return (
    <div className='group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_70px_-45px_rgba(139,94,60,0.55)] md:p-8'>
      <div className='mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary/15'>
        {icon}
      </div>

      <h3 className='font-heading text-xl leading-tight font-semibold text-foreground lg:text-2xl'>
        {title}
      </h3>

      <p className='mt-3 flex-1 font-body text-sm leading-relaxed text-muted-foreground'>
        {description}
      </p>

      {action && (
        <a
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noopener noreferrer" : undefined}
          className='mt-6 inline-flex min-h-11 items-center gap-2 font-ui text-xs font-semibold tracking-[0.14em] text-primary uppercase transition-colors hover:text-primary-hover'
        >
          {action.label}
          <span aria-hidden='true' className='transition-transform duration-200 group-hover:translate-x-0.5'>
            &rarr;
          </span>
        </a>
      )}
    </div>
  );
}
