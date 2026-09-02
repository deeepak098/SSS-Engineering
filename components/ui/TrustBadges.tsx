import { Factory, Globe, Cog } from 'lucide-react';
import { TRUST } from '@/lib/site';

export default function TrustBadges() {
  const badges = [
    { label: 'Years in business', value: TRUST.years, unit: '+', icon: Factory, sub: 'Since 1999' },
    { label: 'Countries exported', value: TRUST.countries, unit: '', icon: Globe, sub: 'Machinery installed globally' },
    { label: 'Machines installed', value: TRUST.machinesInstalled, unit: '+', icon: Cog, sub: 'Production lines running' },
  ];
  return (
    <section className="bg-paper border-b border-earth-200/60">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-3">Built on long-term results</h2>
          <p className="text-ink/60 text-sm md:text-base">Real numbers from real installations and recurring bulk orders.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {badges.map((b) => (
            <div key={b.label} className="text-center md:text-left rounded-2xl bg-earth-50 border border-earth-200/40 p-6 md:p-8 hover:border-earth-300 transition-colors">
              <b.icon className="mx-auto md:mx-0 mb-4 text-rust" size={28} strokeWidth={1.5} />
              <p className="text-4xl md:text-5xl font-serif tracking-tight text-ink mb-1">
                {b.value}<span className="text-rust">{b.unit}</span>
              </p>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink/80 mb-1">{b.label}</h3>
              <p className="text-xs text-ink/50">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
