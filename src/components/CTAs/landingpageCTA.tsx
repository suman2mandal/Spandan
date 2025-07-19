import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601758003122-58e5f2b1a899?auto=format&fit=crop&w=1600&q=80')", // Street dog with emotion
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute dark:bg-slate-800 inset-0 "></div>

      {/* Main Content */}
      <div className="relative  z-10 max-w-4xl text-center">
        <h1 className="text-4xl dark:text-white text-slate-800 sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          We Make{' '}
          <span className="relative inline-block text-green-400">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-green-500/30"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative">Kindness</span>
          </span>{' '}
          Reach the Streets
        </h1>

        <p className="mt-6 dark:text-white text-lg sm:text-xl ">
          Join our mission to rescue, feed, treat, and care for voiceless animals.
          Spandan empowers street dog welfare across Bengal with compassion and action.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Learn More
          </Link>
          <Link
            href="/how-to-help/donate"
            className="inline-flex items-center px-6 py-3 bg-white text-green-700 hover:bg-gray-100 text-lg font-semibold rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* Scroll Icon */}
      <div className="absolute top-52 left-1/2 transform -translate-x-1/2 z-10">
        <Link href="/#home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-400 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
