import type { Metadata } from 'next';
import Link from 'next/link';
import FormBuilder from '@/components/forms/FormBuilder';
import { FALLBACK_TRAYS } from '@/lib/site';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Egg Trays — ${SITE_NAME}`,
  description: 'Moulded fibre egg trays — 30/18/12/6-egg, recycled kraft pulp, bulk MOQ with repeat despatch to poultry farms, traders and packagers.',
};

export default function TraysPage() {
  const trays = FALLBACK_TRAYS;

  return (
    <div>
      <section className="border-b border-[var(--line-strong)] bg-white">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-10 sm:py-12 lg:py-14">
          <div className="max-w-[64ch]">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] text-ink/45">
              <span className="w-6 h-px bg-pulp/60" aria-hidden />
              PULP — EGG TRAYS
            </div>
            <h1 className="mt-3 text-[32px] sm:text-[40px] font-semibold tracking-[-0.035em] leading-[0.95] text-ink">Egg trays</h1>
            <p className="mt-3 text-[13px] sm:text-[14px] leading-6 text-ink/65">
              Moulded fibre trays from recycled kraft pulp for poultry farms, egg traders and packagers — available in bulk on repeat despatch.
              Spec tables below use the exact Firestore shape so density is honest before data arrives.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            <table className="sss-table min-w-[720px]">
              <thead>
                <tr>
                  <th className="w-[22%]">Product</th>
                  <th>Size</th>
                  <th>Capacity</th>
                  <th>Material</th>
                  <th>MOQ</th>
                  <th aria-hidden className="w-px" />
                </tr>
              </thead>
              <tbody>
                {trays.map((t) => (
                  <tr key={t.slug}>
                    <th scope="row" className="!text-ink font-medium">
                      {t.name}
                    </th>
                    <td className="font-mono-spec text-[13px]">{t.size}</td>
                    <td className="font-mono-spec text-[13px]">{t.capacity} eggs</td>
                    <td className="text-[13px]">{t.material}</td>
                    <td className="font-mono-spec text-[13px]">{t.moq}</td>
                    <td className="whitespace-nowrap">
                      <Link href={`/trays/${t.slug}`} className="text-[12px] font-medium text-rust underline underline-offset-4">
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-[11px] tracking-[0.06em] text-ink/40">
            Firestore: <span className="font-mono-spec">trays: {'{ name, size, capacity, material, images[], moq, slug }'}</span> — grid renders
            the same fields 1:1. MOQ in mono because it is a quoted value.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--line-strong)] bg-kraft">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-8 sm:py-10">
          <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-ink">Who we serve</h2>
          <div className="mt-6 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--line)] border border-[var(--line)] bg-white">
            <div className="px-5 py-6">
              <h3 className="text-[13px] font-semibold tracking-[-0.01em] text-ink">Poultry farms</h3>
              <p className="mt-2 text-[13px] leading-6 text-ink/65">
                Domestic and regional layer operations taking repeat consignments on a fixed weekly or fortnightly schedule.
              </p>
            </div>
            <div className="px-5 py-6">
              <h3 className="text-[13px] font-semibold tracking-[-0.01em] text-ink">Egg traders &amp; aggregators</h3>
              <p className="mt-2 text-[13px] leading-6 text-ink/65">
                Traders who collect, grade and redistribute — need consistent cavity fit and stack height across lots.
              </p>
            </div>
            <div className="px-5 py-6">
              <h3 className="text-[13px] font-semibold tracking-[-0.01em] text-ink">Retail &amp; wholesale packagers</h3>
              <p className="mt-2 text-[13px] leading-6 text-ink/65">
                Packhouses using 18/12/6-egg retail trays for branded cartons; supplied poly-wrapped and palletised.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-[var(--line-strong)]">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-8 sm:py-10">
          <div className="max-w-[720px] border border-[var(--line)] bg-kraft/40">
            <div className="border-b border-[var(--line)] bg-pulp/[0.08] px-5 py-4 flex items-baseline justify-between gap-4">
              <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">Bulk order enquiry</h2>
              <span className="text-[11px] tracking-[0.08em] text-ink/45">PULP — TRAYS</span>
            </div>
            <div className="px-5 py-6 bg-white/70">
              <FormBuilder
                tone="pulp"
                inquiryType="tray"
                submitLabel="Send bulk enquiry"
                fields={[
                  { name: 'name', label: 'Your name', type: 'text', required: true, placeholder: 'Full name' },
                  { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, placeholder: '+91 …' },
                  { name: 'location', label: 'Location / region', type: 'text', required: true, placeholder: 'District, state' },
                  { name: 'quantity', label: 'Quantity needed (approx.)', type: 'text', placeholder: 'e.g. 2 lakh pcs / month' },
                  {
                    name: 'frequency',
                    label: 'Delivery frequency',
                    type: 'textarea',
                    full: true,
                    placeholder: 'e.g. weekly, fortnightly — and any cavity preference',
                  },
                ]}
              />
              <p className="mt-4 text-[11px] leading-5 text-ink/45">
                Writes to Firestore <span className="font-mono-spec">inquiries</span> with <span className="font-mono-spec">type: &apos;tray&apos;</span> and
                triggers a WhatsApp notification to the business owner via CallMeBot. No enquiry is lost if WhatsApp is down — Firestore is the source of
                truth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
