"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ExternalLink,
  LayoutDashboard,
  ListMusic,
  LogOut,
  Menu,
  Tags,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { logoutAction } from "@/app/admin/login/actions";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/catalog", label: "Katalog", icon: ListMusic },
  { href: "/admin/categories", label: "Kategori", icon: Tags },
];

function isActive(pathname: string, href: string) {
  if (href === "/admin") return pathname === "/admin";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Brand() {
  return (
    <div className='px-1'>
      <p className='font-outfit text-[10px] tracking-[0.4em] text-primary uppercase'>
        Nada Upacara Bali
      </p>
      <p className='font-libre-baskerville mt-1 text-xl text-foreground italic'>
        Panel Admin
      </p>
    </div>
  );
}

function NavLinks({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <nav className='flex flex-col gap-1'>
      {navItems.map((item) => {
        const active = isActive(pathname, item.href);
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "font-outfit group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200",
              active
                ? "bg-primary text-primary-foreground shadow-[0_10px_30px_-18px_rgba(139,94,60,0.9)]"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
            )}
          >
            <Icon className='size-4' />
            <span className='tracking-wide'>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function SidebarFooter({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className='mt-auto space-y-2 border-t border-border/70 pt-4'>
      <Link
        href='/catalog'
        target='_blank'
        rel='noopener noreferrer'
        onClick={onNavigate}
        className='font-outfit flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground'
      >
        <ExternalLink className='size-4' />
        Lihat katalog publik
      </Link>
      <form action={logoutAction}>
        <button
          type='submit'
          className='font-outfit flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive'
        >
          <LogOut className='size-4' />
          Keluar
        </button>
      </form>
    </div>
  );
}

export default function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeSheet = () => setOpen(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className='fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border/70 bg-card/80 px-4 py-6 backdrop-blur lg:flex'>
        <Brand />
        <div className='mt-10 flex-1'>
          <p className='font-outfit mb-2 px-3 text-[10px] tracking-[0.3em] text-muted-foreground uppercase'>
            Menu
          </p>
          <NavLinks pathname={pathname} />
        </div>
        <SidebarFooter />
      </aside>

      {/* Mobile top bar */}
      <header className='sticky top-0 z-30 flex items-center justify-between border-b border-border/70 bg-background/90 px-4 py-3 backdrop-blur lg:hidden'>
        <Brand />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon' aria-label='Buka menu'>
              <Menu className='size-4' />
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='w-72 bg-card px-4 py-6'>
            <SheetHeader className='p-0'>
              <SheetTitle className='sr-only'>Menu admin</SheetTitle>
              <SheetDescription className='sr-only'>
                Navigasi panel admin Nada Upacara Bali.
              </SheetDescription>
              <Brand />
            </SheetHeader>
            <div className='mt-6 flex flex-1 flex-col'>
              <NavLinks pathname={pathname} onNavigate={closeSheet} />
              <SidebarFooter onNavigate={closeSheet} />
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
