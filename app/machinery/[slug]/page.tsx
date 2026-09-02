import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Download } from 'lucide-react';
import { SITE_NAME } from '@/lib/site';
import { StructuredData } from '@/components/seo/SEO';

export const metadata: Metadata = {
  title: `Semi-Auto Line 1500 — ${SITE_NAME}`,
  description: 'Semi-automatic egg tray production line: 1500 pieces/hour, 3.5 kW, waste paper input.',
};

export default function MachineDetailPage() {
  const specs = [
    { label: 'Capacity', value: '1500 pieces/hour' },
    { label: 'Power', value: '3.5 kW' },
    { label: 'Raw material', value: 'Waste paper / cardboard' },
    { label: 'Dimensions', value: '2400 x 1100 x 1750 mm' },
    { label: 'Category', value: 'Semi-automatic' },
  ];

  return (
    <>
      <StructuredData data={{ '@context': 'https://schema.org', '@type': 'Product', name: 'Semi-Auto Line 1500', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop', description: 'Semi-automatic egg tray production line with 1500 pieces/hour capacity.', offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'USD', price: 'Contact for quote' }, brand: { '@type': 'Brand', name: SITE_NAME } }} />
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rust mb-3 block">Machinery</span>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight mb-5">Semi-Auto Line 1500</h1>
            <p className="text-ink/70 leading-relaxed mb-8">A reliable semi-automatic line for small-to-medium production volumes. Includes pulp station, molding press, dryer, and trimming station.</p>
            <a href="#brochure" className="inline-flex items-center gap-2 rounded-lg bg-rust text-paper px-5 py-3 text-sm font-medium hover:bg-rust/90 transition-colors"><Download size={16} /> Download spec sheet PDF</a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-earth-200/40">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" alt="Semi-Auto Line 1500" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-6 md:gap-10">
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-6">Specifications</h2>
            <div className="rounded-xl border border-earth-200/40 overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {specs.map((s) => (
                    <tr key={s.label} className="border-b border-earth-200/30">
                      <th className="text-left text-ink/50 font-normal px-5 py-3 w-48">{s.label}</th>
                      <td className="text-ink font-medium px-5 py-3">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-xl md:text-2xl tracking-tight mb-4">Image gallery</h2>
            <div className="grid grid-cols-2 gap-3">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" alt="Line view" className="rounded-xl border border-earth-200/40" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop" alt="Installed machine" className="rounded-xl border border-earth-200/40" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
