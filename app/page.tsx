import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSplit from '@/components/ui/HeroSplit';
import { SITE_NAME, FALLBACK_TRAYS, FALLBACK_MACHINES } from '@/lib/site';

export const metadata: Metadata = {
  title: `Home — ${SITE_NAME}`,
  description:
    'Moulded fibre egg trays and tray-making machinery. Domestic bulk supply to poultry farms; export machinery to 45 countries. Est. 1999.',
};

export default function HomePage() {
  const trays = FALLBACK_TRAYS.slice(0, 3);
  const machines = FALLBACK_MACHINES;

  return (
    <>
      <HeroSplit />

      {/* Trays teaser — pulp tinted */}
      <section className="border-b border-[var(--line-strong)] bg-white">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-10 sm:py-12 lg:py-14">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] text-ink/45">
                <span className="w-6 h-px bg-pulp/60" aria-hidden />
                PULP — EGG TRAYS
              </div>
              <h2 className="mt-3 text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] leading-none text-ink">
                Trays for farms, traders and packagers
              </h2>
              <p className="mt-2 text-[13px] leading-6 text-ink/60 max-w-[56ch]">
                Four sizes on one line. Recycled kraft pulp, dried to below 8% moisture, stacked and palletised for repeat bulk despatch.
              </p>
            </div>
            <Link href="/trays" className="text-[13px] font-medium text-ink underline decoration-[var(--line-strong)] underline-offset-4 hover:text-rust">
              View all trays
            </Link>
          </div>

          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            <table className="sss-table min-w-[640px]">
              <thead>
                <tr>
                  <th className="w-[28%]">Product</th>
                  <th>Size</th>
                  <th>Capacity</th>
                  <th>Material</th>
                  <th>MOQ</th>
                  <th className="w-px" aria-hidden />
                </tr>
              </thead>
              <tbody>
                {trays.map((t) => (
                  <tr key={t.slug}>
                    <th scope="row" className="font-medium !text-ink">
                      {t.name}
                    </th>
                    <td className="font-mono-spec text-[13px]">{t.size}</td>
                    <td className="font-mono-spec text-[13px]">{t.capacity} eggs</td>
                    <td className="text-[13px]">{t.material}</td>
                    <td className="font-mono-spec text-[13px]">{t.moq}</td>
                    <td className="whitespace-nowrap">
                      <Link href={`/trays/${t.slug}`} className="text-[12px] font-medium text-rust hover:underline underline-offset-4">
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-3 text-[12px] leading-5">
            <div className="border border-[var(--line)] bg-kraft/60 px-4 py-3">
              <span className="font-medium text-ink">Who it serves</span>
              <span className="text-ink/60"> — poultry farms, egg traders, wholesale and retail packagers.</span>
            </div>
            <div className="border border-[var(--line)] bg-kraft/60 px-4 py-3">
              <span className="font-medium text-ink">How it ships</span>
              <span className="text-ink/60"> — poly-wrapped bundles, palletised, fleet despatch on agreed schedule.</span>
            </div>
            <div className="border border-[var(--line)] bg-kraft/60 px-4 py-3">
              <span className="font-medium text-ink">Next step</span>{' '}
              <Link href="/contact" className="text-rust underline underline-offset-4">
                Bulk enquiry
              </Link>
              <span className="text-ink/60"> with quantity and delivery region.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery teaser — steel tinted */}
      <section className="border-b border-[var(--line-strong)] bg-kraft">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-10 sm:py-12 lg:py-14">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] text-ink/45">
                <span className="w-6 h-px bg-steel/60" aria-hidden />
                STEEL — MACHINERY
              </div>
              <h2 className="mt-3 text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] leading-none text-ink">
                Production lines, crated for export
              </h2>
              <p className="mt-2 text-[13px] leading-6 text-ink/60 max-w-[58ch]">
                Three models covering 1,500 to 4,500 pcs/hr. Waste paper in, finished trays out — with dryer, hot-press and stacker.
              </p>
            </div>
            <Link href="/machinery" className="text-[13px] font-medium text-ink underline decoration-[var(--line-strong)] underline-offset-4 hover:text-rust">
              View all machinery
            </Link>
          </div>

          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            <table className="sss-table min-w-[680px]">
              <thead>
                <tr>
                  <th className="w-[30%]">Model</th>
                  <th>Capacity</th>
                  <th>Power</th>
                  <th>Raw material</th>
                  <th>Dimensions</th>
                  <th className="w-px" aria-hidden />
                </tr>
              </thead>
              <tbody>
                {machines.map((m) => (
                  <tr key={m.slug}>
                    <th scope="row" className="font-medium !text-ink">
                      <span className="inline-flex items-center gap-2">
                        {m.name}
                        <span
                          className={`text-[10px] tracking-[0.08em] px-1.5 py-0.5 border leading-none ${
                            m.category === 'fully-automatic'
                              ? 'border-steel/30 text-steel bg-steel/[0.08]'
                              : 'border-pulp/30 text-pulp bg-pulp/[0.08]'
                          }`}
                        >
                          {m.category === 'fully-automatic' ? 'AUTO' : 'SEMI'}
                        </span>
                      </span>
                    </th>
                    <td className="font-mono-spec text-[13px]">{m.capacityPerHour.toLocaleString()} pcs/hr</td>
                    <td className="font-mono-spec text-[13px]">{m.specs.power}</td>
                    <td className="text-[13px]">{m.specs.rawMaterial}</td>
                    <td className="font-mono-spec text-[13px]">{m.specs.dimensions}</td>
                    <td className="whitespace-nowrap">
                      <Link href={`/machinery/${m.slug}`} className="text-[12px] font-medium text-rust hover:underline underline-offset-4">
                        Specs
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-[12px] leading-5 text-ink/55">
            Export info is styled as a shipping manifest on{' '}
            <Link href="/machinery" className="text-ink underline decoration-[var(--line-strong)] underline-offset-4">
              Machinery
            </Link>{' '}
            — country list, certifications and logistics notes in a bordered block. No globe graphic.
          </div>
        </div>
      </section>
    </>
  );
}
