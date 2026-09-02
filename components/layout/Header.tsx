'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { href: '/trays', label: 'Egg trays' },
  { href: '/machinery', label: 'Machinery' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const WORDMARK = (
  <span className="flex items-baseline gap-1.5" aria-label="SSS Engineering home">
    <span className="text-[11px] font-medium tracking-[0.18em] text-ink/55 border border-[var(--line-strong)] px-1.5 py-0.5 leading-none">
      SSS
    </span>
    <span className="text-[15px] font-semibold tracking-[-0.02em] text-ink leading-none">Engineering</span>
    <span className="hidden sm:inline text-[10px] tracking-[0.12em] text-ink/45 ml-1">EST. 1999</span>
  </span>
);

function NavLink({ href, label, pathname }: { href: string; label: string; pathname: string | null }) {
  const active = pathname === href || (href !== '/' && pathname?.startsWith(href));
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`text-[13px] tracking-[-0.01em] pb-1 border-b transition-colors ${
        active ? 'text-ink border-ink' : 'text-ink/65 border-transparent hover:text-ink hover:border-[var(--line-strong)]'
      }`}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-kraft border-b border-[var(--line-strong)]">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 h-[56px] flex items-center justify-between gap-6">
        <Link href="/" className="shrink-0 py-2" onClick={() => setOpen(false)}>
          {WORDMARK}
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-7" aria-label="Primary">
          <Link
            href="/"
            aria-current={pathname === '/' ? 'page' : undefined}
            className={`text-[13px] pb-1 border-b ${pathname === '/' ? 'text-ink border-ink' : 'text-ink/65 border-transparent hover:text-ink'}`}
          >
            Home
          </Link>
          {links.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} pathname={pathname} />
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-rust text-white text-[13px] font-medium tracking-[-0.01em] px-4 py-2 hover:bg-[#b33e14] transition-colors"
          >
            Request a quote
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-[var(--line-strong)] text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="sss-mobile-nav"
        >
          {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
        </button>
      </div>

      {open && (
        <div id="sss-mobile-nav" className="md:hidden border-t border-[var(--line-strong)] bg-kraft">
          <nav className="mx-auto max-w-[1180px] px-4 py-4 flex flex-col gap-1" aria-label="Mobile">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`py-2.5 text-[14px] border-b ${pathname === '/' ? 'text-ink border-ink' : 'text-ink/75 border-[var(--line)]'}`}
            >
              Home
            </Link>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 text-[14px] border-b ${
                  pathname === l.href || pathname?.startsWith(l.href) ? 'text-ink border-ink' : 'text-ink/75 border-[var(--line)]'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center bg-rust text-white text-[13px] font-medium px-4 py-3"
            >
              Request a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
