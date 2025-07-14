import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden dark:bg-teal-900 bg-teal-50 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1713352419538-18a691b8fd7b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Rescued dog being cared for"
          fill
          className="object-cover opacity-95"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white/70 to-transparent dark:from-teal-900 dark:via-teal-900/80" />
      </div>

      {/* Foreground Text */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-raleway text-teal-800 dark:text-white">
            Working Together to Protect Animals
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-teal-700 dark:text-gray-300 leading-relaxed">
            When our founders started <span className="font-semibold text-teal-900 dark:text-white">Spandan</span>, they had no idea how vast the problems facing animals were. Over the years, we’ve rescued thousands — inspiring communities and creating hope, one life at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
