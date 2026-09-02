'use client';

import { useState } from 'react';

export type Field = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: string[];
  full?: boolean; // span both columns
};

type Props = {
  fields: Field[];
  variant?: 'light' | 'dark';
  submitLabel?: string;
  endpoint?: string;
  inquiryType?: 'tray' | 'machine';
  productRef?: string;
  buttonClass?: string;
};

export default function FormBuilder({
  fields,
  variant = 'light',
  submitLabel = 'Send',
  endpoint = '/api/inquiries',
  inquiryType,
  productRef,
  buttonClass,
}: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const inputClass =
    variant === 'dark'
      ? 'w-full rounded-lg border border-paper/20 bg-ink/40 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rust/30 text-paper placeholder:text-paper/40'
      : 'w-full rounded-lg border border-earth-200 bg-paper px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rust/20';

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
    <form className="grid md:grid-cols-2 gap-5" onSubmit={handleSubmit}>
      {fields.map((f) => (
        <div key={f.name} className={f.full ? 'md:col-span-2' : ''}>
          {f.type === 'textarea' ? (
            <textarea
              name={f.name}
              required={f.required}
              placeholder={f.placeholder || f.label}
              rows={3}
              className={inputClass}
            />
          ) : f.type === 'select' ? (
            <select name={f.name} required={f.required} defaultValue="" className={inputClass}>
              <option value="" disabled>{f.placeholder || f.label}</option>
              {f.options?.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          ) : (
            <input
              name={f.name}
              type={f.type}
              required={f.required}
              placeholder={f.placeholder || f.label}
              className={inputClass}
            />
          )}
        </div>
      ))}

      <div className={variant === 'dark' ? 'md:col-span-2 text-paper/70 text-sm' : 'md:col-span-2 text-ink/60 text-sm'}>
        {status === 'sent' && 'Thank you — your inquiry has been received. We will contact you shortly.'}
        {status === 'error' && 'Something went wrong. Please try again or contact us directly.'}
        {status === 'sending' && 'Sending…'}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className={
          buttonClass ||
          (variant === 'dark'
            ? 'md:col-span-2 rounded-lg bg-paper text-ink px-6 py-3 text-sm font-medium hover:bg-paper/90 transition-colors'
            : 'md:col-span-2 rounded-lg bg-rust text-paper px-6 py-3 text-sm font-medium hover:bg-rust/90 transition-colors')
        }
      >
        {submitLabel}
      </button>
    </form>
  );
}
