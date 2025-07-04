export default function OurValuesSection() {
  return (
    <section className="bg-white py-10 px-6 sm:px-10 lg:px-20">

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
            className="bg-teal-50 border border-teal-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-teal-800 mb-2">
              {value.title}
            </h3>
            <p className="text-gray-700 text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
