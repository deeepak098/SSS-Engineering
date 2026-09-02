'use client';

export default function AdminEditMachinePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10 md:py-16">
      <h1 className="font-serif text-3xl tracking-tight mb-6">Edit Machine</h1>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Updated (demo).'); }}>
        <input required name="name" placeholder="Name" className="w-full rounded-lg border border-earth-200 bg-paper px-4 py-3 text-sm" defaultValue="Semi-Auto Line 1500" />
        <select name="category" className="w-full rounded-lg border border-earth-200 bg-paper px-4 py-3 text-sm" defaultValue="semi-automatic">
          <option>Semi-automatic</option>
          <option>Fully-automatic</option>
        </select>
        <input required type="number" name="capacityPerHour" placeholder="Capacity per hour" className="w-full rounded-lg border border-earth-200 bg-paper px-4 py-3 text-sm" defaultValue={1500} />
        <textarea name="specs" placeholder="Specs" className="w-full rounded-lg border border-earth-200 bg-paper px-4 py-3 text-sm" defaultValue="Power: 3.5 kW\nDimensions: 2400 x 1100 x 1750 mm" />
        <button type="submit" className="rounded-lg bg-rust text-paper px-5 py-3 text-sm font-medium hover:bg-rust/90">Save changes</button>
      </form>
    </section>
  );
}
