"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";

const topBarInfo = {
  phone: "9398131820",
  headOffice: "Waram Gadda",
  branches: ["Mehdipatnam", "Falaknuma"],
  socialLinks: [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
    { icon: FaWhatsapp, href: "https://wa.me/919398131820", label: "WhatsApp" },
  ],
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "SSC", href: "/ssc" },
  { label: "Intermediate", href: "/intermediate" },
  {
    label: "Boards",
    href: "#",
    children: [
      { label: "TOSS", href: "/boards/toss" },
      { label: "NIOS", href: "/boards/nios" },
      { label: "BOSSE", href: "/boards/bosse" },
    ],
  },
  { label: "Degree", href: "/degree" },
  { label: "PG", href: "/pg" },
  { label: "Admissions", href: "/admissions" },
  { label: "Notifications", href: "/notifications" },
  { label: "Results", href: "/results" },
  { label: "Downloads", href: "/downloads" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div
        className={`bg-[#0F8A5F] text-white transition-all duration-300 ${
          isScrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:9398131820" className="flex items-center gap-1.5 hover:text-green-200 transition">
              <FaPhoneAlt className="text-xs" />
              <span>9398131820</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-xs" />
              Head Office: {topBarInfo.headOffice}
            </span>
            <span className="hidden lg:flex items-center gap-2">
              Branches: {topBarInfo.branches.join(" | ")}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {topBarInfo.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-200 transition"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
           {/* Logo */}
<Link href="/" className="flex items-center gap-2 flex-shrink-0">
  <img 
    src="/logo.png" 
    alt="Inspire Educational Academy Logo" 
    className="w-10 h-10 object-contain"
  />
</Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1" ref={dropdownRef}>
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        )
                      }
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeDropdown === item.label
                          ? "text-[#0F8A5F] bg-green-50"
                          : "text-gray-700 hover:text-[#0F8A5F] hover:bg-green-50"
                      }`}
                    >
                      {item.label}
                      <FaChevronDown className="text-[10px]" />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[180px] animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-[#0F8A5F] hover:bg-green-50 transition"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[#0F8A5F] hover:bg-green-50 transition-all"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-600 hover:text-[#0F8A5F] transition rounded-lg hover:bg-green-50"
                aria-label="Search"
              >
                <FaSearch />
              </button>
              <Link
                href="/admissions"
                className="hidden sm:inline-flex items-center gap-2 bg-[#0F8A5F] text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-[#0c7a4e] transition-all shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 hover:-translate-y-0.5"
              >
                Apply Now
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden p-2 text-gray-700 hover:text-[#0F8A5F] transition rounded-lg"
                aria-label="Menu"
              >
                {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="border-t border-gray-100 bg-white px-4 py-3 animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search courses, notifications, results..."
                className="w-full px-4 py-2.5 pl-10 rounded-xl border border-gray-200 focus:border-[#0F8A5F] focus:ring-2 focus:ring-green-100 outline-none transition text-sm"
                autoFocus
              />
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        <div
          className={`xl:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-[600px] border-t border-gray-100" : "max-h-0"
          }`}
        >
          <div className="px-4 py-2 space-y-1 bg-white">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label
                      )
                    }
                    className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-green-50 transition"
                  >
                    {item.label}
                    <FaChevronDown
                      className={`text-[10px] transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => {
                            setMobileOpen(false);
                            setActiveDropdown(null);
                          }}
                          className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-[#0F8A5F] hover:bg-green-50 transition"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-[#0F8A5F] hover:bg-green-50 transition"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/admissions"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-[#0F8A5F] text-white px-5 py-3 rounded-lg font-medium text-sm hover:bg-[#0c7a4e] transition mt-2"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
