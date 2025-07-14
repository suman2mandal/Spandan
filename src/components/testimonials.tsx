import Image from 'next/image';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Lucky",
      role: "Rescued from the streets",
      image: "https://images.unsplash.com/photo-1629470897136-1c84636af71e?w=500&auto=format&fit=crop&q=60",
      text: "Spandan gave me a second chance at life. I'm now happy, healthy, and loved!",
    },
    {
      name: "Rani",
      role: "Recovered from injury",
      image: "https://images.unsplash.com/photo-1643208411980-7d73e38cd668?w=500&auto=format&fit=crop&q=60",
      text: "Thanks to Spandan's care, I can walk again. They are real-life heroes!",
    },
    {
      name: "Tommy",
      role: "Adopted by a kind soul",
      image: "https://images.unsplash.com/photo-1656073841838-2c527439b0a4?w=500&auto=format&fit=crop&q=60",
      text: "I was abandoned and scared. Spandan found me a forever home.",
    },
    {
      name: "Laila",
      role: "Rescued in a thunderstorm",
      image: "https://images.unsplash.com/photo-1640910004087-f45c0e6472da?w=500&auto=format&fit=crop&q=60",
      text: "Without Spandan, I would not have survived that night. I'm forever grateful!",
    },
  ];

  return (
    <section className="py-20 dark:bg-slate-800 dark:text-white px-6 md:px-12 xl:px-20" id="reviews">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold ">They found a friend in us</h2>
          <p className="mt-4 text-lg ">
            Real stories of hope, care, and compassion
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl dark:bg-gray-700 shadow-md hover:shadow-xl transition-shadow" // Changed card bg to white
            >
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold ">{testimonial.name}</h4>
                  <p className="text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-6 ">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;