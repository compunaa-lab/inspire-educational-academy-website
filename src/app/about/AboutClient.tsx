"use client";

import Link from "next/link";
import {
  FaCheckCircle,
  FaUniversity,
  FaAward,
  FaUsers,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaBuilding,
  FaGlobe,
  FaBriefcase,
  FaPassport,
  FaPlane,
  FaLaptop,
  FaArrowRight,
} from "react-icons/fa";

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-green-50/20 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <span className="text-[#0F8A5F] font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-900 mt-2">
              About Inspire Educational Academy
            </h1>
            <div className="section-divider w-24 mx-auto mt-4" />
            <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
              A premier educational institution committed to providing quality education
              through government recognised boards and universities since our establishment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://ik.imagekit.io/afxstudio/inspire/WhatsApp%20Image%202026-07-04%20at%201.23.05%20AM%20(1).jpeg?updatedAt=1783108442947"
                alt="Inspire Academy Campus"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-poppins text-gray-900">
                Your Trusted Partner in Education
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Inspire Educational Academy is a government recognised institution
                dedicated to empowering students through quality education. We offer
                SSC, Intermediate, Degree, and Postgraduate programs through TOSS,
                NIOS, BOSSE, and UGC recognised universities.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: FaCheckCircle, label: "Government Recognised" },
                  { icon: FaAward, label: "NAAC A++ Universities" },
                  { icon: FaUniversity, label: "UGC Approved" },
                  { icon: FaChalkboardTeacher, label: "Experienced Faculty" },
                  { icon: FaUsers, label: "Expert Counsellors" },
                  { icon: FaGraduationCap, label: "Trusted Guidance" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 p-3 bg-green-50 rounded-xl"
                  >
                    <item.icon className="text-[#0F8A5F]" />
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Validity */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-poppins text-gray-900">
              Certificate Validity
            </h2>
            <p className="text-gray-600 mt-2">
              Our certificates are valid for all purposes
            </p>
            <div className="section-divider w-24 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: FaGraduationCap, label: "Higher Studies", desc: "UG & PG Admissions" },
              { icon: FaPassport, label: "Passport", desc: "Valid for Application" },
              { icon: FaBuilding, label: "Government Jobs", desc: "All Govt Posts" },
              { icon: FaBriefcase, label: "Private Jobs", desc: "MNC & Corporate" },
              { icon: FaPlane, label: "Abroad Education", desc: "Foreign Universities" },
              { icon: FaLaptop, label: "Distance Education", desc: "Open Universities" },
              { icon: FaUniversity, label: "Regular Education", desc: "All Colleges" },
              { icon: FaGlobe, label: "Worldwide Valid", desc: "Global Recognition" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card p-5 text-center card-3d"
              >
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="text-[#0F8A5F] text-xl" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{item.label}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4000+ Success */}
      <section className="py-16 bg-gradient-to-r from-[#0F8A5F] to-[#0c7a4e]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold font-poppins mb-4">
            4000+ Successful Students and Counting
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students who have successfully completed their education
            with us and are now pursuing their dreams.
          </p>
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 bg-white text-[#0F8A5F] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg"
          >
            Start Your Journey <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
