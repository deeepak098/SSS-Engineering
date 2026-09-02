import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { StructuredData } from '@/components/seo/SEO';
import { FALLBACK_MACHINES, SITE_NAME } from '@/lib/site';

type Params = { params: { slug: string } };

function getMachine(slug: string) {
  return FALLBACK_MACHINES.find((m) => m.slug === slug) || null;
}

export function generateStaticParams() {
  return FALLBACK_MACHINES.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const m = getMachine(params.slug);
  if (!m) return { title: `Machinery — ${SITE_NAME}` };
  return {
    title: `${m.name} — ${SITE_NAME}`,
    description: `${m.name}: ${m.capacityPerHour} pcs/hr, ${m.specs.power}, ${m.specs.rawMaterial}. Export-ready moulded fibre line with spec sheet PDF.`,
  };
}

export default function MachineDetailPage({ params }: Params) {
  const m = getMachine(params.slug);
  if (!m) notFound();

  const specs: { label: string; value: string; mono?: boolean }[] = [
    { label: 'Capacity', value: `${m.capacityPerHour.toLocaleString()} pcs/hr`, mono: true },
    { label: 'Power', value: m.specs.power, mono: true },
    { label: 'Raw material', value: m.specs.rawMaterial },
    { label: 'Dimensions (L × W × H)', value: m.specs.dimensions, mono: true },
    { label: 'Category', value: m.category },
    { label: 'Export-ready', value: m.exportReady ? 'Yes — CE-marked' : 'On request' },
  ];

  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: m.name,
          image: m.images[0] || undefined,
          description: `${m.name} — ${m.capacityPerHour} pcs/hr moulded fibre tray line.`,
          brand: { '@type': 'Brand', name: SITE_NAME },
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'USD',
            price: 'Contact for quote',
          },
        }}
      />
      <section className="border-b border-[var(--line-strong)] bg-white">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-8 sm:py-10">
          <div className="flex flex-wrap gap-2 text-[11px] tracking-[0.08em] text-ink/45">
            <Link href="/machinery" className="underline decoration-[var(--line-strong)] underline-offset-4 hover:text-ink">
              Machinery
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink">{m.name}</span>
          </div>

          <div className="mt-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] text-ink/45">
                <span className="w-6 h-px bg-steel/60" aria-hidden />
                STEEL — {m.category.toUpperCase()}
              </div>
              <h1 className="mt-3 text-[28px] sm:text-[36px] font-semibold tracking-[-0.03em] leading-[1.05] text-ink">{m.name}</h1>
              <p className="mt-3 text-[13px] leading-6 text-ink/65 max-w-[52ch]">
                Moulded fibre production line — pulp preparation, vacuum moulding, drying, hot-press trimming and inline stacking. Supplied
                crated for sea freight with installation guide and remote commissioning.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={m.brochurePdfUrl} className="inline-flex bg-rust text-white text-[13px] font-medium px-5 py-2.5 hover:bg-[#b33e14]">
                  Download spec sheet PDF
                </a>
                <Link
                  href="/contact"
                  className="inline-flex border border-[var(--line-strong)] bg-white text-ink text-[13px] font-medium px-5 py-2.5 hover:bg-kraft/40"
                >
                  Request a quote
                </Link>
              </div>
              <p className="mt-3 text-[11px] leading-5 text-ink/40">
                In production this PDF comes from Firebase Storage via <span className="font-mono-spec">machines.brochurePdfUrl</span>.
              </p>
            </div>

            <div className="border border-[var(--line)] bg-kraft/30 p-3">
              <div className="aspect-[4/3] border border-[var(--line)] bg-white flex items-center justify-center text-[12px] tracking-[0.08em] text-ink/35">
                IMAGE — {m.slug.toUpperCase()} (replace with Storage image)
              </div>
              <p className="mt-3 text-[11px] leading-5 text-ink/45">
                Factory + installed-machine gallery below. Replace this placeholder with <span className="font-mono-spec">machines.images[]</span>{' '}
                once assets exist — no lightbox, just a bordered grid.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line-strong)] bg-kraft">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-8 sm:py-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10">
          <div>
            <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">Specifications</h2>
            <div className="mt-4 overflow-hidden border border-[var(--line-strong)] bg-white">
              <table className="w-full text-[13px] border-collapse">
                <tbody>
                  {specs.map((s) => (
                    <tr key={s.label} className="border-b border-[var(--line)] last:border-b-0">
                      <th className="text-left font-normal text-ink/55 px-4 sm:px-5 py-3 w-[38%] bg-kraft/30">{s.label}</th>
                      <td className={`px-4 sm:px-5 py-3 text-ink ${s.mono ? 'font-mono-spec tabular-nums text-[13px]' : ''}`}>{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[11px] leading-5 text-ink/40">
              Source fields: <span className="font-mono-spec">machines: {'{ capacityPerHour, specs: {power, rawMaterial, dimensions} }'}</span>
            </p>
          </div>

          <div>
            <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">Image gallery</h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="aspect-[4/3] border border-[var(--line)] bg-white flex items-center justify-center text-[11px] tracking-[0.08em] text-ink/35">
                GALLERY 1
              </div>
              <div className="aspect-[4/3] border border-[var(--line)] bg-white flex items-center justify-center text-[11px] tracking-[0.08em] text-ink/35">
                GALLERY 2
              </div>
              <div className="aspect-[4/3] border border-[var(--line)] bg-white flex items-center justify-center text-[11px] tracking-[0.08em] text-ink/35">
                GALLERY 3
              </div>
              <div className="aspect-[4/3] border border-[var(--line)] bg-white flex items-center justify-center text-[11px] tracking-[0.08em] text-ink/35">
                GALLERY 4
              </div>
            </div>
            <p className="mt-3 text-[11px] leading-5 text-ink/40">
              Static grid with hairline frames. No lightbox. Add <span className="font-mono-spec">machines.videoUrl</span> as an embedded link
              when available.
            </p>
            {m.brochurePdfUrl ? (
              <a
                href={m.brochurePdfUrl}
                className="mt-4 inline-flex text-[12px] font-medium text-rust underline underline-offset-4"
              >
                Open brochure PDF
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-[var(--line-strong)]">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-6 flex flex-wrap gap-3">
          <Link href="/machinery" className="text-[13px] font-medium text-ink underline decoration-[var(--line-strong)] underline-offset-4">
            Back to all machinery
          </Link>
          <span className="text-ink/20" aria-hidden>
            ·
          </span>
          <Link href="/contact" className="text-[13px] font-medium text-rust underline underline-offset-4">
            Request a quote for {m.name}
          </Link>
        </div>
      </section>
    </>
  );
}
