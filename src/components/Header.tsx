type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Heading({ children, className = '' }: HeadingProps) {
  return (
    <h2
      className={`text-3xl md:text-5xl p-9 font-semibold text-teal-600 mb-6 text-center font-raleway ${className}`}
    >
      {children}
    </h2>
  );
}
