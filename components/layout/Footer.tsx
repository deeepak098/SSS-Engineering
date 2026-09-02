import Link from 'next/link';
import { Mail, Phone, ChevronRight, Factory } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Factory className="text-clay-400" size={22} strokeWidth={1.5} />
              <span className="font-serif text-xl tracking-tight font-bold">SSS Engineering</span>
            </div>
            <p className="text-paper/60 text-sm leading-relaxed max-w-sm">
              Industrial molded fiber egg trays and machinery built for scale, reliability, and international markets since 1999.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-paper/40 mb-4">Product Lines</h4>
            <ul className="space-y-2 text-sm text-paper/80">
              <li><Link href="/trays" className="hover:text-paper transition-colors">Egg Trays</Link></li>
              <li><Link href="/machinery" className="hover:text-paper transition-colors">Machinery</Link></li>
              <li><Link href="/gallery" className="hover:text-paper transition-colors">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-paper/40 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-paper/80">
              <li className="flex items-center gap-2"><Mail size={14} /> sales@sss-engineering.com</li>
              <li className="flex items-center gap-2"><Phone size={14} /> +91 98765 43210</li>
              <li className="pt-2"><Link href="/contact" className="inline-flex items-center gap-1 text-clay-400 hover:text-paper transition-colors">Request a quote <ChevronRight size={14} /></Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-paper/10 text-xs text-paper/30 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} SSS Engineering. All rights reserved.</span>
          <span>Made for poultry producers and machinery buyers worldwide.</span>
        </div>
      </div>
    </footer>
  );
}
