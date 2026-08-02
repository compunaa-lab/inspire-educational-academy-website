"use client";

import { useState } from "react";
import Link from "next/link";
import { FaSearch, FaArrowRight, FaCheckCircle, FaBookOpen, FaGraduationCap, FaUniversity, FaAward, FaChalkboardTeacher, FaLaptop } from "react-icons/fa";

const allCourses = [
  { name: "SSC (10th Class)", category: "ssc", desc: "Complete your 10th through TOSS, NIOS, or BOSSE. 3 months duration.", icon: FaBookOpen, href: "/ssc", features: ["3 Months Duration", "Govt Recognised", "Online & Offline Classes"] },
  { name: "Intermediate - MPC", category: "intermediate", desc: "Mathematics, Physics, Chemistry. Ideal for engineering aspirants.", icon: FaGraduationCap, href: "/intermediate", features: ["3 Months Duration", "Daily Online Classes", "Printed Study Material"] },
  { name: "Intermediate - BiPC", category: "intermediate", desc: "Biology, Physics, Chemistry. Perfect for medical aspirants.", icon: FaGraduationCap, href: "/intermediate", features: ["3 Months Duration", "Recorded Lectures", "Mock Tests"] },
  { name: "Intermediate - CEC", category: "intermediate", desc: "Commerce, Economics, Civics. Best for commerce careers.", icon: FaGraduationCap, href: "/intermediate", features: ["3 Months Duration", "Expert Faculty", "Career Guidance"] },
  { name: "Intermediate - HEC", category: "intermediate", desc: "History, Economics, Civics. Great for civil services aspirants.", icon: FaGraduationCap, href: "/intermediate", features: ["3 Months Duration", "Live Classes", "Study Material"] },
  { name: "BA", category: "degree", desc: "Bachelor of Arts. 3-year program. Humanities & social sciences.", icon: FaUniversity, href: "/degree", features: ["3 Years Duration", "UGC Recognised", "Distance & Regular Mode"] },
  { name: "B.Com", category: "degree", desc: "Bachelor of Commerce. 3-year program. Accounting & finance.", icon: FaUniversity, href: "/degree", features: ["3 Years Duration", "NAAC A++", "Career Opportunities"] },
  { name: "MA", category: "pg", desc: "Master of Arts. Advanced humanities & social sciences program.", icon: FaAward, href: "/pg", features: ["2 Years Duration", "Online & Distance", "Research Focus"] },
  { name: "M.Com", category: "pg", desc: "Master of Commerce. Advanced commerce & finance program.", icon: FaAward, href: "/pg", features: ["2 Years Duration", "Expert Faculty", "Corporate Careers"] },
];

const categories = [
  { value: "all", label: "All Courses" },
  { value: "ssc", label: "SSC" },
  { value: "intermediate", label: "Intermediate" },
  { value: "degree", label: "Degree" },
  { value: "pg", label: "PG" },
];

export default function CoursesClient() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = allCourses.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "all" || c.category === category;
    return matchSearch && matchCat;
  });

  return (
    <>
      <section className="relative bg-gradient-to-br from-white via-green-50/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[#0F8A5F] font-semibold text-sm uppercase tracking-wider">Academic Programs</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-900 mt-2">All Courses</h1>
          <div className="section-divider w-24 mx-auto mt-4" />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search courses..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#0F8A5F] focus:ring-2 focus:ring-green-100 outline-none transition text-sm" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button key={cat.value} onClick={() => setCategory(cat.value)} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${category === cat.value ? "bg-[#0F8A5F] text-white shadow-lg shadow-green-200" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course) => (
              <Link key={course.name} href={course.href} className="card-3d group glass-card p-6 hover:border-green-200 transition-all">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#0F8A5F] mb-4 group-hover:bg-[#0F8A5F] group-hover:text-white transition-all">
                  <course.icon size={20} />
                </div>
                <h3 className="font-bold font-poppins text-gray-900 group-hover:text-[#0F8A5F] transition">{course.name}</h3>
                <p className="text-gray-600 text-sm mt-1 mb-3">{course.desc}</p>
                <ul className="space-y-1 mb-4">
                  {course.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                      <FaCheckCircle className="text-[#0F8A5F] text-[10px]" />{f}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1 text-[#0F8A5F] font-medium text-sm group-hover:gap-2 transition-all">
                  Learn More <FaArrowRight className="text-xs" />
                </span>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-500">No courses found matching your criteria.</div>
          )}
        </div>
      </section>
    </>
  );
}
