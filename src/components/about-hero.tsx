import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-teal-50 py-20 sm:py-24 lg:py-32">
      {/* Background Image with Gradient */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-dog.jpg"
          alt="Rescued dog being cared for"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      {/* Centered Text Container */}
        <div className="flex justify-center px-6 lg:px-8">
            <div className="max-w-4xl text-left">
                <h1 className="text-4xl text-center sm:text-5xl lg:text-6xl font-bold text-teal-800 leading-tight font-raleway">
                    Working Together to Protect Animals
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-teal-700 leading-relaxed">
                    When our founders started <span className="font-semibold text-teal-900">Spandan</span>, they had no idea how vast the problems facing animals were. Over the years, we’ve rescued thousands — inspiring communities and creating hope, one life at a time.
                </p>
            </div>
        </div>



    </section>
  );
}
