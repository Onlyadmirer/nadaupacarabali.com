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
    <div className='group bg-card border border-border rounded-xl p-8 shadow-sm hover:border-[#c05621]/40 transition-all duration-500 flex flex-col'>
      <div className='w-12 h-12 rounded-lg bg-[#c05621]/10 flex items-center justify-center text-[#c05621] mb-5 group-hover:bg-[#c05621]/15 transition-colors duration-300'>
        {icon}
      </div>

      <h2 className='font-libre-baskerville italic text-xl lg:text-2xl text-[#9a3412] mb-3 leading-tight'>
        {title}
      </h2>

      <p className='font-outfit text-[#6f6055] text-lg leading-relaxed mb-6 flex-1'>
        {description}
      </p>

      {action && (
        <a
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noopener noreferrer" : undefined}
          className='font-outfit text-xs tracking-[0.15em] uppercase text-[#c05621] hover:text-[#9a3412] transition-colors duration-300 inline-flex items-center gap-2 group/link'
        >
          {action.label}
          <span className='transition-transform duration-300 group-hover/link:translate-x-1'>
            &rarr;
          </span>
        </a>
      )}
    </div>
  );
}
