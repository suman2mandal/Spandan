import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen mb-8 sm:mb-16 text-gray-900 font-sans">

      {/* Adoption Info Section */}
      <section className=" ">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-10">Matching Fur Babies with Their Forever Homes</h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6 dark:text-white text-gray-800">
            <p>
              At Spandan, we believe in ethical pet companionship. We strongly oppose unethical breeding practices
              and advocate for the adoption of rescued and abandoned animals. Our rescue shelters and foster network
              care for dogs that come to us in heartbreaking conditions—injured, abandoned, or neglected.
            </p>

            <p>
              Every animal deserves a loving home. Our adoption team is committed to ensuring safe, happy,
              and long-lasting matches between pets and their future families. Even though adoption rates remain
              low nationwide, we’re proud to maintain a 95% success rate through our careful screening and support.
            </p>

            <h3 className="text-xl font-semibold dark:text-green-500 text-green-800 mt-6">Why Adopt from Spandan?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>No breeding—only rescued and abandoned dogs.</li>
              <li>All dogs are health-checked, vaccinated, and sterilized.</li>
              <li>Behavioral assessments and training support provided.</li>
              <li>Personalized adoption matching with your lifestyle.</li>
              <li>Pre- and post-adoption home visits ensure well-being.</li>
              <li>Continued guidance from our adoption support team.</li>
            </ul>

            <h3 className="text-xl font-semibold dark:text-green-500 text-green-800 mt-6">Our Adoption Process (Step-by-Step)</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Submit your interest via our <span className="text-green-600">online adoption form</span>.</li>
              <li>Our team reaches out to schedule an interaction session.</li>
              <li>We help you meet dogs that suit your environment and preferences.</li>
              <li>A home visit is conducted to ensure a safe space for the pet.</li>
              <li>If all goes well, the adoption is finalized and you take your new friend home!</li>
              <li>Post-adoption check-ins and assistance ensure a smooth transition.</li>
            </ol>

            <p>
              Whether you&apos;re adopting or fostering, you&apos;re helping a voiceless soul start a new chapter in life. Your support
              makes all the difference!
            </p>
          </div>

          <div className="grid gap-4">
            <Image src="https://images.unsplash.com/photo-1560159119-977768e176be?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Adoption Day" width={600} height={400} className="rounded-xl" />
            <Image src="https://cdn.pixabay.com/photo/2020/04/04/19/52/medicine-5003631_1280.jpg" alt="Pet with Family" width={600} height={400} className="rounded-xl" />
            <Image src="https://images.unsplash.com/photo-1535722339661-7f22185bc7ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=" " width={600} height={400} className="rounded-xl" />
          </div>
        </div>
      </section>
    </main>
  );
}
