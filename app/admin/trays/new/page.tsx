export default function AdminNewTrayPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10 md:py-16">
      <h1 className="font-serif text-3xl tracking-tight mb-6">New Tray</h1>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Created (demo). Would write to Firestore.'); }}>
        <input required name="name" placeholder="Name" className="w-full rounded-lg border border-earth-200 bg-paper px-4 py-3 text-sm" />
        <input required name="size" placeholder="Size" className="w-full rounded-lg border border-earth-200 bg-paper px-4 py-3 text-sm" />
        <input required type="number" name="capacity" placeholder="Capacity" className="w-full rounded-lg border border-earth-200 bg-paper px-4 py-3 text-sm" />
        <textarea name="material" placeholder="Material" className="w-full rounded-lg border border-earth-200 bg-paper px-4 py-3 text-sm" />
        <button type="submit" className="rounded-lg bg-rust text-paper px-5 py-3 text-sm font-medium hover:bg-rust/90">Save tray</button>
      </form>
    </section>
  );
}
