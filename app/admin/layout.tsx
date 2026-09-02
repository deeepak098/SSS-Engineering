export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-earth-200/60 px-6 h-16 flex items-center justify-between">
        <h1 className="font-serif text-xl tracking-tight">Admin</h1>
        <a href="/admin/login" className="text-xs text-rust hover:underline">Login</a>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
