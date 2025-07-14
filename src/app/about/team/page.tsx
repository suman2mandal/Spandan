"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CWrapper from "@/components/wrappers/component-wrapper";
import Heading from "@/components/wrappers/Header";

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
    {
      name: "Mahua Chatterjee",
      role: "Founder & Director",
      bio: "Started Spandan to be a voice for the voiceless.",
      image:
        "https://res.cloudinary.com/dfwoqb3vm/image/upload/v1752128140/WhatsApp_Image_2025-04-03_at_10.04.34_PM_qoxgeb.jpg",
      location: "Kolkata, India",
      email: "alice@spandan.org",
      whatsapp: "+91 9876543210",
    },
    {
      name: "Soumya Das",
      role: "Co-Director",
      bio: "Manages strategy and operations.",
      image:
        "https://res.cloudinary.com/dfwoqb3vm/image/upload/v1752128020/Soumya_Spandan_rlhjjg.jpg",
      location: "Kolkata, India",
      email: "ravi@spandan.org",
      whatsapp: "+91 9876543211",
    },
  ],
  caregivers: [
    {
      name: "Meera Das",
      role: "Caregiver",
      bio: "Takes care of our shelter animals daily.",
      image: "/team/meera.jpg",
      location: "Howrah, India",
      email: "meera@spandan.org",
      whatsapp: "+91 9876543212",
    },
  ],
  rescue: [
    {
      name: "Kunal Singh",
      role: "Rescue Lead",
      bio: "Responds to rescue calls and coordinates efforts.",
      image: "/team/kunal.jpg",
      location: "South 24 Parganas, India",
      email: "kunal@spandan.org",
      whatsapp: "+91 9876543213",
    },
  ],
  medical: [
    {
      name: "Dr. Neha Verma",
      role: "Veterinarian",
      bio: "Ensures all our animals are healthy and cared for.",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Salt Lake, India",
      email: "neha@spandan.org",
      whatsapp: "+91 9876543214",
    },
  ],
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
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedMember]);

  const renderSection = (title: string, members: TeamMember[]) => (
    <section className="mb-16">
      <h3 className="text-3xl font-bold text-teal-700 dark:text-teal-500 mb-6 border-b-2 border-teal-200 pb-1">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {members.map((member, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedMember(member)}
            className="group cursor-pointer bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border dark:border-gray-900 border-gray-100"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 text-center">
              <h4 className="text-xl font-semibold text-teal-700 dark:text-teal-500 mb-1">{member.name}</h4>
              <p className="text-gray-500 dark:text-white text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <CWrapper>
      <Heading
        title="Meet Our Team 🐾"
        subtitle="Our passionate members dedicate their lives to rescuing, healing, and caring for the voiceless."
      />
      <div className="max-w-7xl mx-auto dark:bg-gray-700 bg-teal-50 rounded-3xl shadow-2xl p-10 md:p-14 border dark:border-gray-900 border-teal-100">
        {renderSection("Our Leadership", teamData.leadership)}
        {renderSection("Our Caregivers", teamData.caregivers)}
        {renderSection("Our Rescue Team", teamData.rescue)}
        {renderSection("Our Medical Team", teamData.medical)}

        {/* Modal */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 py-8">
            <div
              ref={modalRef}
              className="bg-white dark:bg-gray-700 rounded-3xl shadow-2xl max-w-3xl w-full p-8 md:p-10 relative border dark:border-gray-900 border-teal-100"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-6 dark:text-white text-gray-500 hover:text-red-600 text-3xl font-bold"
              >
                ×
              </button>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="flex flex-col justify-center dark:text-white text-gray-800 space-y-4 w-full">
                  <h3 className="text-2xl font-bold text-teal-700 dark:text-teal-500">{selectedMember.name}</h3>
                  <p className="font-medium text-lg">{selectedMember.role}</p>
                  <p className="text-sm leading-relaxed">{selectedMember.bio}</p>
                  <p className="text-sm">
                    <strong>Location:</strong> {selectedMember.location}
                  </p>
                  <p className="text-sm">
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="text-blue-600 underline"
                    >
                      {selectedMember.email}
                    </a>
                  </p>
                  <p className="text-sm">
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href={`https://wa.me/${selectedMember.whatsapp.replace(/[^\d]/g, "")}`}
                      className="text-green-600 underline"
                    >
                      {selectedMember.whatsapp}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </CWrapper>
  );
}