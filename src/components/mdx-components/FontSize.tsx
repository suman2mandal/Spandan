// FontSize.tsx
import { ReactNode } from 'react';

export default function FontSize({ size, children }: { size: string, children: ReactNode }) {
  return <span style={{ fontSize: size }}>{children}</span>;
}
