"use client";

import Link from "next/link";
import {
  FaCheckCircle,
  FaBookOpen,
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
  FaFileAlt,
  FaUniversity,
} from "react-icons/fa";

const features = [
  { icon: FaClock, title: "Duration", desc: "Complete SSC in just 3 months with our accelerated program designed for working professionals and dropout students." },
  { icon: FaCheckCircle, title: "Eligibility", desc: "Students who have completed primary education or dropped out after 7th/8th/9th class. Age: 14+ years for TOSS/NIOS/BOSSE." },
  { icon: FaUniversity, title: "Government Recognised Boards", desc: "Choose from TOSS (Telangana), NIOS (National), or BOSSE (Online). All boards are government recognised and valid everywhere." },
  { icon: FaLaptop, title: "Daily Online Classes", desc: "Attend live interactive online classes conducted by experienced faculty. Recordings available for revision anytime." },
  { icon: FaUsers, title: "Weekly Offline Classes", desc: "Attend in-person doubt-clearing sessions and offline classes at our centres in Mehdipatnam, Falaknuma, and Waram Gadda." },
  { icon: FaPrint, title: "Printed Study Material", desc: "Get comprehensive printed study notes, bit banks, and practice papers delivered to you for self-study and exam preparation." },
  { icon: FaFileAlt, title: "Bit Banks & Previous Papers", desc: "Access carefully curated bit banks and previous year question papers to understand exam patterns and score higher." },
  { icon: FaVideo, title: "Recorded Videos", desc: "Access 24/7 recorded video lectures covering the entire syllabus. Learn at your own pace, anytime, anywhere." },
  { icon: FaCalendarCheck, title: "Seminar Before Exams", desc: "Attend special pre-examination seminars where experienced faculty share tips, important questions, and exam strategies." },
  { icon: FaChalkboardTeacher, title: "Complete Guidance", desc: "Get end-to-end guidance from admission to examination - including form filling, exam centre allocation, and result support." },
  { icon: FaGraduationCap, title: "Official Exam Centres", desc: "Appear for exams at official government-designated examination centres. We guide you through the entire process." },
  { icon: FaStar, title: "Certificate Benefits", desc: "SSC certificate is valid for higher secondary education, passport applications, government jobs, private jobs, and abroad studies." },
];

export default function SscClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-green-50/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#8B0000] text-white px-4 py-2 rounded-full text-sm font-medium">
                <FaStar className="text-yellow-300" />
                SSC Program
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-900">
                Complete <span className="text-[#0F8A5F]">SSC (10th Class)</span> in Just 3 Months
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Government recognised Secondary School Certificate through TOSS, NIOS, or BOSSE.
                Flexible learning with online and offline support. Trusted by 4000+ students.
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
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"
                alt="SSC Education"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-poppins text-gray-900">
              SSC Program Features
            </h2>
            <div className="section-divider w-24 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card-3d glass-card p-6">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="text-[#0F8A5F] text-xl" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-poppins text-gray-900">
              Career Opportunities After SSC
            </h2>
            <div className="section-divider w-24 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Continue to Intermediate", desc: "Pursue MPC, BiPC, CEC, HEC in regular or open schooling mode. Build a strong foundation for your career." },
              { title: "Diploma & ITI Courses", desc: "Join polytechnic diploma courses or ITI programs for vocational and technical career paths." },
              { title: "Government Jobs", desc: "SSC certificate qualifies you for various Group C & D government job positions at state and central level." },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 text-center">
                <FaGraduationCap className="text-3xl text-[#0F8A5F] mx-auto mb-3" />
                <h3 className="font-bold font-poppins text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0F8A5F] to-[#0c7a4e]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-extrabold font-poppins mb-4">
            Ready to Complete Your SSC?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Admissions are open. Start your journey towards a bright future today!
          </p>
          <Link href="/admissions" className="inline-flex items-center gap-2 bg-white text-[#0F8A5F] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg">
            Apply Now <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
