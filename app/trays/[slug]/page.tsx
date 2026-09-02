import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SITE_NAME } from '@/lib/site';
import { StructuredData } from '@/components/seo/SEO';

export const metadata: Metadata = {
  title: `Standard 30-Hole — ${SITE_NAME}`,
  description: 'Standard molded fiber egg tray with 30-hole capacity.',
};

export default function TrayDetailPage() {
  return (
    <>
      <StructuredData data={{ '@context': 'https://schema.org', '@type': 'Product', name: 'Standard 30-Hole', description: '30-hole molded fiber egg tray.', offers: { '@type': 'Offer', priceCurrency: 'USD', price: 'Contact for quote', availability: 'https://schema.org/InStock' }, brand: { '@type': 'Brand', name: SITE_NAME } }} />
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rust mb-3 block">Trays</span>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight mb-5">Standard 30-Hole</h1>
            <p className="text-ink/70 leading-relaxed mb-8">A standard molded fiber tray for 30 eggs. Designed for poultry farms and egg traders who need reliable bulk supply with consistent sizing.</p>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-rust text-paper px-5 py-3 text-sm font-medium hover:bg-rust/90 transition-colors">Request bulk pricing <ArrowRight size={16} /></a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-earth-200/40 bg-earth-50">
            <img src="https://images.unsplash.com/photo-1501004318641-b39e6456f94e?q=80&w=1200&auto=format&fit=crop" alt="Standard 30-Hole" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
