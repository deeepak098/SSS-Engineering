import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site';
import FormBuilder from '@/components/forms/FormBuilder';

export const metadata: Metadata = {
  title: `Contact — ${SITE_NAME}`,
  description: 'Two enquiry paths — bulk egg trays and tray machinery quotes. Both write to Firestore and notify via WhatsApp.',
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-[var(--line-strong)] bg-white">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-10 sm:py-12 lg:py-14">
          <div className="max-w-[62ch]">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] text-ink/45">
              <span className="w-6 h-px bg-rust/60" aria-hidden />
              CONTACT — TWO ENQUIRY PATHS
            </div>
            <h1 className="mt-3 text-[32px] sm:text-[40px] font-semibold tracking-[-0.035em] leading-[0.95] text-ink">Contact</h1>
            <p className="mt-3 text-[13px] sm:text-[14px] leading-6 text-ink/65">
              Choose the form that matches your request. Both write to Firestore{' '}
              <span className="font-mono-spec text-[12px]">inquiries</span> and trigger a WhatsApp notification to the business owner via
              CallMeBot — Firestore is the source of truth if WhatsApp is down.
            </p>
          </div>

          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            <div className="border border-[var(--line-strong)] bg-kraft/30 overflow-hidden">
              <div className="border-b border-[var(--line)] bg-pulp/[0.08] px-5 py-4 flex items-baseline justify-between gap-4">
                <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">Tray bulk enquiry</h2>
                <span className="text-[11px] tracking-[0.08em] text-ink/45">PULP</span>
              </div>
              <div className="px-5 py-6 bg-white/70">
                <FormBuilder
                  tone="pulp"
                  inquiryType="tray"
                  submitLabel="Send tray enquiry"
                  fields={[
                    { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Full name' },
                    { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, placeholder: '+91 …' },
                    { name: 'location', label: 'Location / region', type: 'text', placeholder: 'District, state' },
                    { name: 'quantity', label: 'Quantity (approx.)', type: 'text', placeholder: 'e.g. 2 lakh pcs / month' },
                    {
                      name: 'message',
                      label: 'Delivery frequency and cavity preference',
                      type: 'textarea',
                      full: true,
                      required: true,
                      placeholder: 'e.g. weekly despatch, 30-egg standard…',
                    },
                  ]}
                />
                <p className="mt-4 text-[11px] leading-5 text-ink/45">
                  Writes <span className="font-mono-spec">inquiries</span> with <span className="font-mono-spec">type: &apos;tray&apos;</span>.
                </p>
              </div>
            </div>

            <div className="border border-[var(--line-strong)] bg-kraft/30 overflow-hidden">
              <div className="border-b border-[var(--line)] bg-steel/[0.08] px-5 py-4 flex items-baseline justify-between gap-4">
                <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">Machinery quote</h2>
                <span className="text-[11px] tracking-[0.08em] text-ink/45">STEEL</span>
              </div>
              <div className="px-5 py-6 bg-white/70">
                <FormBuilder
                  tone="steel"
                  inquiryType="machine"
                  submitLabel="Send machinery quote"
                  fields={[
                    { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Full name' },
                    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'name@company.com' },
                    { name: 'country', label: 'Country', type: 'text', required: true, placeholder: 'Country of installation' },
                    { name: 'capacity', label: 'Intended capacity (pcs/hr)', type: 'text', placeholder: 'e.g. 3000' },
                    { name: 'budget', label: 'Budget range (optional)', type: 'text', placeholder: 'e.g. USD 45k–60k' },
                    {
                      name: 'message',
                      label: 'Project details, power available, timeline',
                      type: 'textarea',
                      full: true,
                      required: true,
                      placeholder: 'Site, raw material, utilities, target start date…',
                    },
                  ]}
                />
                <p className="mt-4 text-[11px] leading-5 text-ink/45">
                  Writes <span className="font-mono-spec">inquiries</span> with <span className="font-mono-spec">type: &apos;machine&apos;</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 border border-[var(--line)] bg-white px-4 py-3 text-[12px] leading-5 text-ink/60">
            <span className="font-medium text-ink">Direct contact</span>
            <span className="mx-2 text-ink/20">·</span>
            <span className="font-mono-spec text-ink/70">+91 98765 43210</span>
            <span className="mx-2 text-ink/20">·</span>
            <span className="font-mono-spec text-ink/70">sales@sss-engineering.example</span>
            <span className="ml-2 text-ink/40">— replace with live details before launch.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
