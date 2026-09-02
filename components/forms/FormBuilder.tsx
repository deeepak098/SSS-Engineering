'use client';

import { useState } from 'react';

export type Field = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: string[];
  full?: boolean;
};

type Props = {
  fields: Field[];
  submitLabel?: string;
  endpoint?: string;
  inquiryType?: 'tray' | 'machine';
  productRef?: string;
  tone?: 'pulp' | 'steel' | 'neutral';
};

export default function FormBuilder({
  fields,
  submitLabel = 'Send',
  endpoint = '/api/inquiries',
  inquiryType,
  productRef,
  tone = 'neutral',
}: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const inputBase =
    'w-full border bg-white px-3.5 py-2.5 text-[13px] leading-5 placeholder:text-ink/40 focus:outline-none focus:border-ink/40';

  const toneBorder =
    tone === 'pulp' ? 'border-pulp/25 focus:border-pulp/40' : tone === 'steel' ? 'border-steel/25 focus:border-steel/40' : 'border-[var(--line-strong)]';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type: inquiryType, productRef }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-3">
        {fields.map((f) => (
          <div key={f.name} className={f.full ? 'sm:col-span-2' : ''}>
            <label htmlFor={`f-${f.name}`} className="block text-[11px] tracking-[0.08em] text-ink/55 mb-1.5">
              {f.label}
              {f.required ? <span className="text-rust ml-1" aria-hidden>
                *
              </span> : null}
            </label>
            {f.type === 'textarea' ? (
              <textarea
                id={`f-${f.name}`}
                name={f.name}
                required={f.required}
                placeholder={f.placeholder || ''}
                rows={3}
                className={`${inputBase} ${toneBorder} resize-y min-h-[96px]`}
              />
            ) : f.type === 'select' ? (
              <select
                id={`f-${f.name}`}
                name={f.name}
                required={f.required}
                defaultValue=""
                className={`${inputBase} ${toneBorder}`}
              >
                <option value="" disabled>
                  {f.placeholder || f.label}
                </option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={`f-${f.name}`}
                name={f.name}
                type={f.type}
                required={f.required}
                placeholder={f.placeholder || ''}
                className={`${inputBase} ${toneBorder}`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="min-h-[18px] text-[12px] leading-5">
        {status === 'sent' && <span className="text-ink">Received — we will get back to you shortly.</span>}
        {status === 'error' && <span className="text-rust">Something went wrong. Try again or contact us directly.</span>}
        {status === 'sending' && <span className="text-ink/60">Sending…</span>}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full sm:w-auto inline-flex justify-center bg-rust text-white text-[13px] font-medium px-6 py-2.5 hover:bg-[#b33e14] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === 'sending' ? 'Sending…' : submitLabel}
      </button>
    </form>
  );
}
