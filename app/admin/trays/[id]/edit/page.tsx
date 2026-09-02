'use client';

export default function AdminEditTrayPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10 md:py-16">
      <h1 className="font-serif text-3xl tracking-tight mb-6">Edit Tray</h1>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Updated (demo).'); }}>
        <input required name="name" placeholder="Name" className="w-full rounded-lg border border-earth-200 bg-paper px-4 py-3 text-sm" defaultValue="Standard 30-Hole" />
        <input required name="size" placeholder="Size" className="w-full rounded-lg border border-earth-200 bg-paper px-4 py-3 text-sm" defaultValue="30-hole standard" />
        <input required type="number" name="capacity" placeholder="Capacity" className="w-full rounded-lg border border-earth-200 bg-paper px-4 py-3 text-sm" defaultValue={30} />
        <textarea name="material" placeholder="Material" className="w-full rounded-lg border border-earth-200 bg-paper px-4 py-3 text-sm" defaultValue="Molded fiber (recycled pulp)" />
        <button type="submit" className="rounded-lg bg-rust text-paper px-5 py-3 text-sm font-medium hover:bg-rust/90">Save changes</button>
      </form>
    </section>
  );
}
