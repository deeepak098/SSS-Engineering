import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SITE_NAME } from '@/lib/site';
import { StructuredData } from '@/components/seo/SEO';

export const metadata: Metadata = {
  title: `About — ${SITE_NAME}`,
  description: 'Factory story, manufacturing process, team and stats behind our egg tray and machinery business.',
};

export default function AboutPage() {
  return (
    <>
      <StructuredData data={{ '@context': 'https://schema.org', '@type': 'Organization', name: SITE_NAME, url: 'https://sss-engineering.com', description: 'Egg tray and machinery manufacturer.', foundingYear: 1999, numberOfEmployees: 85 }} />
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <header className="max-w-3xl mb-14 md:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rust mb-3 block">About</span>
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight mb-6">Built where agriculture meets manufacturing.</h1>
          <p className="text-ink/70 text-base md:text-lg leading-relaxed">A family-run factory that started with molded fiber trays and grew into a machinery export business spanning 45 countries.</p>
        </header>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <article className="rounded-2xl bg-earth-50 border border-earth-200/40 p-6 md:p-8">
            <h2 className="font-serif text-2xl mb-4">Factory story</h2>
            <p className="text-sm text-ink/70 leading-relaxed">Started in 1999 with a single pulp molding press. Over the years we scaled to full production lines, then began exporting the machinery that makes the trays — a natural progression driven by customer requests.</p>
          </article>
          <article className="rounded-2xl bg-earth-50 border border-earth-200/40 p-6 md:p-8">
            <h2 className="font-serif text-2xl mb-4">Process</h2>
            <p className="text-sm text-ink/70 leading-relaxed">Raw waste paper is pulped, molded under heat and vacuum, trimmed, and dried. Machinery is assembled to order, tested with sample runs, then packed for sea freight with installation guides and remote support.</p>
          </article>
          <article className="rounded-2xl bg-earth-50 border border-earth-200/40 p-6 md:p-8">
            <h2 className="font-serif text-2xl mb-4">Team</h2>
            <p className="text-sm text-ink/70 leading-relaxed">A team of 85 across engineering, production, exports, and customer support. We keep response times short and documentation clear — a priority for international buyers.</p>
          </article>
        </div>
        <section className="mt-14 md:mt-20">
          <h3 className="font-serif text-2xl md:text-3xl mb-6">Key stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Years active', value: '25+' },
              { label: 'Countries served', value: '45' },
              { label: 'Machines installed', value: '320' },
              { label: 'Team size', value: '85' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-ink text-paper p-5 md:p-6">
                <div className="text-3xl md:text-4xl font-serif tracking-tight mb-1">{s.value}</div>
                <div className="text-xs text-paper/50">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
