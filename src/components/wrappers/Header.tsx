type HeadingProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  subtitleClassName?: string;
};

export default function Heading({
  title,
  subtitle,
  className = '',
  subtitleClassName = '',
}: HeadingProps) {
  return (
    <div className="text-center mb-14">
      <h2
        className={`text-3xl md:text-5xl font-bold dark:text-white text-teal-800 font-raleway ${className}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 dark:text-gray-300 text-teal-700 md:text-5xltext-lg max-w-4xl mx-auto ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
