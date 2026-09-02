'use client';

export default function AdminNewMachinePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10 md:py-16">
      <h1 className="font-serif text-3xl tracking-tight mb-6">New Machine</h1>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Created (demo). Would write to Firestore.'); }}>
        <input required name="name" placeholder="Name" className="w-full rounded-lg border border-earth-200 bg-paper px-4 py-3 text-sm" />
        <select name="category" className="w-full rounded-lg border border-earth-200 bg-paper px-4 py-3 text-sm">
          <option>Semi-automatic</option>
          <option>Fully-automatic</option>
        </select>
        <input required type="number" name="capacityPerHour" placeholder="Capacity per hour" className="w-full rounded-lg border border-earth-200 bg-paper px-4 py-3 text-sm" />
        <textarea name="specs" placeholder="Specs (JSON or text)" className="w-full rounded-lg border border-earth-200 bg-paper px-4 py-3 text-sm" />
        <button type="submit" className="rounded-lg bg-rust text-paper px-5 py-3 text-sm font-medium hover:bg-rust/90">Save machine</button>
      </form>
    </section>
  );
}
