import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: PageHeaderProps) {
  return (
    <div className='mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
      <div>
        {eyebrow && (
          <p className='font-outfit text-[10px] tracking-[0.3em] text-primary uppercase'>
            {eyebrow}
          </p>
        )}
        <h1 className='font-libre-baskerville mt-1.5 text-3xl text-foreground italic sm:text-4xl'>
          {title}
        </h1>
        {description && (
          <p className='font-outfit mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground'>
            {description}
          </p>
        )}
      </div>
      {action && <div className='shrink-0'>{action}</div>}
    </div>
  );
}
