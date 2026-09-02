export function Rule({ rust = false, className = '' }: { rust?: boolean; className?: string }) {
  return <hr className={`${rust ? 'sss-rule-rust' : 'border-t'} ${className}`} aria-hidden />;
}

export function HRule({ className = '' }: { className?: string }) {
  return <div className={`h-px bg-[var(--line)] ${className}`} role="separator" aria-orientation="horizontal" />;
}
