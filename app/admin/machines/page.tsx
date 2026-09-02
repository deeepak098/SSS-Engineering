'use client';

import Link from 'next/link';

export default function AdminMachinesPage() {
  return (
    <section className="mx-auto max-w-[1180px] px-4 sm:px-6 py-8 sm:py-10">
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
        <h1 className="text-[20px] font-semibold tracking-[-0.02em] text-ink">Machines — admin</h1>
        <Link href="/admin/machines/new" className="inline-flex bg-rust text-white text-[13px] font-medium px-4 py-2 hover:bg-[#b33e14]">
          Add machine
        </Link>
      </div>
      <div className="overflow-x-auto border border-[var(--line-strong)] bg-white">
        <table className="w-full text-[13px] border-collapse">
          <thead>
            <tr className="bg-kraft/40 text-left">
              <th className="px-4 py-3 font-medium border-b border-[var(--line-strong)]">Name</th>
              <th className="px-4 py-3 font-medium border-b border-[var(--line-strong)]">Category</th>
              <th className="px-4 py-3 font-medium border-b border-[var(--line-strong)]">Capacity/hr</th>
              <th className="px-4 py-3 font-medium border-b border-[var(--line-strong)] text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--line)]">
              <td className="px-4 py-3">SSS 1500 — Semi-automatic</td>
              <td className="px-4 py-3">semi-automatic</td>
              <td className="px-4 py-3 font-mono-spec tabular-nums">1,500 pcs/hr</td>
              <td className="px-4 py-3 text-right space-x-3">
                <Link href="/admin/machines/1/edit" className="text-[12px] font-medium text-rust underline underline-offset-4">
                  Edit
                </Link>
                <button onClick={() => alert('Delete (demo)')} className="text-[12px] font-medium text-ink/45 hover:text-rust">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-[11px] leading-5 text-ink/40">
        Source: Firestore <span className="font-mono-spec">machines</span> — mirrors <span className="font-mono-spec">lib/data.ts → getMachines()</span>.
      </p>
    </section>
  );
}
