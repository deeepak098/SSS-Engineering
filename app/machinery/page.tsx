import type { Metadata } from 'next';
import Link from 'next/link';
import FormBuilder from '@/components/forms/FormBuilder';
import MachineCompareTable from '@/components/ui/CompareTable';
import { EXPORT_COUNTRIES, FALLBACK_MACHINES } from '@/lib/site';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Machinery — ${SITE_NAME}`,
  description: 'Moulded fibre tray production lines — semi-automatic to fully automatic, 1,500 to 4,500 pcs/hr, export-ready with spec tables.',
};

export default function MachineryPage() {
  const machines = FALLBACK_MACHINES;

  return (
    <div>
      <section className="border-b border-[var(--line-strong)] bg-white">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-10 sm:py-12 lg:py-14">
          <div className="max-w-[64ch]">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] text-ink/45">
              <span className="w-6 h-px bg-steel/60" aria-hidden />
              STEEL — MACHINERY
            </div>
            <h1 className="mt-3 text-[32px] sm:text-[40px] font-semibold tracking-[-0.035em] leading-[0.95] text-ink">Machinery</h1>
            <p className="mt-3 text-[13px] sm:text-[14px] leading-6 text-ink/65">
              Production lines from semi-automatic to fully automatic — spec tables below are the source of truth, not teaser cards. Each row is a
              real <span className="font-mono-spec text-[12px]">&lt;table&gt;</span> with hairline borders; capacities and dimensions in monospace.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {machines.map((m) => (
              <div key={m.slug} className="border border-[var(--line-strong)] bg-kraft/25 overflow-hidden">
                <div className="flex flex-wrap items-baseline justify-between gap-3 px-4 sm:px-6 py-4 border-b border-[var(--line)] bg-white">
                  <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
                    {m.name}{' '}
                    {m.exportReady ? (
                      <span className="ml-2 align-middle text-[10px] tracking-[0.1em] border border-rust/25 text-rust bg-rust/[0.06] px-1.5 py-0.5 leading-none">
                        EXPORT-READY
                      </span>
                    ) : null}
                  </h2>
                  <span className="text-[11px] tracking-[0.08em] text-ink/45">{m.category}</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="bg-white/70 text-left">
                        <th className="font-medium tracking-[0.06em] text-[11px] text-ink/55 px-4 sm:px-6 py-2.5 border-b border-[var(--line)] w-[18%]">
                          Capacity
                        </th>
                        <th className="font-medium tracking-[0.06em] text-[11px] text-ink/55 px-4 sm:px-6 py-2.5 border-b border-[var(--line)] w-[16%]">
                          Power
                        </th>
                        <th className="font-medium tracking-[0.06em] text-[11px] text-ink/55 px-4 sm:px-6 py-2.5 border-b border-[var(--line)]">
                          Raw material
                        </th>
                        <th className="font-medium tracking-[0.06em] text-[11px] text-ink/55 px-4 sm:px-6 py-2.5 border-b border-[var(--line)] w-[28%]">
                          Dimensions (L × W × H)
                        </th>
                        <th className="px-4 sm:px-6 py-2.5 border-b border-[var(--line)] w-px" aria-hidden />
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="font-mono-spec tabular-nums px-4 sm:px-6 py-3 border-b border-[var(--line)]">
                          {m.capacityPerHour.toLocaleString()} pcs/hr
                        </td>
                        <td className="font-mono-spec tabular-nums px-4 sm:px-6 py-3 border-b border-[var(--line)]">{m.specs.power}</td>
                        <td className="px-4 sm:px-6 py-3 border-b border-[var(--line)] text-ink/75">{m.specs.rawMaterial}</td>
                        <td className="font-mono-spec tabular-nums px-4 sm:px-6 py-3 border-b border-[var(--line)] text-[13px]">
                          {m.specs.dimensions}
                        </td>
                        <td className="whitespace-nowrap px-4 sm:px-6 py-3 border-b border-[var(--line)]">
                          <Link href={`/machinery/${m.slug}`} className="text-[12px] font-medium text-rust underline underline-offset-4">
                            Specs &amp; PDF
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export manifest — like a shipping manifest, not a globe */}
      <section className="border-b border-[var(--line-strong)] bg-kraft">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-8 sm:py-10">
          <div className="border border-[var(--line-strong)] bg-white overflow-hidden">
            <div className="flex flex-wrap items-baseline justify-between gap-3 px-4 sm:px-6 py-4 border-b border-[var(--line-strong)] bg-ink text-white">
              <h2 className="font-mono-spec text-[12px] tracking-[0.14em]">MANIFEST — EXPORT &amp; LOGISTICS</h2>
              <span className="font-mono-spec text-[11px] tracking-[0.08em] text-white/60">45 COUNTRIES · SEA-FREIGHT CRATED</span>
            </div>

            <div className="grid lg:grid-cols-[1.35fr_0.9fr]">
              <div className="p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-[var(--line)]">
                <h3 className="text-[11px] tracking-[0.1em] text-ink/45">COUNTRIES SERVED — MACHINERY INSTALLED</h3>
                <p className="mt-1 text-[12px] leading-5 text-ink/55">
                  Listed, not visualised. Poultry-dense regions across Africa, Middle East, Southeast Asia and South America.
                </p>
                <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5 font-mono-spec text-[12px] leading-5 tabular-nums text-ink/75">
                  {EXPORT_COUNTRIES.map((c) => (
                    <li key={c} className="border-b border-[var(--line-faint)] py-1">
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[11px] leading-5 text-ink/40">
                  Replace or extend this list from Firestore when ready — shape is{' '}
                  <span className="font-mono-spec">lib/site.ts → EXPORT_COUNTRIES</span>.
                </p>
              </div>

              <div className="divide-y divide-[var(--line)]">
                <div className="px-4 sm:px-6 py-5">
                  <h3 className="text-[13px] font-semibold tracking-[-0.01em] text-ink">Shipping &amp; logistics</h3>
                  <p className="mt-2 text-[13px] leading-6 text-ink/65">
                    Lines are sea-grade crated with bolted skids. Packing includes installation guide, wiring diagrams and a video run-through.
                    Remote commissioning is included in the quote; on-site available on request.
                  </p>
                </div>
                <div className="px-4 sm:px-6 py-5">
                  <h3 className="text-[13px] font-semibold tracking-[-0.01em] text-ink">Certifications</h3>
                  <p className="mt-2 text-[13px] leading-6 text-ink/65">
                    CE-marked electrical assemblies. Production aligned to ISO 9001 with traceable documentation for import compliance. Certificates
                    issued per order on request.
                  </p>
                </div>
                <div className="px-4 sm:px-6 py-5">
                  <h3 className="text-[13px] font-semibold tracking-[-0.01em] text-ink">After-sales</h3>
                  <p className="mt-2 text-[13px] leading-6 text-ink/65">
                    Spare moulds, dryer felts and vacuum pumps stocked. Response via phone and video; documented troubleshooting by machine serial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MachineCompareTable />

      <section className="bg-white border-t border-[var(--line-strong)]">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-8 sm:py-10">
          <div className="max-w-[720px] border border-[var(--line)] bg-kraft/40">
            <div className="border-b border-[var(--line)] bg-steel/[0.08] px-5 py-4 flex items-baseline justify-between gap-4">
              <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">Quote request — machinery</h2>
              <span className="text-[11px] tracking-[0.08em] text-ink/45">STEEL — MACHINERY</span>
            </div>
            <div className="px-5 py-6 bg-white/70">
              <FormBuilder
                tone="steel"
                inquiryType="machine"
                submitLabel="Request a quote"
                fields={[
                  { name: 'name', label: 'Your name', type: 'text', required: true, placeholder: 'Full name' },
                  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'name@company.com' },
                  { name: 'country', label: 'Country', type: 'text', required: true, placeholder: 'Country of installation' },
                  { name: 'capacity', label: 'Intended capacity (pcs/hr)', type: 'text', placeholder: 'e.g. 3000' },
                  { name: 'budget', label: 'Budget range (optional)', type: 'text', placeholder: 'e.g. USD 45k–60k' },
                  {
                    name: 'message',
                    label: 'Project details or questions',
                    type: 'textarea',
                    full: true,
                    placeholder: 'Site, power available, raw material, timeline…',
                  },
                ]}
              />
              <p className="mt-4 text-[11px] leading-5 text-ink/45">
                Writes <span className="font-mono-spec">inquiries</span> with <span className="font-mono-spec">type: &apos;machine&apos;</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
