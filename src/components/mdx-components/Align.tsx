// components/mdx-components/Align.tsx
export default function Align({
  children,
  align = 'left',
}: {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}) {
  return <div style={{ textAlign: align }}>{children}</div>;
}
