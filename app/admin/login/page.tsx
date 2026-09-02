'use client';

export default function AdminLoginPage() {
  return (
    <section className="mx-auto max-w-[520px] px-4 sm:px-6 py-10 sm:py-14">
      <div className="border border-[var(--line-strong)] bg-white overflow-hidden">
        <div className="border-b border-[var(--line)] bg-ink text-white px-5 py-4">
          <h1 className="text-[15px] font-semibold tracking-[-0.01em]">Admin login</h1>
          <p className="mt-1 font-mono-spec text-[11px] tracking-[0.06em] text-white/60">GATED — TRAYS · MACHINES WITHOUT CODE CHANGES</p>
        </div>
        <div className="px-5 py-6">
          <p className="text-[12px] leading-5 text-ink/60">
            Simple gated access for the client. In production, back this with Firebase Auth or a shared{' '}
            <span className="font-mono-spec">ADMIN_PASSWORD</span>. No enquiry or catalogue data is exposed without auth.
          </p>
          <form
            className="mt-6 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Auth gate (demo) — would set a session and redirect to /admin.');
            }}
          >
            <label htmlFor="admin-pass" className="block text-[11px] tracking-[0.08em] text-ink/55">
              Admin password
            </label>
            <input
              id="admin-pass"
              type="password"
              placeholder="••••••••"
              className="w-full border border-[var(--line-strong)] bg-white px-3.5 py-2.5 text-[13px] placeholder:text-ink/35 focus:outline-none focus:border-ink/40"
            />
            <button type="submit" className="w-full bg-rust text-white text-[13px] font-medium px-4 py-2.5 hover:bg-[#b33e14]">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
