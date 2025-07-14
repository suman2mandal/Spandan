// components/Alert.tsx
export default function Alert({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-yellow-500 bg-yellow-100 text-yellow-800 p-4 rounded my-4">
      {children}
    </div>
  );
}
