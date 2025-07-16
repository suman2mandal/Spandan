export default function Blockquote({ children }: { children: React.ReactNode }) {
  return <blockquote className="border-l-4 border-gray-400 pl-4 italic bg-gray-50 my-3">{children}</blockquote>;
}
