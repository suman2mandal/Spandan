import Image from "next/image";

export default function Testimonials() {
        const testimonials = [
        {
        name: 'Lucky',
        role: 'Rescued from the streets',
        image: '/images/testimonials/dog1.jpg',
        text: 'I was abandoned, hurt and scared. Spandan gave me food, care, and most of all, love. Now I wag my tail with joy every day.',
        },
        {
        name: 'Maya',
        role: 'Street survivor',
        image: '/images/testimonials/dog2.jpg',
        text: 'I was hit by a vehicle and left untreated. Thanks to Spandan, I recovered and now live safely with a loving family.',
        },
        {
        name: 'Tuffy',
        role: 'Now adopted',
        image: '/images/testimonials/dog3.jpg',
        text: 'Spandan picked me up when I was just a pup, alone and sick. They made sure I got healthy and helped me find my forever home.',
        },
        {
        name: 'Shadow',
        role: 'Once lost, now safe',
        image: '/images/testimonials/dog4.jpg',
        text: 'I was roaming the roads without food or shelter. The kind rescuers of Spandan gave me hope and safety.',
        },
        {
        name: 'Golu',
        role: 'Loves belly rubs',
        image: '/images/testimonials/dog5.jpg',
        text: 'Before Spandan, I was mistreated and hungry. Now I know what it means to be loved and pampered!',
        },
        {
        name: 'Champa',
        role: 'In recovery',
        image: '/images/testimonials/dog6.jpg',
        text: 'Thanks to the team at Spandan, I am healing slowly and getting stronger every day. My tail wags again!',
        },
    ];
    return (
        <section id="reviews" className=" py-20 px-6 md:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">They found a friend in us</h2>
                <p className="mt-4 text-lg text-gray-600">
                    Real stories of hope, care, and compassion
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
                <div
                key={idx}
                className="p-6 rounded-2xl bg-teal-50 text-teal-600 dark:text-teal-400 shadow-md hover:shadow-xl transition-shadow"
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
                    <h4 className="text-lg font-semibold text-teal-900">{testimonial.name}</h4>
                    <p className="text-sm text-teal-600">{testimonial.role}</p>
                    </div>
                </div>
                <p className="mt-6 text-gray-700">{testimonial.text}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}