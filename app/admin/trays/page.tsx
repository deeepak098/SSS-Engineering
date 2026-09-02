import Link from 'next/link';
import { PenSquare, Trash2 } from 'lucide-react';

export default function AdminTraysPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 md:py-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl tracking-tight">Trays</h1>
        <Link href="/admin/trays/new" className="rounded-lg bg-rust text-paper px-4 py-2 text-sm font-medium hover:bg-rust/90">Add tray</Link>
      </div>
      <div className="rounded-2xl border border-earth-200/40 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-ink text-paper">
            <tr>
              <th className="text-left px-5 py-3 font-medium">Name</th>
              <th className="text-left px-5 py-3 font-medium">Size</th>
              <th className="text-left px-5 py-3 font-medium">Capacity</th>
              <th className="text-right px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-earth-200/30">
            <tr>
              <td className="px-5 py-3">Standard 30-Hole</td>
              <td className="px-5 py-3">30-hole standard</td>
              <td className="px-5 py-3">30</td>
              <td className="px-5 py-3 text-right space-x-2">
                <Link href="/admin/trays/1/edit" className="inline-flex items-center gap-1 text-xs text-rust hover:underline">Edit <PenSquare size={12} /></Link>
                <button onClick={() => alert('Delete (demo)')} className="inline-flex items-center gap-1 text-xs text-ink/40 hover:text-rust"><Trash2 size={12} /> Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
