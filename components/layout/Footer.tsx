import Link from 'next/link';
import { FOUNDED_YEAR } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-kraft border-t border-[var(--line-strong)]">
      <div className="h-px bg-rust" aria-hidden />
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_0.9fr_1.1fr]">
          <div>
            <div className="flex items-baseline gap-1.5 mb-3">
              <span className="text-[11px] font-medium tracking-[0.18em] text-ink/55 border border-[var(--line-strong)] px-1.5 py-0.5 leading-none">
                SSS
              </span>
              <span className="text-[15px] font-semibold tracking-[-0.02em] text-ink">Engineering</span>
            </div>
            <p className="text-[13px] leading-[1.65] text-ink/65 max-w-[32ch]">
              Moulded fibre egg trays and tray-making machinery. Factory in North India — domestic supply, export machinery.
            </p>
            <p className="mt-4 text-[11px] tracking-[0.08em] text-ink/45">
              EST. {FOUNDED_YEAR} · {year - FOUNDED_YEAR}+ YEARS · GST &amp; FACTORY ON REQUEST
            </p>
          </div>

          <div>
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-ink/45 mb-3">PRODUCT</h2>
            <ul className="space-y-2 text-[13px] leading-5">
              <li>
                <Link href="/trays" className="text-ink/70 hover:text-ink underline decoration-[var(--line-strong)] underline-offset-4">
                  Egg trays
                </Link>
              </li>
              <li>
                <Link href="/machinery" className="text-ink/70 hover:text-ink underline decoration-[var(--line-strong)] underline-offset-4">
                  Machinery
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-ink/70 hover:text-ink underline decoration-[var(--line-strong)] underline-offset-4">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ink/70 hover:text-ink underline decoration-[var(--line-strong)] underline-offset-4">
                  Process &amp; factory
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-ink/45 mb-3">ENQUIRIES</h2>
            <ul className="space-y-2 text-[13px] leading-5">
              <li>
                <Link href="/contact" className="text-ink/70 hover:text-ink underline decoration-[var(--line-strong)] underline-offset-4">
                  Tray bulk order
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ink/70 hover:text-ink underline decoration-[var(--line-strong)] underline-offset-4">
                  Machinery quote
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/contact" className="inline-flex bg-rust text-white text-[12px] font-medium px-3 py-1.5 hover:bg-[#b33e14]">
                  Request a quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-ink/45 mb-3">CONTACT</h2>
            <address className="not-italic text-[13px] leading-6 text-ink/70">
              <div>Factory &amp; works — North India</div>
              <div className="font-mono-spec text-[12px] tabular-nums text-ink/60 mt-1">+91 98765 43210</div>
              <div className="font-mono-spec text-[12px] tabular-nums text-ink/60">sales@sss-engineering.example</div>
              <div className="mt-3 text-[12px] leading-5 text-ink/55">
                Replace with your GST, full address and map link once live. These are placeholders so the site has real structure without fake specifics.
              </div>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-[var(--line)] flex flex-col sm:flex-row gap-2 justify-between text-[11px] tracking-[0.06em] text-ink/40">
          <span>© {year} SSS Engineering. All rights reserved.</span>
          <span className="font-mono-spec">SSS-ENG / SITE — KRAFT / INK / PULP / STEEL / RUST</span>
        </div>
      </div>
    </footer>
  );
}
