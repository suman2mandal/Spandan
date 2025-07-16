// OrderedList.tsx
export default function OrderedList({ children }: { children: React.ReactNode }) {
  return <ol className="list-decimal list-inside ml-6">{children}</ol>;
}
