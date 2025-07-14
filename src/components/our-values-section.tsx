export default function OurValuesSection() {
  return (
    <section className="bg-gradient-to-b from-rose-50 to-white dark:from-slate-900 dark:to-slate-800 py-10 px-6 sm:px-10 lg:px-20">

     {/* <section className="bg-white dark:bg-slate-800  py-10 px-6 sm:px-10 lg:px-20"> */}

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {[
          {
            title: "Compassion",
            description: "We treat every animal with love and care, regardless of their condition or past.",
          },
          {
            title: "Transparency",
            description: "We maintain honesty and openness in our actions, operations, and use of resources.",
          },
          {
            title: "Community Engagement",
            description: "We inspire and involve people to be part of a larger movement for animal welfare.",
          },
          {
            title: "Responsibility",
            description: "We act with integrity to protect animal rights and welfare at every stage.",
          },
          {
            title: "Education",
            description: "We believe in spreading awareness to build a kinder, more informed society.",
          },
          {
            title: "Dedication",
            description: "Our volunteers and team are committed every day to making a lasting difference.",
          },
        ].map((value, i) => (
          <div
            key={i}
            className="bg-teal-50 dark:bg-gray-800 border shadow-lg rounded-2xl p-8 "
          >
            <h3 className="text-xl font-semibold text-teal-800 dark:text-white mb-2">
              {value.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
