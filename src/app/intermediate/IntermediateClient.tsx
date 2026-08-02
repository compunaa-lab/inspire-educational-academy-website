"use client";

import Link from "next/link";
import {
  FaCheckCircle,
  FaClock,
  FaChalkboardTeacher,
  FaLaptop,
  FaPrint,
  FaVideo,
  FaUsers,
  FaCalendarCheck,
  FaGraduationCap,
  FaArrowRight,
  FaStar,
  FaFlask,
  FaCalculator,
  FaChartBar,
  FaBookOpen,
  FaBuilding,
  FaStethoscope,
  FaBalanceScale,
} from "react-icons/fa";

const streams = [
  {
    icon: FaCalculator,
    name: "MPC",
    fullName: "Mathematics, Physics, Chemistry",
    desc: "Ideal for engineering aspirants. Opens doors to B.Tech, B.E., and other technical courses.",
    careers: "Engineering, Architecture, Defense, Research",
  },
  {
    icon: FaFlask,
    name: "BiPC",
    fullName: "Biology, Physics, Chemistry",
    desc: "Perfect for medical aspirants. Pathway to MBBS, BDS, Pharmacy, and life sciences.",
    careers: "Medicine, Pharmacy, Biotechnology, Nursing",
  },
  {
    icon: FaChartBar,
    name: "CEC",
    fullName: "Commerce, Economics, Civics",
    desc: "Best for commerce and business careers. Foundation for B.Com, CA, and management studies.",
    careers: "Commerce, Chartered Accountancy, Banking, Management",
  },
  {
    icon: FaBookOpen,
    name: "MEC",
    fullName: "Mathematics, Economics, Commerce",
    desc: "Great for humanities and civil services aspirants. Leads to BA, UPSC, and social sciences.",
    careers: "Civil Services, Law, Teaching, Social Work",
  },
];

const features = [
  { icon: FaClock, title: "Duration", desc: "Complete Intermediate in just 3 months through our accelerated program." },
  { icon: FaCheckCircle, title: "Eligibility", desc: "Students must have passed SSC/10th class from any recognised board." },
  { icon: FaLaptop, title: "Online Classes", desc: "Daily live interactive online classes with experienced subject experts." },
  { icon: FaUsers, title: "Offline Support", desc: "Weekly in-person doubt-clearing sessions at our centres." },
  { icon: FaPrint, title: "Study Material", desc: "Comprehensive printed notes, bit banks, and practice papers." },
  { icon: FaVideo, title: "Recorded Lectures", desc: "24/7 access to recorded video lectures for revision." },
  { icon: FaCalendarCheck, title: "Mock Tests", desc: "Regular mock tests and assessments to track your progress." },
  { icon: FaGraduationCap, title: "Career Guidance", desc: "Expert counselling for higher education and career planning." },
];

export default function IntermediateClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-green-50/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#8B0000] text-white px-4 py-2 rounded-full text-sm font-medium">
                <FaStar className="text-yellow-300" />
                Intermediate Program
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-900">
                Complete <span className="text-[#0F8A5F]">Intermediate</span> in Just 3 Months
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                MPC | BiPC | CEC | HEC streams available. Government recognised.
                Daily online classes, weekly offline support, and complete exam guidance.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/admissions" className="ripple-btn inline-flex items-center gap-2 bg-[#0F8A5F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0c7a4e] transition-all shadow-lg shadow-green-200">
                  Apply Now <FaArrowRight />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-[#0F8A5F] text-[#0F8A5F] px-6 py-3 rounded-xl font-semibold hover:bg-[#0F8A5F] hover:text-white transition-all">
                  Enquiry
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop"
                alt="Intermediate Education"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Streams */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-poppins text-gray-900">
              Choose Your Stream
            </h2>
            <div className="section-divider w-24 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {streams.map((stream) => (
              <div key={stream.name} className="card-3d glass-card p-6 flex gap-5">
                <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <stream.icon className="text-[#0F8A5F] text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins text-gray-900">
                    {stream.name}
                  </h3>
                  <p className="text-sm text-[#0F8A5F] font-medium">{stream.fullName}</p>
                  <p className="text-gray-600 text-sm mt-2">{stream.desc}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    <span className="font-semibold">Careers:</span> {stream.careers}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-poppins text-gray-900">
              Program Features
            </h2>
            <div className="section-divider w-24 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card p-5 text-center card-3d">
                <feature.icon className="text-2xl text-[#0F8A5F] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0F8A5F] to-[#0c7a4e]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-extrabold font-poppins mb-4">
            Choose Your Stream Today
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Get expert guidance on choosing the right stream for your career goals.
          </p>
          <Link href="/admissions" className="inline-flex items-center gap-2 bg-white text-[#0F8A5F] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg">
            Apply Now <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
