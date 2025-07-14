import { FaPaw, FaHandHoldingHeart, FaUsers } from "react-icons/fa";

export default function ImpactSection() {
  const stats = [
    {
      icon: <FaPaw className="text-white dark:text-black text-3xl" />,
      title: "1500+",
      description: "Animals Rescued",
      bg: "bg-rose-500",
    },
    {
      icon: <FaHandHoldingHeart className="text-white dark:text-black  text-3xl" />,
      title: "300+",
      description: "Successful Adoptions",
      bg: "bg-teal-500",
    },
    {
      icon: <FaUsers className="text-white dark:text-black  text-3xl" />,
      title: "100+",
      description: "Active Volunteers",
      bg: "bg-indigo-500",
    },
  ];

  return (
    
    <section className="bg-gradient-to-b from-rose-50 to-white dark:from-slate-900 dark:to-slate-800 py-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">Our Impact</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-12">
          Every rescue, every adoption, every smile – together we’re creating a world of compassion.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 ${stat.bg}`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{stat.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
