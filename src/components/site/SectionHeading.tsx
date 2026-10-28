import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
  titleClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  action,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "left" && "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div
        className={cn(
          "max-w-2xl",
          align === "center" ? "mx-auto text-center" : "text-left",
        )}
      >
        {eyebrow && (
          <p className='font-ui text-xs font-semibold tracking-[0.22em] text-primary uppercase'>
            {eyebrow}
          </p>
        )}
        <h2
          className={cn(
            "mt-3 font-heading text-3xl leading-tight font-semibold text-foreground md:text-4xl lg:text-5xl",
            titleClassName,
          )}
        >
          {title}
        </h2>
        {description && (
          <p className='mt-4 font-body text-base leading-relaxed text-muted-foreground md:text-lg'>
            {description}
          </p>
        )}
      </div>

      {action && (
        <div
          className={cn(
            "shrink-0",
            align === "center" && "flex justify-center",
          )}
        >
          {action}
        </div>
      )}
    </div>
  );
}
