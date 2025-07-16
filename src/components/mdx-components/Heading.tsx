export default function Heading({ children }: { level: number; children: React.ReactNode }) {
  return <div className="text-4xl">{children}</div>;
}
