'use client';
import Link from 'next/link';
import { Menu, X, Factory } from 'lucide-react';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/trays', label: 'Egg Trays' },
  { href: '/machinery', label: 'Machinery' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-earth-200/60">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Factory className="text-rust group-hover:rotate-3 transition-transform" size={22} strokeWidth={1.5} />
          <span className="font-serif text-lg tracking-tight text-ink font-bold">SSS Engineering</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/80">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-rust transition-colors">{l.label}</Link>
          ))}
        </nav>
        <button className="md:hidden text-ink" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-earth-200/60 bg-paper/95 backdrop-blur-md">
          <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3 text-sm font-medium text-ink/80">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1 hover:text-rust">{l.label}</Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
