import Link from 'next/link';
import { TRUST } from '@/lib/site';

export default function HeroSplit() {
  return (
    <section aria-label="SSS Engineering — two production lines" className="border-b border-[var(--line-strong)] bg-kraft">
      {/* Split panels */}
      <div className="mx-auto max-w-[1180px]">
        <div className="grid md:grid-cols-2">
          {/* Left — Trays / Pulp */}
          <div className="relative border-b md:border-b-0 md:border-r border-[var(--line-strong)] bg-white/55">
            <div className="absolute inset-0 bg-pulp/[0.07] pointer-events-none" aria-hidden />
            <div className="relative px-5 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-14">
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] text-ink/45">
                <span className="w-6 h-px bg-pulp/60" aria-hidden />
                PULP — DOMESTIC SUPPLY
              </div>
              <h1 className="mt-4 text-[30px] sm:text-[36px] lg:text-[42px] font-semibold tracking-[-0.035em] leading-[0.95] text-ink">
                Egg trays
                <br />
                <span className="text-ink/55 font-normal">in bulk, by the lakh.</span>
              </h1>
              <p className="mt-4 text-[13px] sm:text-[14px] leading-6 text-ink/65 max-w-[36ch]">
                Moulded fibre trays — 30, 18, 12 and 6-egg — supplied to poultry farms, traders and packagers across North India. MOQ from{' '}
                <span className="font-mono-spec tabular-nums text-ink">15,000</span> pcs with repeat dispatch on schedule.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/trays"
                  className="inline-flex items-center justify-center bg-rust text-white text-[13px] font-medium px-5 py-2.5 hover:bg-[#b33e14] transition-colors"
                >
                  View tray range
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-[var(--line-strong)] bg-white/70 text-ink text-[13px] font-medium px-5 py-2.5 hover:bg-white transition-colors"
                >
                  Bulk enquiry
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-0 border border-[var(--line)] bg-white/60 text-[12px]">
                <div className="px-3 py-3 border-r border-[var(--line)]">
                  <div className="text-[11px] tracking-[0.1em] text-ink/45">CAPACITY</div>
                  <div className="font-mono-spec text-[13px] text-ink mt-1">6 / 12 / 18 / 30 eggs</div>
                </div>
                <div className="px-3 py-3">
                  <div className="text-[11px] tracking-[0.1em] text-ink/45">MATERIAL</div>
                  <div className="text-[13px] text-ink mt-1">Recycled kraft pulp</div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider — single deliberate reveal */}
          <div className="hidden md:block w-px bg-rust sss-hero-divider self-stretch" aria-hidden />

          {/* Right — Machinery / Steel */}
          <div className="relative bg-white/45">
            <div className="absolute inset-0 bg-steel/[0.07] pointer-events-none" aria-hidden />
            <div className="relative px-5 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-14">
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] text-ink/45">
                <span className="w-6 h-px bg-steel/60" aria-hidden />
                STEEL — EXPORT MACHINERY
              </div>
              <h2 className="mt-4 text-[30px] sm:text-[36px] lg:text-[42px] font-semibold tracking-[-0.035em] leading-[0.95] text-ink">
                Machinery
                <br />
                <span className="text-ink/55 font-normal">for tray producers.</span>
              </h2>
              <p className="mt-4 text-[13px] sm:text-[14px] leading-6 text-ink/65 max-w-[36ch]">
                Semi-automatic to fully automatic moulded fibre lines —{' '}
                <span className="font-mono-spec tabular-nums text-ink">1,500</span> to{' '}
                <span className="font-mono-spec tabular-nums text-ink">4,500</span> pcs/hr — crated for sea freight with commissioning
                support.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/machinery"
                  className="inline-flex items-center justify-center bg-ink text-white text-[13px] font-medium px-5 py-2.5 hover:bg-[#33302c] transition-colors"
                >
                  View machinery
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-[var(--line-strong)] bg-white/70 text-ink text-[13px] font-medium px-5 py-2.5 hover:bg-white transition-colors"
                >
                  Request a quote
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-0 border border-[var(--line)] bg-white/60 text-[12px]">
                <div className="px-3 py-3 border-r border-[var(--line)]">
                  <div className="text-[11px] tracking-[0.1em] text-ink/45">RANGE</div>
                  <div className="font-mono-spec text-[13px] text-ink mt-1">SS 1500 · 3000 · 4500</div>
                </div>
                <div className="px-3 py-3">
                  <div className="text-[11px] tracking-[0.1em] text-ink/45">EXPORT</div>
                  <div className="text-[13px] text-ink mt-1">45 countries · CE-marked</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated stats strip — inside the hero, not a separate card row */}
        <div className="sss-hero-fade grid grid-cols-3 divide-x divide-[var(--line)] border-t border-[var(--line-strong)] bg-white/70">
          <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-baseline justify-between gap-3">
            <div>
              <div className="font-mono-spec text-[18px] sm:text-[22px] leading-none tracking-[-0.02em] text-ink">
                {TRUST.years}
                <span className="text-rust">+</span>
              </div>
              <div className="text-[11px] tracking-[0.1em] text-ink/50 mt-1">years in operation</div>
            </div>
            <div className="hidden sm:block text-[11px] tracking-[0.08em] text-ink/35">SINCE 1999</div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-baseline justify-between gap-3">
            <div>
              <div className="font-mono-spec text-[18px] sm:text-[22px] leading-none tracking-[-0.02em] text-ink">
                {TRUST.countries}
              </div>
              <div className="text-[11px] tracking-[0.1em] text-ink/50 mt-1">countries — machinery</div>
            </div>
            <div className="hidden sm:block text-[11px] tracking-[0.08em] text-ink/35">EXPORT</div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-baseline justify-between gap-3">
            <div>
              <div className="font-mono-spec text-[18px] sm:text-[22px] leading-none tracking-[-0.02em] text-ink">
                {TRUST.machinesInstalled}
                <span className="text-rust">+</span>
              </div>
              <div className="text-[11px] tracking-[0.1em] text-ink/50 mt-1">lines installed</div>
            </div>
            <div className="hidden sm:block text-[11px] tracking-[0.08em] text-ink/35">INSTALLED</div>
          </div>
        </div>
      </div>
    </section>
  );
}
