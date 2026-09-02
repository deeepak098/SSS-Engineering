import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSplit() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ink via-slate-850 to-earth-900 text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 md:py-32">
        <div className="text-center md:text-left max-w-4xl">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-6">
            Egg trays built for scale. <br className="hidden md:block" />
            <span className="text-clay-300">Machinery built for the world.</span>
          </h1>
          <p className="text-paper/70 text-base md:text-lg leading-relaxed mb-10 max-w-2xl md:max-w-xl mx-auto md:mx-0">
            For 25 years we have produced molded fiber trays for poultry producers and exported machinery to over 45 countries. Two clear paths — start with the one that fits.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
          <Link href="/trays" className="group block rounded-2xl bg-paper/5 border border-paper/10 hover:bg-paper/10 hover:border-paper/20 transition-colors p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-clay-300">Product Line</span>
              <ArrowRight className="text-paper/40 group-hover:text-paper transition-colors" size={18} />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl mb-3">Egg Trays</h2>
            <p className="text-paper/60 text-sm leading-relaxed mb-4">Molded fiber trays in standard and custom sizes with bulk MOQ for farms, traders, and packagers.</p>
            <span className="text-sm font-medium text-paper/90 group-hover:underline">Browse trays</span>
          </Link>
          <Link href="/machinery" className="group block rounded-2xl bg-paper/5 border border-paper/10 hover:bg-paper/10 hover:border-paper/20 transition-colors p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-clay-300">Product Line</span>
              <ArrowRight className="text-paper/40 group-hover:text-paper transition-colors" size={18} />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl mb-3">Machinery</h2>
            <p className="text-paper/60 text-sm leading-relaxed mb-4">Semi-automatic to fully automatic tray production lines with export-ready specs and installation support.</p>
            <span className="text-sm font-medium text-paper/90 group-hover:underline">View machinery</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
