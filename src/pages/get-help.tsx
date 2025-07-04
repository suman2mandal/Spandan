// components/GetHelpCards.tsx
import Heading from "@/components/Header";
import Link from "next/link";

const helpLinks = [
  { title: "Rescues", href: "/get-help/rescues" },
  { title: "Hospital", href: "/get-help/hospital" },
  { title: "Shelter", href: "/get-help/shelter" },
  { title: "ABC Program", href: "/get-help/abc" },
  { title: "Surrender", href: "/get-help/surrender" },
];

export default function GetHelpCards() {
  return (
    <section className="max-w-7xl mx-auto px-6 ">
    <Heading>Get Help With</Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
        {/* First card - large */}
        <div className="lg:col-span-3 row-span-2">
          <HelpCard
            link={helpLinks[0]}
            large
            bg={isCrossObject(0) ? "teal" : "white"}
          />
        </div>

        {/* Remaining cards */}
        <div className="lg:col-span-3 grid grid-cols-2 gap-3">
          {helpLinks.slice(1).map((link, i) => {
            const actualIndex = i + 1; // Offset due to slicing
            return (
              <HelpCard
                key={link.title}
                link={link}
                bg={isCrossObject(actualIndex) ? "teal" : "white"}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Helper to determine if an index is a "cross" object
function isCrossObject(index: number): boolean {
  if (index == 0) return true;
  return index % 3 === 1 ;
}

function HelpCard({
  link,
  large = false,
  bg = "white",
}: {
  link: { title: string; href: string };
  large?: boolean;
  bg?: "teal" | "white";
}) {
  const bgClasses =
    bg === "teal"
      ? "bg-teal-100 text-teal-900"
      : "bg-white text-teal-900 border border-teal-100";

  return (
    <Link href={link.href}>
      <div
        className={`group relative overflow-hidden rounded-xl p-6 flex items-end justify-start transition-all duration-300 cursor-pointer
        ${large ? "h-80 sm:h-96 lg:h-[28rem]" : "h-40 sm:h-48 lg:h-56"}
        ${bgClasses} hover:shadow-md`}
      >
        <div className="group-hover:-translate-y-1 group-hover:scale-[1.03] transition">
          <h3 className="text-2xl font-semibold">{link.title}</h3>
          <p className="text-sm mt-1 opacity-70 group-hover:opacity-100 transition">
            → Read More
          </p>
        </div>
      </div>
    </Link>
  );
}
