"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  FaGraduationCap,
  FaUsers,
  FaCheckCircle,
  FaBookOpen,
  FaChalkboardTeacher,
  FaLaptop,
  FaUniversity,
  FaAward,
  FaClock,
  FaStar,
  FaArrowRight,
  FaPlay,
  FaPhoneAlt,
  FaSearch,
} from "react-icons/fa";

export default function HomeClient() {
  const counterRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState({ students: 0, support: 0, duration: 0, boards: 0 });
  const [counted, setCounted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Counter animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counted) {
          setCounted(true);
          const targets = { students: 4000, support: 100, duration: 3, boards: 3 };
          const duration = 2000;
          const steps = 60;
          const interval = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            setCounters({
              students: Math.round(targets.students * eased),
              support: Math.round(targets.support * eased),
              duration: Math.round(targets.duration * eased),
              boards: Math.round(targets.boards * eased),
            });
            if (step >= steps) {
              clearInterval(timer);
              setCounters(targets);
            }
          }, interval);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [counted]);

  // Admission popup after delay
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-white via-green-50/30 to-white overflow-hidden">
        <div className="animated-bg-shapes">
          <div className="shape" />
          <div className="shape" />
          <div className="shape" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#8B0000] text-white px-4 py-2 rounded-full text-sm font-medium pulse-badge">
                <FaStar className="text-yellow-300" />
                Admissions Open 2026-27
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins leading-tight text-gray-900">
                Complete{" "}
                <span className="text-[#0F8A5F]">SSC or Intermediate</span>{" "}
                in Just{" "}
                <span className="relative">
                  3 Months
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 100 12"
                    fill="none"
                  >
                    <path
                      d="M5 6 Q 50 14 95 6"
                      stroke="#0F8A5F"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Government Recognised Education Programs. NAAC A++ Accredited.
                UGC Approved. Trusted by 4000+ successful students across India.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/admissions"
                  className="ripple-btn inline-flex items-center gap-2 bg-[#0F8A5F] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#0c7a4e] transition-all shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 hover:-translate-y-0.5"
                >
                  Apply Now
                  <FaArrowRight />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-[#0F8A5F] text-[#0F8A5F] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#0F8A5F] hover:text-white transition-all"
                >
                  Enquiry
                </Link>
                <a
                  href="tel:9398131820"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all"
                >
                  <FaPhoneAlt />
                  Call Now
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { icon: FaCheckCircle, label: "Government Recognised" },
                  { icon: FaAward, label: "NAAC A++" },
                  { icon: FaUniversity, label: "UGC Approved" },
                ].map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 bg-green-50 text-[#0F8A5F] px-3 py-1.5 rounded-lg text-sm font-medium"
                  >
                    <badge.icon className="text-xs" />
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&h=500&fit=crop"
                  alt="Students Learning"
                  className="w-full rounded-2xl shadow-2xl"
                />
                {/* Floating cards */}
                <div className="absolute -top-6 -left-6 glass-card p-4 shadow-xl floating-card">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-[#0F8A5F]">
                      <FaUsers size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">4000+</div>
                      <div className="text-xs text-gray-500">Students Enrolled</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 glass-card p-4 shadow-xl floating-card" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#8B0000]">
                      <FaGraduationCap size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900"> Boards</div>
                      <div className="text-xs text-gray-500">TOSS | NIOS | BOSSE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Counter */}
      <section ref={counterRef} className="py-16 bg-gradient-to-r from-[#0F8A5F] to-[#0c7a4e]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: counters.students, suffix: "+", label: "Successful Students", icon: FaUsers },
              { value: counters.support, suffix: "%", label: "Support Till Exam", icon: FaCheckCircle },
              { value: counters.duration, suffix: " Months", label: "SSC & Intermediate", icon: FaClock },
              { value: counters.boards, suffix: "", label: "Govt Recognised Boards", icon: FaUniversity },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <stat.icon className="mx-auto text-2xl text-green-200" />
                <div className="text-4xl md:text-5xl font-extrabold font-poppins">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-green-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#0F8A5F] font-semibold text-sm uppercase tracking-wider">
              Our Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-poppins text-gray-900 mt-2">
              Choose Your Path to Success
            </h2>
            <div className="section-divider w-24 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SSC (10th Class)",
                desc: "Complete your 10th class through TOSS, NIOS, or BOSSE in just 3 months.",
                icon: FaBookOpen,
                href: "/ssc",
                features: ["3 Months Duration", "Govt Recognised", "Online & Offline Classes"],
              },
              {
                title: "Intermediate",
                desc: "MPC, BiPC, CEC, HEC streams available. Complete in 3 months.",
                icon: FaGraduationCap,
                href: "/intermediate",
                features: ["MPC | BiPC | CEC | HEC", "Daily Online Classes", "Printed Study Material"],
              },
              {
                title: "Degree Programs",
                desc: "BA & B.Com through UGC recognised universities. 3-year programs.",
                icon: FaUniversity,
                href: "/degree",
                features: ["BA & B.Com", "Distance & Regular Mode", "Career Guidance"],
              },
              {
                title: "PG Programs",
                desc: "MA & M.Com for higher education. Flexible learning options.",
                icon: FaAward,
                href: "/pg",
                features: ["MA & M.Com", "Online & Distance Mode", "Expert Faculty"],
              },
              {
                title: "TOSS Board",
                desc: "Telangana Open School Society. Complete schooling with flexibility.",
                icon: FaChalkboardTeacher,
                href: "/boards/toss",
                features: ["TS Govt Recognised", "Printed Notes", "Official Exam Centres"],
              },
              {
                title: "NIOS Board",
                desc: "National Institute of Open Schooling. India's largest open schooling system.",
                icon: FaLaptop,
                href: "/boards/nios",
                features: ["National Level Board", "Flexible Learning", "Assignment Support"],
              },
            ].map((course) => (
              <Link
                key={course.title}
                href={course.href}
                className="card-3d group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-green-200 transition-all"
              >
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-[#0F8A5F] mb-4 group-hover:bg-[#0F8A5F] group-hover:text-white transition-all">
                  <course.icon size={24} />
                </div>
                <h3 className="text-xl font-bold font-poppins text-gray-900 mb-2 group-hover:text-[#0F8A5F] transition">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{course.desc}</p>
                <ul className="space-y-1.5">
                  {course.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                      <FaCheckCircle className="text-[#0F8A5F] text-[10px]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-2 text-[#0F8A5F] font-medium text-sm group-hover:gap-3 transition-all">
                  Learn More <FaArrowRight className="text-xs" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-[#0F8A5F] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#0c7a4e] transition-all shadow-lg shadow-green-200"
            >
              View All Courses <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#0F8A5F] font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-poppins text-gray-900 mt-2">
              Trusted by Thousands of Students
            </h2>
            <div className="section-divider w-24 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: FaCheckCircle, label: "Govt Recognised" },
              { icon: FaAward, label: "UGC Approved" },
              { icon: FaStar, label: "NAAC A++" },
              { icon: FaClock, label: "Fast Admissions" },
              { icon: FaChalkboardTeacher, label: "Expert Faculty" },
              { icon: FaLaptop, label: "Online Classes" },
              { icon: FaUsers, label: "Offline Support" },
              { icon: FaBookOpen, label: "Study Material" },
              { icon: FaGraduationCap, label: "Career Guidance" },
              { icon: FaUniversity, label: "Trusted Academy" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card p-4 text-center hover:-translate-y-1 transition-all duration-300"
              >
                <item.icon className="text-2xl text-[#0F8A5F] mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#0F8A5F] font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-poppins text-gray-900 mt-2">
              What Our Students Say
            </h2>
            <div className="section-divider w-24 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "S Srikaanth",
                course: "Intermediate MPC",
                text: "Inspire Academy helped me complete my Intermediate in just 3 months. The study material and online classes were excellent. I got admission in a good degree college.",
                rating: 5,
              },
              {
                name: "Samreen Begum",
                course: "SSC - TOSS",
                text: "I had dropped out of school but Inspire Academy gave me a second chance. The faculty was very supportive and the printed notes helped me score well in exams.",
                rating: 5,
              },
              {
                name: "Mohammad Ali",
                course: "BA - Degree",
                text: "The career guidance and support I received was outstanding. My certificate is valid for government jobs and passport. Highly recommended!",
                rating: 5,
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="glass-card p-6 card-3d"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      testimonial.name.includes("S Srikaanth")
                        ? "1507003211169-0a1dd7228f2d"
                        : testimonial.name.includes("Samreen Begum")
                        ? "1494790108377-be9c29b29330"
                        : "1500648767799-00dcc994a43e"
                    }?w=50&h=50&fit=crop`}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-500">{testimonial.course}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0F8A5F] to-[#0c7a4e]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold font-poppins mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Admissions are open for 2025-26. Limited seats available. Apply now to secure your future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="ripple-btn inline-flex items-center gap-2 bg-white text-[#0F8A5F] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg"
            >
              Apply Now <FaArrowRight />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Admission Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4 animate-in">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              ✕
            </button>
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaGraduationCap className="text-[#8B0000] text-2xl" />
            </div>
            <h3 className="text-xl font-bold font-poppins text-center mb-2">
              Admissions Open 2026-27
            </h3>
            <p className="text-gray-600 text-center text-sm mb-6">
              Limited seats available! Apply now for SSC, Intermediate, Degree & PG programs.
            </p>
            <Link
              href="/admissions"
              onClick={() => setShowPopup(false)}
              className="block w-full text-center bg-[#0F8A5F] text-white py-3 rounded-xl font-semibold hover:bg-[#0c7a4e] transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
