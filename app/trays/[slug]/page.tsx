import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { StructuredData } from '@/components/seo/SEO';
import { FALLBACK_TRAYS, SITE_NAME } from '@/lib/site';

type Params = { params: { slug: string } };

function getTray(slug: string) {
  return FALLBACK_TRAYS.find((t) => t.slug === slug) || null;
}

export function generateStaticParams() {
  return FALLBACK_TRAYS.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const t = getTray(params.slug);
  if (!t) return { title: `Egg Trays — ${SITE_NAME}` };
  return {
    title: `${t.name} — ${SITE_NAME}`,
    description: `${t.name}: ${t.capacity}-egg moulded fibre tray, ${t.size}, ${t.material}. MOQ ${t.moq}. Bulk supply for poultry farms and traders.`,
  };
}

export default function TrayDetailPage({ params }: Params) {
  const t = getTray(params.slug);
  if (!t) notFound();

  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: t.name,
          image: t.images[0] || undefined,
          description: `${t.capacity}-egg moulded fibre tray — ${t.size}, ${t.material}. MOQ ${t.moq}.`,
          brand: { '@type': 'Brand', name: SITE_NAME },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: 'Contact for quote',
            availability: 'https://schema.org/InStock',
          },
        }}
      />
      <section className="border-b border-[var(--line-strong)] bg-white">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-8 sm:py-10">
          <div className="flex flex-wrap gap-2 text-[11px] tracking-[0.08em] text-ink/45">
            <Link href="/trays" className="underline decoration-[var(--line-strong)] underline-offset-4 hover:text-ink">
              Egg trays
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink">{t.name}</span>
          </div>

          <div className="mt-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] text-ink/45">
                <span className="w-6 h-px bg-pulp/60" aria-hidden />
                PULP — {t.capacity} EGGS
              </div>
              <h1 className="mt-3 text-[28px] sm:text-[36px] font-semibold tracking-[-0.03em] leading-[1.05] text-ink">{t.name}</h1>
              <p className="mt-3 text-[13px] leading-6 text-ink/65 max-w-[52ch]">
                Moulded fibre tray for {t.capacity} eggs — {t.size}. {t.material}. Supplied in bulk, poly-wrapped and palletised for repeat
                despatch.
              </p>

              <div className="mt-6 border border-[var(--line-strong)] bg-kraft/30 overflow-hidden">
                <table className="w-full text-[13px] border-collapse">
                  <tbody>
                    <tr className="border-b border-[var(--line)]">
                      <th className="text-left font-normal text-ink/55 px-4 py-3 w-[36%] bg-white/60">Size</th>
                      <td className="font-mono-spec tabular-nums px-4 py-3 bg-white">{t.size}</td>
                    </tr>
                    <tr className="border-b border-[var(--line)]">
                      <th className="text-left font-normal text-ink/55 px-4 py-3 bg-white/60">Capacity</th>
                      <td className="font-mono-spec tabular-nums px-4 py-3 bg-white">{t.capacity} eggs</td>
                    </tr>
                    <tr className="border-b border-[var(--line)]">
                      <th className="text-left font-normal text-ink/55 px-4 py-3 bg-white/60">Material</th>
                      <td className="px-4 py-3 bg-white">{t.material}</td>
                    </tr>
                    <tr>
                      <th className="text-left font-normal text-ink/55 px-4 py-3 bg-white/60">MOQ</th>
                      <td className="font-mono-spec tabular-nums px-4 py-3 bg-white">{t.moq}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex bg-rust text-white text-[13px] font-medium px-5 py-2.5 hover:bg-[#b33e14]">
                  Request bulk pricing
                </Link>
                <Link
                  href="/trays"
                  className="inline-flex border border-[var(--line-strong)] bg-white text-ink text-[13px] font-medium px-5 py-2.5 hover:bg-kraft/40"
                >
                  Back to trays
                </Link>
              </div>
            </div>

            <div className="border border-[var(--line)] bg-kraft/30 p-3">
              <div className="aspect-[4/3] border border-[var(--line)] bg-white flex items-center justify-center text-[12px] tracking-[0.08em] text-ink/35">
                IMAGE — {t.slug.toUpperCase()} (Storage)
              </div>
              <p className="mt-3 text-[11px] leading-5 text-ink/45">
                Replace with <span className="font-mono-spec">trays.images[]</span> from Firestore/Storage. No rounded shadow kit — hairline frame
                only.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
