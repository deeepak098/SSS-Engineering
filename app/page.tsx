import { Metadata } from 'next';
import HeroSplit from '@/components/ui/HeroSplit';
import TrustBadges from '@/components/ui/TrustBadges';
import { SITE_NAME, TAGLINE } from '@/lib/site';

export const metadata: Metadata = {
  title: `Home — ${SITE_NAME}`,
  description: 'Industrial molded fiber egg trays and machinery export. Bulk trays for poultry farms and machinery for manufacturers.',
  openGraph: { title: SITE_NAME, description: TAGLINE, siteName: SITE_NAME },
};

export default function HomePage() {
  return (
    <>
      <HeroSplit />
      <TrustBadges />
      <section className="bg-paper border-t border-earth-200/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0 md:max-w-none md:grid md:grid-cols-2 md:gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-5">Two clear product lines</h2>
              <p className="text-ink/70 leading-relaxed mb-6">We manufacture molded fiber egg trays for bulk orders and build tray-making machinery for international manufacturers who want to start production locally.</p>
              <a href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-rust hover:text-rust/80 transition-colors">Request a quote <span aria-hidden>→</span></a>
            </div>
            <div className="mt-8 md:mt-0 rounded-2xl overflow-hidden shadow-lg border border-earth-200/40 h-72 md:h-80 bg-gradient-to-br from-earth-100 to-earth-50 relative">
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop" alt="Industrial manufacturing" className="w-full h-full object-cover" loading="eager" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
