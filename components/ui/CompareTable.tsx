import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const rows = [
  { feature: 'Capacity / hour', semiAuto: '1500', fullAuto: '3000', fullAuto4500: '4500' },
  { feature: 'Power (kW)', semiAuto: '3.5', fullAuto: '6.2', fullAuto4500: '9.0' },
  { feature: 'Category', semiAuto: 'Semi-automatic', fullAuto: 'Fully-automatic', fullAuto4500: 'Fully-automatic' },
  { feature: 'Export-ready', semiAuto: 'Yes', fullAuto: 'Yes', fullAuto4500: 'Yes' },
];

export default function MachineCompareTable() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <header className="mb-10 md:mb-14">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-3">Compare models</h2>
        <p className="text-ink/60 text-sm md:text-base">A quick comparison of the three machinery models available for export.</p>
      </header>
      <div className="overflow-x-auto rounded-2xl border border-earth-200/40 shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-ink text-paper">
            <tr>
              <th className="text-left px-5 py-4 font-medium">Feature</th>
              <th className="text-left px-5 py-4 font-medium">Semi-Auto 1500</th>
              <th className="text-left px-5 py-4 font-medium">Fully-Auto 3000</th>
              <th className="text-left px-5 py-4 font-medium">Fully-Auto 4500</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.feature} className="border-b border-earth-200/30">
                <th className="text-left px-5 py-4 font-normal text-ink/50">{r.feature}</th>
                <td className="px-5 py-4 text-ink">{(r as Record<string, string>)["semiAuto"]}</td>
                <td className="px-5 py-4 text-ink">{(r as Record<string, string>)["fullAuto"]}</td>
                <td className="px-5 py-4 text-ink">{(r as Record<string, string>)["fullAuto4500"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-medium text-rust hover:text-rust/80 transition-colors">Request a quote <ArrowRight size={14} /></Link>
      </div>
    </section>
  );
}
