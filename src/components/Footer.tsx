"use client";

import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#0F8A5F] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                I
              </div>
              <div className="leading-tight">
                <div className="font-bold text-white text-lg leading-none">INSPIRE</div>
                <div className="text-xs text-gray-400 tracking-wider">EDUCATIONAL ACADEMY</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Government Recognised Educational Academy offering SSC, Intermediate,
              Degree & PG programs through recognised boards. Your trusted partner
              in quality education.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0F8A5F] transition" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0F8A5F] transition" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0F8A5F] transition" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://wa.me/919398131820" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0F8A5F] transition" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Admissions", href: "/admissions" },
                { label: "Notifications", href: "/notifications" },
                { label: "Results", href: "/results" },
                { label: "Downloads", href: "/downloads" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm group"
                  >
                    <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Courses</h3>
            <ul className="space-y-2.5">
              {[
                { label: "SSC (10th Class)", href: "/ssc" },
                { label: "Intermediate", href: "/intermediate" },
                { label: "BA - Bachelor of Arts", href: "/degree" },
                { label: "B.Com - Commerce", href: "/degree" },
                { label: "MA - Master of Arts", href: "/pg" },
                { label: "M.Com - Commerce", href: "/pg" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm group"
                  >
                    <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-[#0F8A5F] mt-1 flex-shrink-0" />
                <span>
                  Head Office: Waram Gadda<br />
                  Branches: Mehdipatnam, Falaknuma
                </span>
              </li>
              <li>
                <a href="tel:9398131820" className="flex items-center gap-3 text-gray-400 hover:text-white transition text-sm">
                  <FaPhoneAlt className="text-[#0F8A5F]" />
                  9398131820
                </a>
              </li>
              <li>
                <a href="mailto:info@inspireacademy.edu" className="flex items-center gap-3 text-gray-400 hover:text-white transition text-sm">
                  <FaEnvelope className="text-[#0F8A5F]" />
                  info@inspireacademy.edu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Inspire Educational Academy. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
