"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919398131820?text=Hi%2C%20I%20am%20interested%20in%20admission%20at%20Inspire%20Educational%20Academy"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform hover:shadow-xl animate-bounce-slow"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a
        href="tel:9398131820"
        className="w-14 h-14 bg-[#0F8A5F] text-white rounded-full shadow-lg flex items-center justify-center text-xl hover:scale-110 transition-transform hover:shadow-xl"
        aria-label="Call Now"
      >
        <FaPhoneAlt />
      </a>
    </div>
  );
}
