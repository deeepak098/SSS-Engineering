import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SITE_NAME } from '@/lib/site';
import MachineCompareTable from '@/components/ui/CompareTable';
import FormBuilder from '@/components/forms/FormBuilder';

export const metadata: Metadata = {
  title: `Machinery — ${SITE_NAME}`,
  description: 'Egg tray manufacturing machinery: semi-automatic to fully automatic lines, export-ready.',
};

const machines = [
  { name: 'Semi-Auto Line 1500', category: 'semi-automatic', capacityPerHour: 1500, specs: { power: '3.5 kW', rawMaterial: 'Waste paper / cardboard', dimensions: '2400 x 1100 x 1750 mm' }, slug: 'semi-auto-1500', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop', exportReady: true },
  { name: 'Fully-Auto Line 3000', category: 'fully-automatic', capacityPerHour: 3000, specs: { power: '6.2 kW', rawMaterial: 'Waste paper / cardboard', dimensions: '3200 x 1300 x 1900 mm' }, slug: 'full-auto-3000', image: 'https://images.unsplash.com/photo-1518770660439-4636500cff5f?q=80&w=800&auto=format&fit=crop', exportReady: true },
  { name: 'Fully-Auto Line 4500', category: 'fully-automatic', capacityPerHour: 4500, specs: { power: '9.0 kW', rawMaterial: 'Waste paper / cardboard', dimensions: '3800 x 1400 x 2050 mm' }, slug: 'full-auto-4500', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop', exportReady: true },
];

export default function MachineryPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <header className="max-w-3xl mb-14 md:mb-20">
        <h1 className="font-serif text-4xl md:text-6xl tracking-tight mb-4">Machinery</h1>
        <p className="text-ink/70 text-base md:text-lg leading-relaxed">Production lines from semi-automatic to fully automatic — designed for export with specs, installation guides, and remote support.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
        {machines.map((m) => (
          <article key={m.slug} className="rounded-2xl bg-paper border border-earth-200/40 shadow-sm overflow-hidden group">
            <div className="aspect-[16/10] overflow-hidden bg-earth-50">
              <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-serif text-xl md:text-2xl">{m.name}</h2>
                {m.exportReady && <span className="text-[10px] font-bold uppercase tracking-widest bg-rust text-paper px-2.5 py-1 rounded-full">Export-ready</span>}
              </div>
              <p className="text-xs text-ink/50 mb-3 uppercase tracking-[0.1em]">{m.category}</p>
              <div className="grid grid-cols-3 gap-3 mb-5 border-t border-earth-200/40 pt-4">
                <div><div className="text-xs text-ink/40">Capacity</div><div className="text-sm font-medium">{m.capacityPerHour}/hr</div></div>
                <div><div className="text-xs text-ink/40">Power</div><div className="text-sm font-medium">{m.specs.power}</div></div>
                <div><div className="text-xs text-ink/40">Material</div><div className="text-sm font-medium">Paper/card</div></div>
              </div>
              <Link href={`/machinery/${m.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-rust hover:text-rust/80 transition-colors">Specs & PDF <ArrowUpRight size={14} /></Link>
            </div>
          </article>
        ))}
      </div>

      <section className="rounded-2xl bg-ink text-paper p-8 md:p-12 mb-16 md:mb-20">
        <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-6">Export info</h3>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-paper/80 text-sm leading-relaxed">
          <div>
            <h4 className="font-semibold text-paper mb-3">Countries served</h4>
            <p>Over 45 countries across Africa, Middle East, Southeast Asia, and South America. Lines installed in poultry-dense regions with follow-up service available.</p>
          </div>
          <div>
            <h4 className="font-semibold text-paper mb-3">Shipping & logistics</h4>
            <p>Machines are packed in sea-grade crates with installation guides, video tutorials, and remote commissioning support included in the quote.</p>
          </div>
          <div>
            <h4 className="font-semibold text-paper mb-3">Certifications</h4>
            <p>CE-marked electrical assemblies. ISO 9001-aligned production processes with traceable documentation for import compliance.</p>
          </div>
        </div>
      </section>

      <MachineCompareTable />

      <section className="rounded-2xl bg-earth-50 border border-earth-200/40 p-8 md:p-10">
        <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-6">Quote request</h3>
        <FormBuilder
          inquiryType="machine"
          fields={[
            { name: 'name', label: 'Your name', required: true },
            { name: 'email', label: 'Email', required: true },
            { name: 'country', label: 'Country', required: true },
            { name: 'capacity', label: 'Intended capacity (pieces/hour)' },
            { name: 'budget', label: 'Budget range (optional)' },
            { name: 'message', label: 'Project details or questions', type: 'textarea', full: true },
          ]}
          submitLabel="Request a quote"
        />
      </section>
    </section>
  );
}
