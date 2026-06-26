"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";

const links = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 bg-background/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-12">
        <Link
          href="/"
          className="font-mono text-accent/90 text-xs tracking-widest hover:text-accent transition-colors"
        >
          cgrover
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-wide transition-colors py-2 ${
                  active
                    ? "text-foreground"
                    : "text-muted hover:text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <MobileMenu pathname={pathname} />
      </div>
      <hr className="divider" />
    </nav>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  }, [pathname]);

  return (
    <div className="md:hidden">
      <details ref={detailsRef} className="group">
        <summary
          className="list-none cursor-pointer text-muted hover:text-foreground transition-colors p-2 -m-2"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </summary>
        <div className="absolute right-4 top-11 bg-surface border border-border p-3 min-w-[140px] z-50">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-2 py-2.5 text-xs tracking-wide ${
                  active ? "text-foreground" : "text-muted hover:text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </details>
    </div>
  );
}
