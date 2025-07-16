// BulletList.tsx
export default function BulletList({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc list-inside ml-6">{children}</ul>;
}