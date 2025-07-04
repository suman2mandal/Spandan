"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Carousel() {
  useEffect(() => {
    import("flowbite");
  }, []);

  return (
    <div
      id="default-carousel"
      className="relative w-[95vw] h-[80vh] mx-auto rounded-lg overflow-hidden"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative w-full h-full">
        {/* Item 1 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="absolute w-full h-full top-0 left-0">
            <Image
              src="/images/s1.jpg"
              alt="Image 1"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Item 2 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="absolute w-full h-full top-0 left-0">
            <Image
              src="/images/s2.jpg"
              alt="Image 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Item 3 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="absolute w-full h-full top-0 left-0">
            <Image
              src="/images/s3.jpg"
              alt="Image 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white/70"
          data-carousel-slide-to="0"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white/70"
          data-carousel-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white/70"
          data-carousel-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1 1 5l4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 9 4-4-4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
