export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-kraft text-ink flex flex-col">
      <header className="sticky top-0 z-50 bg-kraft border-b border-[var(--line-strong)]">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <span className="inline-flex items-baseline gap-1.5">
            <span className="text-[11px] font-medium tracking-[0.18em] text-ink/55 border border-[var(--line-strong)] px-1.5 py-0.5 leading-none">
              SSS
            </span>
            <span className="text-[13px] font-semibold tracking-[-0.01em] text-ink">Admin</span>
            <span className="hidden sm:inline font-mono-spec text-[11px] tracking-[0.08em] text-ink/35 ml-2">TRAYS · MACHINES · INQUIRIES</span>
          </span>
          <a href="/admin/login" className="text-[12px] font-medium text-ink/60 hover:text-ink underline decoration-[var(--line-strong)] underline-offset-4">
            Login
          </a>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
