import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  location: string;
  email: string;
  whatsapp: string;
}

const teamData: Record<string, TeamMember[]> = {
  leadership: [
    { name: 'Alice Roy', role: 'Founder & Director', bio: 'Started Spandan to be a voice for the voiceless.', image: '/team/alice.jpg', location: 'Kolkata, India', email: 'alice@spandan.org', whatsapp: '+91 9876543210' },
    { name: 'Ravi Nair', role: 'Co-Director', bio: 'Manages strategy and operations.', image: '/team/ravi.jpg', location: 'Kolkata, India', email: 'ravi@spandan.org', whatsapp: '+91 9876543211' },
  ],
  caregivers: [
    { name: 'Meera Das', role: 'Caregiver', bio: 'Takes care of our shelter animals daily.', image: '/team/meera.jpg', location: 'Howrah, India', email: 'meera@spandan.org', whatsapp: '+91 9876543212' },
  ],
  rescue: [
    { name: 'Kunal Singh', role: 'Rescue Lead', bio: 'Responds to rescue calls and coordinates efforts.', image: '/team/kunal.jpg', location: 'South 24 Parganas, India', email: 'kunal@spandan.org', whatsapp: '+91 9876543213' },
  ],
  medical: [
    { name: 'Dr. Neha Verma', role: 'Veterinarian', bio: 'Ensures all our animals are healthy and cared for.', image: '/team/neha.jpg', location: 'Salt Lake, India', email: 'neha@spandan.org', whatsapp: '+91 9876543214' },
  ]
};

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedMember(null);
      }
    };
    if (selectedMember) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedMember]);

  const renderSection = (title: string, members: TeamMember[]) => (
    <div className="mb-16">
      <h3 className="text-3xl text-teal-700 font-semibold mb-6">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedMember(member)}
            className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition p-5"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={250}
              className="object-cover w-full h-40 rounded-xl mb-4"
            />
            <h4 className="text-xl font-semibold text-teal-700">{member.name}</h4>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto bg-teal-50 rounded-3xl shadow-xl p-10 md:p-14 border border-teal-100">
        <h2 className="text-4xl md:text-5xl font-semibold text-teal-700 mb-10 text-center font-raleway">
          Meet Our Team 🐾
        </h2>
        <p className="text-lg text-gray-700 mb-14 text-center">
          Dedicated individuals working tirelessly to make a difference in the lives of animals.
        </p>
        {renderSection('Our Leadership', teamData.leadership)}
        {renderSection('Our Caregivers', teamData.caregivers)}
        {renderSection('Our Rescue Team', teamData.rescue)}
        {renderSection('Our Medical Team', teamData.medical)}

        {/* Popup Modal */}
        {selectedMember && (
          <div className="fixed inset-0 z-50  bg-opacity-50 backdrop-blur-sm flex items-center justify-center px-4 py-8">
            <div
              ref={modalRef}
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 md:p-10 relative border border-teal-100"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-6 text-gray-600 hover:text-red-600 text-3xl font-bold"
              >
                ×
              </button>
              <div className="flex flex-col md:flex-row-reverse gap-8">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  width={400}
                  height={300}
                  className="rounded-xl object-cover w-full md:w-1/2 h-60 md:h-auto"
                />
                <div className="flex flex-col justify-center text-gray-800 space-y-4 w-full">
                  <h3 className="text-2xl font-bold text-teal-700">{selectedMember.name}</h3>
                  <p className="font-medium text-lg">{selectedMember.role}</p>
                  <p className="text-sm">{selectedMember.bio}</p>
                  <p className="text-sm"><strong>Location:</strong> {selectedMember.location}</p>
                  <p className="text-sm"><strong>Email:</strong> <a href={`mailto:${selectedMember.email}`} className="text-blue-600 underline">{selectedMember.email}</a></p>
                  <p className="text-sm"><strong>WhatsApp:</strong> <a href={`https://wa.me/${selectedMember.whatsapp.replace(/[^\d]/g, '')}`} className="text-green-600 underline">{selectedMember.whatsapp}</a></p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
