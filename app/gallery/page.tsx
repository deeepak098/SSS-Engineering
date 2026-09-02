import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Gallery — ${SITE_NAME}`,
  description: 'Factory floor and installed machinery at client sites — simple image grid with hairline frames, no lightbox.',
};

const images: { label: string; caption: string }[] = [
  { label: 'PULP LINE', caption: 'Raw pulp preparation and screening' },
  { label: 'MOULDING', caption: 'Vacuum moulding — 30-cavity aluminium moulds' },
  { label: 'DRYER', caption: 'Multi-deck hot-air dryer, moisture below 8%' },
  { label: 'HOT-PRESS', caption: 'Trimming and hot-press finishing' },
  { label: 'STACKING', caption: 'Inline counting and stacking' },
  { label: 'CRATING', caption: 'Sea-freight crating for export machinery' },
  { label: 'CLIENT SITE — AFRICA', caption: 'Installed SSS 3000 at a client site' },
  { label: 'CLIENT SITE — SE ASIA', caption: 'Installed SSS 1500 — semi-automatic line' },
];

export default function GalleryPage() {
  return (
    <div>
      <section className="border-b border-[var(--line-strong)] bg-white">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-10 sm:py-12">
          <div className="max-w-[62ch]">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] text-ink/45">
              <span className="w-6 h-px bg-ink/30" aria-hidden />
              GALLERY — FACTORY &amp; INSTALLATIONS
            </div>
            <h1 className="mt-3 text-[32px] sm:text-[40px] font-semibold tracking-[-0.035em] leading-[0.95] text-ink">Gallery</h1>
            <p className="mt-3 text-[13px] sm:text-[14px] leading-6 text-ink/65">
              Real photos from the factory and from installations at client production sites. Simple bordered grid — no lightbox, no carousel,
              no JS. Replace the placeholders below with your own assets when available.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {images.map((img) => (
              <figure key={img.label} className="border border-[var(--line-strong)] bg-kraft/20 overflow-hidden">
                <div className="aspect-[4/3] bg-white flex flex-col items-center justify-center gap-1 border-b border-[var(--line)]">
                  <span className="font-mono-spec text-[11px] tracking-[0.12em] text-ink/35">{img.label}</span>
                  <span className="text-[11px] tracking-[0.06em] text-ink/25">IMAGE PLACEHOLDER</span>
                </div>
                <figcaption className="bg-white px-3 py-2.5 text-[12px] leading-5 text-ink/60">{img.caption}</figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-4 text-[11px] leading-5 text-ink/40">
            Keep images at a sensible weight — this page is intentionally static for fast loading on mobile. No hover-lift or shadow on tiles.
          </p>
        </div>
      </section>
    </div>
  );
}
