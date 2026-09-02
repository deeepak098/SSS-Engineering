import type { ReactNode } from 'react';

export function SpecValue({
  children,
  as: Tag = 'span',
  className = '',
}: {
  children: ReactNode;
  as?: 'span' | 'td' | 'th' | 'div' | 'p';
  className?: string;
}) {
  return <Tag className={`font-mono-spec ${className}`}>{children}</Tag>;
}

export function MonoTd({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <td className={`font-mono-spec tabular-nums ${className}`}>{children}</td>;
}

export function MonoTh({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <th className={`font-mono-spec tabular-nums font-medium ${className}`}>{children}</th>;
}
