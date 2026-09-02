import Link from 'next/link';
import { FALLBACK_MACHINES } from '@/lib/site';

export default function MachineCompareTable() {
  const models = FALLBACK_MACHINES;

  return (
    <section aria-labelledby="compare-heading" className="border-t border-[var(--line-strong)] bg-white">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 py-8 sm:py-10">
        <h2 id="compare-heading" className="text-[18px] sm:text-[20px] font-semibold tracking-[-0.02em] text-ink">
          Compare models
        </h2>
        <p className="mt-1 text-[13px] leading-5 text-ink/60 max-w-[60ch]">
          Static order by capacity. A real <span className="font-mono-spec text-[12px]">&lt;table&gt;</span> with hairline borders — no cards.
        </p>

        <div className="mt-6 overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
          <table className="sss-table min-w-[720px]">
            <caption className="sr-only">Comparison of SSS tray machinery models</caption>
            <thead>
              <tr>
                <th scope="col" className="w-[22%]">
                  Feature
                </th>
                {models.map((m) => (
                  <th key={m.slug} scope="col" className="font-medium">
                    {m.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Capacity</th>
                {models.map((m) => (
                  <td key={m.slug} className="font-mono-spec">
                    {m.capacityPerHour.toLocaleString()} pcs/hr
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">Power</th>
                {models.map((m) => (
                  <td key={m.slug} className="font-mono-spec">
                    {m.specs.power}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">Raw material</th>
                {models.map((m) => (
                  <td key={m.slug}>{m.specs.rawMaterial}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Dimensions (L × W × H)</th>
                {models.map((m) => (
                  <td key={m.slug} className="font-mono-spec text-[13px]">
                    {m.specs.dimensions}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">Category</th>
                {models.map((m) => (
                  <td key={m.slug}>{m.category}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Export-ready</th>
                {models.map((m) => (
                  <td key={m.slug}>{m.exportReady ? 'Yes — CE-marked' : '—'}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Spec sheet</th>
                {models.map((m) => (
                  <td key={m.slug}>
                    <a href={m.brochurePdfUrl} className="text-[12px] font-medium text-rust underline underline-offset-4">
                      PDF
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <Link href="/contact" className="inline-flex bg-rust text-white text-[13px] font-medium px-4 py-2 hover:bg-[#b33e14]">
            Request a quote for a model
          </Link>
        </div>
      </div>
    </section>
  );
}
