"use client";

import Image from "next/image";
import CWrapper from "./wrappers/component-wrapper";

export default function JourneyTimeline() {
  return (
    <CWrapper>
    <section className="bg-white rounded-lg p-8 dark:bg-gray-900 py-16">
      <div className="">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Spandan's 7-Year Journey</h2>
        <ul className="flow-root">
          {/* Year 1 */}
          <li>
            <div className="relative pb-12">
              <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
              <div className="relative flex items-start space-x-4">
                <div className="relative px-1">
                  <div className="h-10 w-10 bg-teal-600 rounded-full ring-8 ring-white flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300">Our Humble Beginning (2017)</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-300 dark:text-">7 years ago</span>
                  </div>
                  <div className="mt-3 text-gray-700 dark:text-gray-300">
                    <p>
                      We started with just a few dedicated volunteers and a big heart for street dogs in West Bengal. Spandan began as a small initiative, rescuing dogs from the streets and providing emergency care.
                    </p>
                    <div className="mt-3">
                      <Image
                        src="https://images.unsplash.com/photo-1657736750392-4213bb688638?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Street dog rescue"
                        width={600}
                        height={350}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Year 3 */}
          <li>
            <div className="relative pb-12">
              <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
              <div className="relative flex items-start space-x-4">
                <div className="relative px-1">
                  <div className="h-10 w-10 bg-teal-600 rounded-full ring-8 ring-white flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300">Expanding Our Reach (2019)</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-300">5 years ago</span>
                  </div>
                  <div className="mt-3 text-gray-700 dark:text-gray-300">
                    <p>
                      With community support and dedicated volunteers, we expanded our network. Spandan began assisting with sterilization programs (ABC), feeding hundreds of dogs daily, and setting up temporary shelters.
                    </p>
                    <div className="mt-3">
                      <Image
                        src="https://images.unsplash.com/photo-1573865526739-10659fec78a5"
                        alt="ABC program in action"
                        width={600}
                        height={350}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Year 5 */}
          <li>
            <div className="relative pb-12">
              <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
              <div className="relative flex items-start space-x-4">
                <div className="relative px-1">
                  <div className="h-10 w-10 bg-teal-600 rounded-full ring-8 ring-white flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300">A Shelter of Hope (2021)</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-300">3 years ago</span>
                  </div>
                  <div className="mt-3 text-gray-700 dark:text-gray-300">
                    <p>
                      We finally built a small yet permanent shelter for injured and abandoned dogs. This became a home of healing and love for many animals who had never experienced care before.
                    </p>
                    <div className="mt-3">
                      <Image
                        src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238"
                        alt="Shelter dogs"
                        width={600}
                        height={350}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Year 7 */}
          <li>
            <div className="relative pb-0">
              <div className="relative flex items-start space-x-4">
                <div className="relative px-1">
                  <div className="h-10 w-10 bg-teal-600 rounded-full ring-8 ring-white flex items-center justify-center">
                    <span className="text-white font-bold">7</span>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300">A Voice for the Voiceless (2023–24)</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-300">Present</span>
                  </div>
                  <div className="mt-3 text-gray-700 dark:text-gray-300">
                    <p>
                      Today, Spandan is a government-registered NGO making a real impact through rescues, surgeries, awareness drives, and legal support for animal rights. We continue to be the voice for the voiceless.
                    </p>
                    <div className="mt-3">
                      <Image
                        src="https://images.unsplash.com/photo-1508672019048-805c876b67e2"
                        alt="Spandan outreach"
                        width={600}
                        height={350}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    </CWrapper>
  );
}
