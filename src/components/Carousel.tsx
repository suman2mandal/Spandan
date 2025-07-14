"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:"https://images.unsplash.com/photo-1553434133-96822a8e94af?q=80&w=1465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Every life matters. Help us rescue more.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "From pain to protection — you can make the difference.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1452441271666-5d998aa2f6cc?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Find hope. Give home. Adopt today.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1585578488379-31c5504f0424?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Rescue is hope in action.",
  },
];




export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  // Preload images and wait for them before showing carousel
  useEffect(() => {
    let loaded = 0;
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        loaded++;
        if (loaded === slides.length) setAllImagesLoaded(true);
      };
    });
  }, []);

  useEffect(() => {
    if (!allImagesLoaded) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [allImagesLoaded]);

  if (!allImagesLoaded) {
    return (
      <div className="w-full h-[70vh] flex items-center justify-center bg-gray-100 text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
  <div
    key={index}
    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
      index === current ? "opacity-100 z-10" : "opacity-80 z-0"
    }`}
    style={{
      backgroundImage: `url(${slide.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Dark overlay and caption content */}
    <div className="absolute inset-0 bg-black/20 dark:bg-black/50 flex flex-col items-center justify-center text-white text-center px-6">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 drop-shadow">
        {slide.caption}
      </h2>
      <a
        href="#donate"
        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white font-semibold transition shadow-lg"
      >
        ❤️ Help Now
      </a>
    </div>
  </div>
))}


      {/* Arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white p-2 rounded-full shadow z-20"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="text-green-600" />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white p-2 rounded-full shadow z-20"
        aria-label="Next Slide"
      >
        <ChevronRight className="text-green-600" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === current ? "bg-green-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
