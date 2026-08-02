"use client";

import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  { q: "Is the certificate valid for higher studies?", a: "Yes, all certificates from TOSS, NIOS, and BOSSE are recognised by UGC and valid for admission to any college or university in India for higher studies." },
  { q: "Is the academy government recognised?", a: "Yes, Inspire Educational Academy is a government recognised institution. We partner with government recognised boards like TOSS, NIOS, and BOSSE." },
  { q: "Is the certificate valid for passport application?", a: "Yes, SSC and Intermediate certificates from TOSS, NIOS, and BOSSE are valid for passport applications as they are government recognised boards." },
  { q: "Can I apply for private jobs with this certificate?", a: "Absolutely. These certificates are equivalent to regular board certificates and are accepted by all private companies and MNCs." },
  { q: "Can I apply for government jobs?", a: "Yes, TOSS, NIOS, and BOSSE certificates are valid for all state and central government job applications." },
  { q: "Can I pursue further studies after this?", a: "Yes, after SSC you can pursue Intermediate. After Intermediate, you can pursue Degree (BA/B.Com) and then PG (MA/M.Com)." },
  { q: "Is distance degree valid?", a: "Yes, distance degrees from UGC recognised universities are valid for jobs, higher studies, and all other purposes." },
  { q: "Can I get a regular degree?", a: "Yes, we provide guidance for both regular and distance degree admissions through UGC recognised, NAAC A++ universities." },
  { q: "How long does SSC take to complete?", a: "SSC can be completed in just 3 months through our accelerated program with TOSS, NIOS, or BOSSE." },
  { q: "How long does Intermediate take?", a: "Intermediate can be completed in just 3 months through our accelerated program. All streams (MPC, BiPC, CEC, HEC) are available." },
  { q: "Are there online classes available?", a: "Yes, we provide daily live online classes, recorded video lectures, and digital study materials for all programs." },
  { q: "Is there offline support?", a: "Yes, we offer weekly offline classes and doubt-clearing sessions at our centres in Mehdipatnam, Falaknuma, and Waram Gadda." },
  { q: "What is the fee structure?", a: "Fees vary by program and board. Please contact us or download our fee structure from the Downloads page for detailed information." },
  { q: "How do I apply for admission?", a: "You can apply online through our Admissions page by filling the online form, or visit any of our branches for offline admission." },
];

export default function FaqClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="relative bg-gradient-to-br from-white via-green-50/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[#0F8A5F] font-semibold text-sm uppercase tracking-wider">Help Center</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-900 mt-2">Frequently Asked Questions</h1>
          <div className="section-divider w-24 mx-auto mt-4" />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-green-50/30 transition"
              >
                <div className="flex items-center gap-3">
                  <FaQuestionCircle className="text-[#0F8A5F] flex-shrink-0" />
                  <span className="font-medium text-gray-900 text-sm">{faq.q}</span>
                </div>
                <FaChevronDown className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`accordion-content ${openIndex === i ? "open" : ""}`}>
                <div className="px-5 pb-4 pl-12 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
