export default function ImpactSection() {
    return(
        <>
        <div className="relative w-full min-h-lvh flex items-center justify-center ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Making a Difference for Street Dogs
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                Spandan is dedicated to rescuing, treating, and feeding countless animals every month.
                With your support, we continue to be the voice for the voiceless.
                </p>
            </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-teal-100 rounded-xl p-6 text-center shadow-sm">
                    <div className="text-3xl font-semibold text-teal-900">1,250+</div>
                    <div className="mt-2 text-sm font-medium text-teal-800">Dogs Rescued</div>
                </div>
                <div className="bg-teal-100 rounded-xl p-6 text-center shadow-sm">
                    <div className="text-3xl font-semibold text-teal-900">8,000+</div>
                    <div className="mt-2 text-sm font-medium text-teal-800">Monthly Feedings</div>
                </div>
                <div className="bg-teal-100 rounded-xl p-6 text-center shadow-sm">
                    <div className="text-3xl font-semibold text-teal-900">120+</div>
                    <div className="mt-2 text-sm font-medium text-teal-800">Volunteers</div>
                </div>
                <div className="bg-teal-100 rounded-xl p-6 text-center shadow-sm">
                    <div className="text-3xl font-semibold text-teal-900">500+</div>
                    <div className="mt-2 text-sm font-medium text-teal-800">Happy Adoptions</div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}