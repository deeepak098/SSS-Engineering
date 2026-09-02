'use client';

import Link from 'next/link';
import { PenSquare, Trash2 } from 'lucide-react';

export default function AdminMachinesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 md:py-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl tracking-tight">Machines</h1>
        <Link href="/admin/machines/new" className="rounded-lg bg-rust text-paper px-4 py-2 text-sm font-medium hover:bg-rust/90">Add machine</Link>
      </div>
      <div className="rounded-2xl border border-earth-200/40 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-ink text-paper">
            <tr>
              <th className="text-left px-5 py-3 font-medium">Name</th>
              <th className="text-left px-5 py-3 font-medium">Category</th>
              <th className="text-left px-5 py-3 font-medium">Capacity/hr</th>
              <th className="text-right px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-earth-200/30">
            <tr>
              <td className="px-5 py-3">Semi-Auto Line 1500</td>
              <td className="px-5 py-3">Semi-automatic</td>
              <td className="px-5 py-3">1500</td>
              <td className="px-5 py-3 text-right space-x-2">
                <Link href="/admin/machines/1/edit" className="inline-flex items-center gap-1 text-xs text-rust hover:underline">Edit <PenSquare size={12} /></Link>
                <button onClick={() => alert('Delete (demo)')} className="inline-flex items-center gap-1 text-xs text-ink/40 hover:text-rust"><Trash2 size={12} /> Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
