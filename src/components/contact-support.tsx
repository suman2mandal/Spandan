"use client";

import { useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

async function sendSupportMessage({
  name,
  email,
  message,
}: {
  name?: string;
  email: string;
  message: string;
}) {
  try {
    const res = await axios.post("/api/contact-support", {
      name,
      email,
      message,
    });

    return res.data;
  } catch {
    throw new Error("Failed to send support message.");
  }
}

export default function ContactSupport() {
  const { data: session } = useSession();

  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const [name, setName] = useState(session?.user?.name || "");
  const [email, setEmail] = useState(session?.user?.email || "");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim() || (!email && !session)) {
      alert("Please fill out all required fields.");
      return;
    }

    setStatus("sending");

    try {
      await sendSupportMessage({ name, email, message });
      setStatus("sent");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="text-center mt-8">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
      >
        Contact Support
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold text-teal-900 mb-4 text-center">
              Contact Support
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!session?.user && (
                <>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name (optional)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </>
              )}

              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="text-green-600 text-sm text-center">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm text-center">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
