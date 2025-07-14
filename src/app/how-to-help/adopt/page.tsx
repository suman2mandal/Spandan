// ...existing code...
import AdoptionInfoSection from "@/components/AdoptionInfoSection";
import CWrapper from "@/components/wrappers/component-wrapper";
import Heading from "@/components/wrappers/Header";
import AnimalAdoptionForm from "@/components/AnimalAdoptionForm";

export default function AdoptionPage() {

  return (
    <CWrapper>
      <div className="">
        <Heading
          title="Don't Shop, Come Adopt"
          subtitle="Adopt a Street Animal, give a second chance to a soul that never had a first. By adopting, you’re not just saving a life — you’re gaining a loyal friend who will love you unconditionally."
        />

        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-2xl shadow-sm border dark:border-gray-900 border-gray-200 dark:bg-gray-700">
            <h3 className="text-2xl font-semibold dark:text-teal-500 text-teal-900 mb-4">Why Adopt?</h3>
            <ul className="list-disc pl-5 dark:text-white text-gray-700 space-y-2">
              <li>Give a home to an animal that truly needs it.</li>
              <li>Reduce the stray population through compassion.</li>
              <li>Every adoption creates space to rescue more lives.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl shadow-sm border dark:border-gray-900 border-gray-200 dark:bg-gray-700">
            <h3 className="text-2xl font-semibold dark:text-teal-500 text-teal-900 mb-4">How It Works</h3>
            <ol className="list-decimal pl-5 dark:text-white text-gray-700 space-y-2">
              <li>Fill out the form below with your details.</li>
              <li>Our team will reach out for verification.</li>
              <li>Meet the animal and complete adoption!</li>
            </ol>
          </div>
        </div>
        <AdoptionInfoSection />
        <AnimalAdoptionForm/>
        
      </div>
    </CWrapper>
  );
}
