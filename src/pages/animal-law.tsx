import Heading from "@/components/Header";
import Image from "next/image";

export default function AnimalLawsPage() {
  const laws = [
    {
      id: 1,
      title: "Prevention of Cruelty to Animals Act, 1960",
      summary:
        "This law prohibits beating, kicking, torturing or otherwise treating animals cruelly. Violators can be fined or imprisoned.",
      image: "/images/laws/cruelty-law.jpg",
    },
    {
      id: 2,
      title: "Animal Birth Control (Dogs) Rules, 2001",
      summary:
        "Stray dogs cannot be relocated or killed. They must be sterilized and vaccinated under ABC rules.",
      image: "/images/laws/abc-rules.jpg",
    },
    {
      id: 3,
      title: "Wildlife Protection Act, 1972",
      summary:
        "Protects wild animals, birds, and plants. Hunting, poaching, or trade of protected species is punishable.",
      image: "/images/laws/wildlife-protection.jpg",
    },
  ];

  const slugify = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  return (
    <section className="flex flex-col justify-center max-w-6xl px-4  mx-auto sm:px-6">
      <Heading>Know the Laws that Protect Animals</Heading>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {laws.map((law) => (
          <div
            key={law.id}
            className="flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg shadow hover:shadow-md dark:bg-gray-800 dark:border-gray-700 transition-shadow"
          >
            <div className="relative w-full h-48">
              <Image
                src={law.image}
                alt={law.title}
                fill
                className="rounded-t-lg object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-between flex-grow p-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                  {law.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {law.summary}
                </p>
              </div>
              <div className="mt-4">
                <a
                  href={`/animal-law/${slugify(law.title)}`}
                  className="text-sm font-medium text-teal-600 uppercase border-b border-transparent hover:border-teal-600"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
