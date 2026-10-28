export interface NavItem {
  href: string;
  label: string;
}

export const leftNavItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services & Experiences" },
];

export const rightNavItems: NavItem[] = [
  { href: "/catalog", label: "Catalog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const allNavItems: NavItem[] = [...leftNavItems, ...rightNavItems];

export const noHeroRoutes = ["/privacy-policy", "/terms-of-service"];

export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
