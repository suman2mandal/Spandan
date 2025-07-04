'use client';
import { useState } from 'react';
import Image from 'next/image';

// Define a proper TypeScript interface for the animals
interface Animal {
  id: string;
  name: string;
  quote: string;
  story: string;
  age: string;
  health: string;
  location: string;
  img: string;
}

const adoptableAnimals:Animal[] = [
  {
    id: "bruno",
    name: "Bruno",
    quote: "I’m strong now, I just need a family.",
    story: "Rescued from a highway accident, Bruno has made a full recovery.",
    age: "2 years",
    health: "Vaccinated and neutered",
    location: "Kolkata",
    img: "/adoptables/bruno.jpg",
  },
  {
    id: "maya",
    name: "Maya",
    quote: "I’ve healed. Can I come home with you?",
    story: "Found abandoned near a railway track. Now playful and healthy.",
    age: "1.5 years",
    health: "Vaccinated, dewormed",
    location: "Howrah",
    img: "/adoptables/maya.jpg",
  },
  {
    id: "shadow",
    name: "Shadow",
    quote: "Quiet, loyal, and waiting for you.",
    story: "Once shy and fearful, Shadow is now looking for a forever home.",
    age: "3 years",
    health: "Healthy, fully vaccinated",
    location: "South 24 Parganas",
    img: "/adoptables/shadow.jpg",
  },
  {
    id: "luna",
    name: "Luna",
    quote: "Gentle and calm soul with a big heart.",
    story: "Rescued from a flooded village. Luna loves cuddles and quiet walks.",
    age: "4 years",
    health: "Spayed, vaccinated",
    location: "Diamond Harbour",
    img: "/adoptables/luna.jpg",
  },
  {
    id: "rocky",
    name: "Rocky",
    quote: "Energetic and full of life.",
    story: "Saved from a dogfight ring. Rocky has a spirited personality and loves people.",
    age: "2.5 years",
    health: "Neutered, vaccinated",
    location: "Barasat",
    img: "/adoptables/rocky.jpg",
  },
    {
    id: "bruno",
    name: "Bruno",
    quote: "I’m strong now, I just need a family.",
    story: "Rescued from a highway accident, Bruno has made a full recovery.",
    age: "2 years",
    health: "Vaccinated and neutered",
    location: "Kolkata",
    img: "/adoptables/bruno.jpg",
  },
  {
    id: "maya",
    name: "Maya",
    quote: "I’ve healed. Can I come home with you?",
    story: "Found abandoned near a railway track. Now playful and healthy.",
    age: "1.5 years",
    health: "Vaccinated, dewormed",
    location: "Howrah",
    img: "/adoptables/maya.jpg",
  },
  {
    id: "shadow",
    name: "Shadow",
    quote: "Quiet, loyal, and waiting for you.",
    story: "Once shy and fearful, Shadow is now looking for a forever home.",
    age: "3 years",
    health: "Healthy, fully vaccinated",
    location: "South 24 Parganas",
    img: "/adoptables/shadow.jpg",
  },
  {
    id: "luna",
    name: "Luna",
    quote: "Gentle and calm soul with a big heart.",
    story: "Rescued from a flooded village. Luna loves cuddles and quiet walks.",
    age: "4 years",
    health: "Spayed, vaccinated",
    location: "Diamond Harbour",
    img: "/adoptables/luna.jpg",
  },
  {
    id: "rocky",
    name: "Rocky",
    quote: "Energetic and full of life.",
    story: "Saved from a dogfight ring. Rocky has a spirited personality and loves people.",
    age: "2.5 years",
    health: "Neutered, vaccinated",
    location: "Barasat",
    img: "/adoptables/rocky.jpg",
  },
];

export default function AnimalSelector() {
  const [search, setSearch] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  const filteredAnimals = adoptableAnimals.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase())
  );

const scrollToCards = () => {
  const el = document.getElementById('animal-selector-cards');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const handleNext = () => {
  const maxStart = Math.max(0, filteredAnimals.length - visibleCount);
  setStartIndex((prev) => {
    const newStart = Math.min(prev + visibleCount, maxStart);
    setTimeout(scrollToCards, 0); // allow DOM update
    return newStart;
  });
};

const handlePrev = () => {
  setStartIndex((prev) => {
    const newStart = Math.max(prev - visibleCount, 0);
    setTimeout(scrollToCards, 0); // allow DOM update
    return newStart;
  });
};


  const visibleAnimals = filteredAnimals.slice(
    startIndex,
    Math.min(startIndex + visibleCount, filteredAnimals.length)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search animals by name"
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setStartIndex(0);
          }}
        />
        <div className="ml-4 flex space-x-2">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="px-3 py-1 bg-teal-600 text-white rounded-md disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + visibleCount >= filteredAnimals.length}
            className="px-3 py-1 bg-teal-600 text-white rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleAnimals.map((animal) => (
          <div
            key={animal.id}
            className="border rounded-xl p-4 cursor-pointer hover:shadow-lg transition"
            onClick={() => setSelectedAnimal(animal)}
          >
            <Image
              src={animal.img}
              alt={animal.name}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <h3 className="mt-4 text-lg font-semibold text-teal-900">
              {animal.name}
            </h3>
            <p className="text-gray-700 italic text-sm">&quot;{animal.quote}&quot;</p>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedAnimal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg relative">
            <button
              onClick={() => setSelectedAnimal(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>
            <Image
              src={selectedAnimal.img}
              alt={selectedAnimal.name}
              width={500}
              height={300}
              className="rounded-lg object-cover mb-4"
            />
            <h2 className="text-2xl font-bold text-teal-900 mb-2">
              {selectedAnimal.name}
            </h2>
            <p className="italic text-gray-700 mb-4">
              &quot;{selectedAnimal.quote}&quot;
            </p>
            <p className="text-sm text-gray-800 mb-2">
              <strong>Story:</strong> {selectedAnimal.story}
            </p>
            <p className="text-sm text-gray-800">
              <strong>Age:</strong> {selectedAnimal.age} |{' '}
              <strong>Health:</strong> {selectedAnimal.health} |{' '}
              <strong>Location:</strong> {selectedAnimal.location}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
