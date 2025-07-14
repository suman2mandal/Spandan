// components/GetHelpCards.tsx
import CWrapper from "@/components/wrappers/component-wrapper";
import Heading from "@/components/wrappers/Header";
import Link from "next/link";

// Add background images for each card
const helpLinks = [
  {
    title: "Rescues",
    href: "/get-help/rescues",
    image: "https://images.unsplash.com/photo-1558371731-b2ee7b6fe882?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tint: "bg-teal-900/20",
  },
  {
    title: "Hospital",
    href: "/get-help/hospital",
    image: "https://cdn.pixabay.com/photo/2023/12/06/19/00/dog-8434227_1280.jpg",
    tint: "bg-blue-800/20",
  },
  // {
  //   title: "Shelter",
  //   href: "/get-help/shelter",
  //   image: "https://images.unsplash.com/photo-1610185101126-c4f7ccef12c9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   tint: "bg-teal-900/20",
  // },
  {
    title: "ABC Program",
    href: "/get-help/abc",
    image: "https://im.indiatimes.in/content/2023/Apr/C944C4E8-9861-483C-8D0D-0B10CEDDA8BE_643fbc5c03842.jpg",
    tint: "bg-blue-800/20",
  },
  // {
  //   title: "Surrender",
  //   href: "/get-help/surrender",
  //   image: "https://images.unsplash.com/photo-1601297068159-a92633cd4bda?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   tint: "bg-red-900/20",
  // },
];

export default function GetHelpCards() {
  return (
    <CWrapper>
    <section>
      <Heading
        title="Get Help With"
        subtitle="Need assistance with rescuing a street dog, medical help, sterilization, or reporting cruelty? We’re here to help you take action and make a difference."
      />


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
        {/* First card - large */}
        <div className="lg:col-span-3 row-span-2">
          <HelpCard link={helpLinks[0]} large />
        </div>

        {/* Remaining cards */}
        {/* <div className="lg:col-span-3 grid grid-cols-2 gap-2 sm:gap-4">
          {helpLinks.slice(1).map((link) => (
            <HelpCard key={link.title} link={link} />
          ))}
        </div> */}
        <div className="lg:col-span-3 grid grid-cols-1 gap-2 sm:gap-4">
          {helpLinks.slice(1).map((link) => (
            <HelpCard key={link.title} link={link} />
          ))}
        </div>
      </div>
    </section>
    </CWrapper>
  );
}

function HelpCard({
  link,
  large = false,
}: {
  link: { title: string; href: string; image: string; tint: string };
  large?: boolean;
}) {
  return (
    <Link href={link.href}>
      <div
        className={`group relative overflow-hidden rounded-xl flex items-end justify-start transition-all duration-300 cursor-pointer
          ${large ? "h-80 sm:h-96 lg:h-[29rem]" : "h-40 sm:h-48 lg:h-56"}
        `}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${link.image})` }}
        />

        {/* Color tint overlay */}
        <div
          className={`absolute inset-0 ${link.tint} z-10 transition-opacity group-hover:opacity-50`}
        />

        {/* Content */}
        <div className="relative z-20 p-6 text-white group-hover:scale-[1.03] transition">
          <h3 className="text-2xl font-semibold drop-shadow">{link.title}</h3>
          <p className="text-sm mt-1 opacity-90 group-hover:opacity-100 transition">
            → Read More
          </p>
        </div>
      </div>
    </Link>
  );
}
