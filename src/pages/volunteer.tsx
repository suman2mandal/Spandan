"use client";

export default function VolunteerSection() {
  return (
    <section className="bg-white py-20 px-6 lg:px-20 border-t border-gray-200" id="volunteer">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6 text-center font-raleway">
          Volunteer With Animals
        </h2>
        <p className="text-gray-700 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
          Your time and compassion can make a real difference. Whether it’s rescue, shelter care, or spreading awareness, there&apos;s a place for your kindness at <span className="text-teal-700 font-semibold">Spandan</span>.
        </p>

        {/* Volunteer Opportunities */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-teal-900 mb-2">Rescue Support</h3>
            <p className="text-gray-700">Help us respond to distress calls, locate injured animals, and safely bring them to treatment centers.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-teal-900 mb-2">Shelter Care</h3>
            <p className="text-gray-700">Spend time at our shelter — feeding, cleaning, and giving emotional support to animals in recovery.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-teal-900 mb-2">Awareness & Events</h3>
            <p className="text-gray-700">Join public campaigns, educate communities, and help organize adoption & vaccination drives.</p>
          </div>
        </div>

        {/* Volunteer Form */}
        <div className="max-w-3xl mx-auto bg-white p-8 border border-gray-200 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-semibold text-teal-900 mb-6 text-center">Join as a Volunteer</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-teal-900 font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border border-gray-200 p-3 text-gray-700"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-teal-900 font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border border-gray-200 p-3 text-gray-700"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-teal-900 font-medium">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full rounded-md border border-gray-200 p-3 text-gray-700"
                placeholder="+91 9876543210"
                required
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-teal-900 font-medium">Area of Interest</label>
              <select
                id="interest"
                className="mt-1 block w-full rounded-md border border-gray-200 p-3 text-gray-700"
                required
              >
                <option value="">Select one</option>
                <option value="rescue">Rescue Support</option>
                <option value="shelter">Shelter Care</option>
                <option value="events">Awareness & Events</option>
                <option value="others">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-teal-900 font-medium">Why do you want to volunteer?</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-200 p-3 text-gray-700"
                placeholder="Share your reason or experience..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-teal-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-teal-800 transition"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
