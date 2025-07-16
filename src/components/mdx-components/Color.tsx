import { ReactNode } from 'react';

interface ColorProps {
  color: string;
  children: ReactNode;
}

export default function Color({ color, children }: ColorProps) {
  return <span style={{ color }}>{children}</span>;
}
