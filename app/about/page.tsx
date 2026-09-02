import type { Metadata } from 'next';
import Link from 'next/link';
import { StructuredData } from '@/components/seo/SEO';
import { FOUNDED_YEAR, MANUFACTURING_STEPS, SITE_NAME, TRUST } from '@/lib/site';

export const metadata: Metadata = {
  title: `About — ${SITE_NAME}`,
  description: `Factory story since ${FOUNDED_YEAR}: from a single pulp press to tray lines in 45 countries. Five-step manufacturing process, team and facts.`,
};

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: SITE_NAME,
          url: 'https://sss-engineering.com',
          description: 'Moulded fibre egg tray and tray machinery manufacturer — domestic trays, export machinery. Est. 1999.',
          foundingDate: `${FOUNDED_YEAR}`,
          numberOfEmployees: 85,
        }}
      />

      <section className="border-b border-[var(--line-strong)] bg-white">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-10 sm:py-12 lg:py-14">
          <div className="max-w-[64ch]">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] text-ink/45">
              <span className="w-6 h-px bg-rust/60" aria-hidden />
              SINCE {FOUNDED_YEAR}
            </div>
            <h1 className="mt-3 text-[32px] sm:text-[40px] font-semibold tracking-[-0.035em] leading-[0.95] text-ink">
              Built where agriculture meets manufacturing
            </h1>
            <p className="mt-3 text-[13px] sm:text-[14px] leading-6 text-ink/65">
              A family-run factory that started with a single pulp moulding press in {FOUNDED_YEAR} and grew into a machinery export
              business — a natural step when customers asked to buy the line that makes the trays.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--line)] border border-[var(--line-strong)] bg-kraft/20">
            <div className="px-5 py-6">
              <h2 className="text-[13px] font-semibold tracking-[-0.01em] text-ink">Factory story</h2>
              <p className="mt-2 text-[13px] leading-6 text-ink/65">
                Started with one press and a dryer. Scaled to a full line, then began building lines for buyers in other markets — same tooling,
                crated for export.
              </p>
            </div>
            <div className="px-5 py-6">
              <h2 className="text-[13px] font-semibold tracking-[-0.01em] text-ink">What we make</h2>
              <p className="mt-2 text-[13px] leading-6 text-ink/65">
                Moulded fibre egg trays in four cavities (30/18/12/6) and the semi-to-fully-automatic lines that produce them — including
                dryer, hot-press and stacker.
              </p>
            </div>
            <div className="px-5 py-6">
              <h2 className="text-[13px] font-semibold tracking-[-0.01em] text-ink">Team</h2>
              <p className="mt-2 text-[13px] leading-6 text-ink/65">
                85 people across engineering, production, exports and support. Short response times and clear documentation — essential for
                international buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing process — numbered sequence IS appropriate here */}
      <section className="border-b border-[var(--line-strong)] bg-kraft">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-8 sm:py-10">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-ink">Manufacturing process</h2>
            <span className="font-mono-spec text-[11px] tracking-[0.08em] text-ink/40">01 → 05 — PULP TO PALLET</span>
          </div>
          <p className="mt-2 text-[13px] leading-6 text-ink/60 max-w-[60ch]">
            Numbered markers here are functional — this is an actual production sequence, the one place where 01/02/… is honest.
          </p>

          <ol className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-0 border border-[var(--line-strong)] bg-white overflow-hidden">
            {MANUFACTURING_STEPS.map((s) => (
              <li key={s.n} className="border-b sm:border-b lg:border-b-0 lg:border-r last:border-0 border-[var(--line)] px-5 py-6">
                <div className="font-mono-spec text-[12px] tracking-[0.14em] text-rust">{s.n}</div>
                <h3 className="mt-2 text-[14px] font-semibold tracking-[-0.01em] text-ink">{s.title}</h3>
                <p className="mt-2 text-[12px] leading-5 text-ink/60">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-[var(--line-strong)] bg-white">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-8 sm:py-10">
          <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-ink">Facts</h2>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[var(--line-strong)] bg-kraft/20 overflow-hidden">
            <div className="border-b lg:border-b-0 lg:border-r border-[var(--line)] px-5 py-6 bg-white/60">
              <div className="font-mono-spec text-[22px] leading-none tracking-[-0.02em] text-ink">
                {new Date().getFullYear() - FOUNDED_YEAR}
                <span className="text-rust">+</span>
              </div>
              <div className="text-[11px] tracking-[0.1em] text-ink/50 mt-2">years active</div>
              <div className="text-[12px] leading-5 text-ink/45 mt-1">Since {FOUNDED_YEAR}</div>
            </div>
            <div className="border-b lg:border-b-0 lg:border-r border-[var(--line)] px-5 py-6 bg-white/60">
              <div className="font-mono-spec text-[22px] leading-none tracking-[-0.02em] text-ink">{TRUST.countries}</div>
              <div className="text-[11px] tracking-[0.1em] text-ink/50 mt-2">countries — machinery</div>
              <div className="text-[12px] leading-5 text-ink/45 mt-1">Export lines installed</div>
            </div>
            <div className="border-b sm:border-b-0 border-r sm:border-r-0 lg:border-r border-[var(--line)] px-5 py-6 bg-white/60">
              <div className="font-mono-spec text-[22px] leading-none tracking-[-0.02em] text-ink">
                {TRUST.machinesInstalled}
                <span className="text-rust">+</span>
              </div>
              <div className="text-[11px] tracking-[0.1em] text-ink/50 mt-2">lines installed</div>
              <div className="text-[12px] leading-5 text-ink/45 mt-1">Production lines running</div>
            </div>
            <div className="px-5 py-6 bg-white/60">
              <div className="font-mono-spec text-[22px] leading-none tracking-[-0.02em] text-ink">85</div>
              <div className="text-[11px] tracking-[0.1em] text-ink/50 mt-2">team size</div>
              <div className="text-[12px] leading-5 text-ink/45 mt-1">Engineering &amp; operations</div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/gallery" className="inline-flex border border-[var(--line-strong)] bg-white text-ink text-[13px] font-medium px-4 py-2 hover:bg-kraft/40">
              View factory gallery
            </Link>
            <Link href="/contact" className="inline-flex bg-rust text-white text-[13px] font-medium px-4 py-2 hover:bg-[#b33e14]">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
