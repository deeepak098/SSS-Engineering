import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SITE_NAME } from '@/lib/site';
import FormBuilder from '@/components/forms/FormBuilder';

export const metadata: Metadata = {
  title: `Egg Trays — ${SITE_NAME}`,
  description: 'Bulk molded fiber egg trays for poultry farms, egg traders, and packagers.',
};

const trays = [
  { name: 'Standard 30-Hole', size: '30-hole standard', capacity: 30, material: 'Molded fiber (recycled pulp)', image: 'https://images.unsplash.com/photo-1501004318641-b39e6456f94e?q=80&w=800&auto=format&fit=crop', slug: 'standard-30-hole' },
  { name: 'Large 12-Hole', size: '12-hole large', capacity: 12, material: 'Molded fiber (recycled pulp)', image: 'https://images.unsplash.com/photo-1464226184886-0a4a5a6c9b6e?q=80&w=800&auto=format&fit=crop', slug: 'large-12-hole' },
  { name: 'Mini 42-Hole', size: '42-hole mini', capacity: 42, material: 'Molded fiber (recycled pulp)', image: 'https://images.unsplash.com/photo-1500937386664-56d3065c5e44?q=80&w=800&auto=format&fit=crop', slug: 'mini-42-hole' },
];

export default function TraysPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <header className="max-w-3xl mb-14 md:mb-20">
        <h1 className="font-serif text-4xl md:text-6xl tracking-tight mb-4">Egg Trays</h1>
        <p className="text-ink/70 text-base md:text-lg leading-relaxed">Molded fiber trays in standard capacities for poultry farms, egg traders, and packagers — available in bulk with consistent quality and delivery schedules.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-20">
        {trays.map((t) => (
          <article key={t.slug} className="rounded-2xl bg-paper border border-earth-200/40 shadow-sm overflow-hidden group">
            <div className="aspect-[4/3] overflow-hidden bg-earth-50">
              <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-6 md:p-8">
              <h2 className="font-serif text-xl md:text-2xl mb-3">{t.name}</h2>
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div><div className="text-xs text-ink/40">Size</div><div className="text-sm font-medium">{t.size}</div></div>
                <div><div className="text-xs text-ink/40">Capacity</div><div className="text-sm font-medium">{t.capacity} eggs</div></div>
                <div><div className="text-xs text-ink/40">Material</div><div className="text-sm font-medium">{t.material}</div></div>
              </div>
              <Link href={`/trays/${t.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-rust hover:text-rust/80 transition-colors">Details <ArrowUpRight size={14} /></Link>
            </div>
          </article>
        ))}
      </div>

      <section className="rounded-2xl bg-ink text-paper p-8 md:p-12 mb-16 md:mb-20">
        <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-4">Who we serve</h3>
        <p className="text-paper/70 leading-relaxed mb-6 max-w-xl">Our tray customers are poultry producers, egg traders, and packagers who need consistent supply, bulk pricing, and reliable delivery schedules.</p>
        <ul className="list-disc list-inside text-sm text-paper/70 space-y-1">
          <li>Poultry farms (domestic and regional)</li>
          <li>Egg traders and aggregators</li>
          <li>Retail and wholesale packagers</li>
        </ul>
      </section>

      <section className="rounded-2xl bg-earth-50 border border-earth-200/40 p-8 md:p-10">
        <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-6">Bulk order inquiry</h3>
        <FormBuilder
          inquiryType="tray"
          fields={[
            { name: 'name', label: 'Your name', required: true },
            { name: 'phone', label: 'Phone / WhatsApp', required: true },
            { name: 'location', label: 'Location / region', required: true },
            { name: 'quantity', label: 'Quantity needed (approx.)' },
            { name: 'frequency', label: 'Delivery frequency (e.g. weekly, monthly)', type: 'textarea', full: true },
          ]}
          submitLabel="Send inquiry"
        />
      </section>
    </section>
  );
}
