import { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Admin Login — ${SITE_NAME}`,
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <section className="mx-auto max-w-md px-6 py-20 md:py-28">
      <h1 className="font-serif text-3xl tracking-tight mb-6">Admin Login</h1>
      <p className="text-ink/60 text-sm mb-8">Simple auth-gated admin access. In production, use Firebase Auth or a shared admin password.</p>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Auth gate (demo). Would redirect to /admin with session token.'); }}>
        <input type="password" placeholder="Admin password" className="w-full rounded-lg border border-earth-200 bg-paper px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rust/20" />
        <button type="submit" className="w-full rounded-lg bg-rust text-paper px-5 py-3 text-sm font-medium hover:bg-rust/90 transition-colors">Sign in</button>
      </form>
    </section>
  );
}
