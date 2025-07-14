import Image from "next/image";
import CWrapper from "@/components/wrappers/component-wrapper";
import Header from "@/components/wrappers/Header";

export default function Foster() {
  return (
    <CWrapper>
    <main className="">

      {/* Foster Info Section */}
      <section className=" ">
        <Header
          title="Become a Lifesaver: Open Your Home Temporarily"
          subtitle="Join our active missions to protect, heal, and empower the lives of voiceless animals."
        />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6 dark:text-white text-gray-800">
            <p>
              Not ready to adopt but still want to help? Fostering is one of the most impactful ways to support
              a street animal in need. By offering a temporary home, you give injured, abandoned, or recovering dogs
              a safe environment to heal and regain trust in humanity.
            </p>

            <p>
              At Spandan, we rely on compassionate foster families who serve as the bridge between rescue and
              adoption. Your short-term care can lead to a lifetime of happiness for a rescued dog.
            </p>

            <h3 className="text-xl font-semibold text-orange-800 mt-6">Who Can Foster?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Animal lovers above 21 years of age.</li>
              <li>People with a clean, pet-safe, and secure environment.</li>
              <li>Those who can spare time for basic care and companionship.</li>
              <li>Families or individuals living in pet-friendly accommodations.</li>
              <li>People willing to coordinate with our team for updates and handover.</li>
            </ul>

            <h3 className="text-xl font-semibold text-orange-800 mt-6">Why Foster with Spandan?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>All medical expenses are covered by us.</li>
              <li>We provide guidance, food, and supplies if needed.</li>
              <li>Support is just a call away—always!</li>
              <li>Short-term commitment with long-term impact.</li>
              <li>Great for people who can't adopt but want to help.</li>
            </ul>

            <h3 className="text-xl font-semibold text-orange-800 mt-6">Fostering Process (Step-by-Step)</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Fill out our <span className="text-orange-600">foster interest form</span> online.</li>
              <li>Our team contacts you for a brief discussion and environment check.</li>
              <li>We match a dog based on your comfort, location, and capacity.</li>
              <li>You welcome the animal home and care for it until adoption or recovery.</li>
              <li>We assist throughout—food, medicine, vet visits, and adoption handover.</li>
            </ol>

            <p>
              Fostering saves lives. If you have a heart for animals but limited time or space, fostering is your chance
              to make a massive difference without a lifetime commitment.
            </p>
          </div>

          <div className="grid gap-4">
            <Image src="https://images.unsplash.com/photo-1596383924439-4d410af270f4?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Fostered Puppy" width={600} height={400} className="rounded-xl" />
            <Image src="https://images.unsplash.com/photo-1636750446092-6c0b5f801e75?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dog recovering in foster care" width={600} height={400} className="rounded-xl" />
            <Image src="https://images.unsplash.com/photo-1596383924513-f98a5a349446?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Temporary home for dog" width={600} height={400} className="rounded-xl" />
          </div>
        </div>
      </section>
    </main>
    </CWrapper>
  );
}
