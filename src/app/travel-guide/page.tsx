"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Compass, 
  HelpCircle, 
  ChevronDown, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck, 
  SunMedium, 
  Mountain, 
  HeartHandshake, 
  FileText 
} from "lucide-react";
import travelGuideData from "@/data/travelGuide.json";

export default function TravelGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-[#c86d3b] bg-[#fbf5ef] px-3 py-1 rounded-full border border-[#f6e8da]">
            <Compass className="w-3.5 h-3.5" />
            <span>Essential Travel Knowledge</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Ethiopia Travel Guide &amp; FAQs
          </h1>

          <p className="text-sm text-stone-600 leading-relaxed">
            Everything you need to know before stepping foot in Ethiopia. From high-altitude health and climate layers to e-Visas and sacred church etiquette.
          </p>
        </div>

        {/* Practical Guidelines Cards */}
        <div className="space-y-8">
          {travelGuideData.sections.map((section, idx) => (
            <div 
              key={section.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#fbf5ef] text-[#c86d3b] flex items-center justify-center font-bold text-sm">
                  {idx === 0 && <FileText className="w-5 h-5" />}
                  {idx === 1 && <SunMedium className="w-5 h-5" />}
                  {idx === 2 && <Mountain className="w-5 h-5" />}
                  {idx === 3 && <HeartHandshake className="w-5 h-5" />}
                  {idx === 4 && <ShieldCheck className="w-5 h-5" />}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-stone-900">
                    {section.title}
                  </h2>
                  <span className="text-xs text-stone-500">{section.subtitle}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {section.content}
              </p>

              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block mb-1">
                  Practical Recommendations:
                </span>
                {section.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive FAQ Section */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-sm space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-[#c86d3b]">
              Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-stone-500">
              Answers to common traveler questions regarding visas, safety, payments, and private customization.
            </p>
          </div>

          <div className="space-y-3">
            {travelGuideData.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-stone-200 overflow-hidden transition"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-stone-50 transition"
                  >
                    <span className="font-bold text-sm text-stone-900">
                      {faq.question}
                    </span>
                    <div className={`p-1 rounded-full bg-stone-100 text-stone-500 shrink-0 transition-transform ${
                      isOpen ? "rotate-180 bg-[#c86d3b]/10 text-[#c86d3b]" : ""
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 bg-white text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Help Banner */}
        <div className="bg-stone-900 text-white p-8 rounded-3xl text-center space-y-4">
          <h3 className="text-xl font-bold text-white">
            Have a Specific Question About Your Travel Plans?
          </h3>
          <p className="text-xs text-stone-300 max-w-md mx-auto">
            Our travel specialists in Addis Ababa and the Netherlands are always available to help prepare your journey.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#c86d3b] hover:bg-[#9e4720] text-white px-5 py-2.5 rounded-xl font-semibold text-xs transition"
            >
              Contact Our Team
            </Link>
            <a
              href="https://wa.me/251944349722"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-semibold text-xs transition"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
