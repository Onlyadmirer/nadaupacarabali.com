import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: number | string;
  hint?: string;
  icon: LucideIcon;
  accent?: boolean;
}

export default function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  accent,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-card p-5 ring-1 ring-border/70 shadow-[0_18px_50px_-40px_rgba(139,94,60,0.5)]",
        accent && "bg-primary text-primary-foreground ring-primary/40",
      )}
    >
      <div className='flex items-start justify-between gap-3'>
        <div>
          <p
            className={cn(
              "font-outfit text-[10px] tracking-[0.2em] uppercase",
              accent ? "text-primary-foreground/70" : "text-muted-foreground",
            )}
          >
            {label}
          </p>
          <p className='font-outfit mt-2 text-3xl font-semibold tabular-nums'>
            {value}
          </p>
        </div>
        <span
          className={cn(
            "flex size-9 items-center justify-center rounded-full",
            accent
              ? "bg-primary-foreground/15 text-primary-foreground"
              : "bg-secondary text-primary",
          )}
        >
          <Icon className='size-4' />
        </span>
      </div>
      {hint && (
        <p
          className={cn(
            "font-outfit mt-3 text-xs",
            accent ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          {hint}
        </p>
      )}
    </div>
  );
}
