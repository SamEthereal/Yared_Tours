"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Compass, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Users, 
  Star, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  HeartHandshake,
  Globe2,
  TreePine,
  Coffee
} from "lucide-react";
import toursData from "@/data/tours.json";
import companyData from "@/data/company.json";
import TourCard from "@/components/tours/TourCard";
import { Tour } from "@/types/tour";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [quickTourSlug, setQuickTourSlug] = useState<string>(toursData[0].slug);

  const categories = [
    "All",
    "Cultural & Community",
    "Trekking & Wildlife",
    "Expedition & Geological",
    "City & Short Break",
  ];

  const filteredTours = selectedCategory === "All"
    ? toursData
    : toursData.filter((t) => t.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-stone-950 text-white px-4 sm:px-8 py-20 overflow-hidden">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://dkemhji6i1k0x.cloudfront.net/000_clients/4208285/page/erik-hathaway-erfc0-u0hge-unsplash-0b46f2.jpg"
            alt="Ethiopian Highlands and Cultural Landscapes"
            fill
            priority
            className="object-cover opacity-35 scale-105 animate-in fade-in duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-stone-950/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider animate-in fade-in duration-700">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Travelife Partner &bull; Ethiopian-Dutch Tour Operator Since 2004</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Responsible Travel. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#e5a93c] to-[#c86d3b]">
              Human to Human.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-stone-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Immerse yourself in Ethiopia&apos;s ancient rock-hewn wonders, untamed afro-alpine peaks, and vibrant living traditions. Authentic journeys designed with care, dignity, and European reliability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/tours"
              className="w-full sm:w-auto bg-[#c86d3b] hover:bg-[#9e4720] text-white px-8 py-4 rounded-xl font-bold text-sm shadow-xl hover:shadow-orange-950/40 transition duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Explore 14 Curated Journeys</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/plan-your-journey"
              className="w-full sm:w-auto bg-stone-900/80 hover:bg-stone-800 text-amber-200 border border-amber-400/30 px-8 py-4 rounded-xl font-bold text-sm backdrop-blur-md transition hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Plan Your Journey (Custom Quote)</span>
            </Link>
          </div>

          {/* Key Trust Stats Bar */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-stone-900/60 backdrop-blur-md border border-stone-800/80">
              <span className="block text-2xl font-bold text-amber-400">20+ Years</span>
              <span className="text-xs text-stone-400">Operating sustainably since 2004</span>
            </div>
            <div className="p-4 rounded-2xl bg-stone-900/60 backdrop-blur-md border border-stone-800/80">
              <span className="block text-2xl font-bold text-amber-400">Dual Offices</span>
              <span className="text-xs text-stone-400">Addis Ababa &amp; Netherlands</span>
            </div>
            <div className="p-4 rounded-2xl bg-stone-900/60 backdrop-blur-md border border-stone-800/80">
              <span className="block text-2xl font-bold text-emerald-400">100% Local</span>
              <span className="text-xs text-stone-400">Direct village community income</span>
            </div>
            <div className="p-4 rounded-2xl bg-stone-900/60 backdrop-blur-md border border-stone-800/80">
              <span className="block text-2xl font-bold text-amber-400">Travelife</span>
              <span className="text-xs text-stone-400">Verified ethical tourism standard</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK JOURNEY SELECTOR BAR */}
      <section className="bg-stone-900 py-6 px-4 sm:px-8 border-y border-stone-800 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-400 block">
              Quick Journey Selector
            </span>
            <span className="text-sm font-medium text-stone-300">
              Select one of our signature destinations to explore:
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <select
              value={quickTourSlug}
              onChange={(e) => setQuickTourSlug(e.target.value)}
              className="bg-stone-800 text-stone-200 border border-stone-700 text-xs rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c86d3b] w-full sm:w-80"
            >
              {toursData.map((t) => (
                <option key={t.id} value={t.slug}>
                  {t.title.split("–")[0].trim()} ({t.durationDays}D/{t.durationNights}N)
                </option>
              ))}
            </select>

            <Link
              href={`/tours/${quickTourSlug}`}
              className="w-full sm:w-auto bg-[#c86d3b] hover:bg-[#9e4720] text-white text-xs font-bold px-6 py-3 rounded-xl transition text-center whitespace-nowrap"
            >
              View Full Itinerary
            </Link>
          </div>
        </div>
      </section>

      {/* OUR 14 SIGNATURE JOURNEYS CATALOG */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-wider font-bold text-[#c86d3b]">
            Authentic Expeditions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
            Our 14 Curated Ethiopian Journeys
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Every itinerary has been perfected over two decades of on-the-ground experience. From the rock churches of Lalibela to the dramatic volcanics of Danakil, explore our established packages.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-stone-900 text-amber-300 shadow-md"
                    : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour as unknown as Tour} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/plan-your-journey"
            className="inline-flex items-center gap-2 bg-[#fbf5ef] hover:bg-[#f6e8da] border border-[#c86d3b]/40 text-[#c86d3b] hover:text-[#9e4720] px-8 py-4 rounded-2xl font-bold text-sm transition"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Need to combine journeys or adjust dates? Open Journey Planner</span>
          </Link>
        </div>
      </section>

      {/* WHY YARED TOUR & TRAVEL (VALUE PROPOSITION) */}
      <section className="bg-stone-900 text-white py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
              The Yared Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Why Discerning Travelers Choose Yared
            </h2>
            <p className="text-sm text-stone-400 leading-relaxed">
              We operate at the intersection of deep Ethiopian hospitality and European operational dependability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.valuePillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-stone-800/80 p-8 rounded-2xl border border-stone-700/80 flex flex-col justify-between hover:border-amber-400/50 transition duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-stone-900 flex items-center justify-center text-amber-400 group-hover:scale-110 transition">
                    {idx === 0 && <Compass className="w-6 h-6 text-[#c86d3b]" />}
                    {idx === 1 && <Globe2 className="w-6 h-6 text-amber-400" />}
                    {idx === 2 && <ShieldCheck className="w-6 h-6 text-emerald-400" />}
                    {idx === 3 && <HeartHandshake className="w-6 h-6 text-[#c86d3b]" />}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dual Headquarters Trust Feature */}
          <div className="bg-gradient-to-r from-stone-800 via-stone-800/90 to-stone-900 p-8 sm:p-12 rounded-3xl border border-stone-700 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 flex items-center justify-center lg:justify-start gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Peace of Mind Across Borders
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Dual Office Support in Addis Ababa &amp; Netherlands
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Enjoy complete peace of mind with local operational coordinators in Addis Ababa managing logistics, 4WD fleets, and emergency support, alongside our Netherlands European office providing seamless communication in Dutch and English, easy European bank wire processing, and customer care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="bg-[#c86d3b] hover:bg-[#9e4720] text-white px-6 py-3.5 rounded-xl font-bold text-xs transition"
              >
                View Office Contacts
              </Link>
              <a
                href="https://wa.me/251944349722"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-3.5 rounded-xl font-bold text-xs transition flex items-center gap-1.5"
              >
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY & COMMUNITY TEASER */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-stone-800">
            <Image
              src="https://dkemhji6i1k0x.cloudfront.net/000_clients/4208285/page/ethiopia-gamohighlands-rubendrenth-0025-fa2221.jpg"
              alt="Community-based tourism in Dorze Gamo Highlands"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs space-y-1">
              <span className="font-bold text-amber-300 uppercase tracking-wider text-[10px]">
                Community-Based Tourism
              </span>
              <p className="font-semibold text-sm">
                Supporting women-led cooperatives and village guides in the Gamo Highlands
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider font-bold text-[#c86d3b]">
              Ethical Travel Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              Tourism That Truly Enriches Host Communities
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              At Yared Tour &amp; Travel, sustainability is not an afterthought—it is the foundation of every journey we design. As a Travelife Partner, we adhere to strict international benchmarks for environmental responsibility, fair living wages, and cultural dignity.
            </p>

            <div className="space-y-3">
              {[
                "100% locally resident guides, scouts, and muleteers receiving fair daily wages",
                "Direct partnerships with Ari, Dorze, and Borena village cooperatives",
                "Rigorous single-use plastic reduction and wilderness pack-it-out policies",
                "Protection of sacred cultural heritage and respectful photography codes"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/sustainability"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c86d3b] hover:text-[#9e4720] hover:underline"
              >
                <span>Read our full Travelife sustainability report</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVELER TESTIMONIALS & SOCIAL PROOF */}
      <section className="bg-[#fbf5ef] py-20 px-4 sm:px-8 border-t border-[#f6e8da]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-wider font-bold text-[#c86d3b]">
              Verified Feedback
            </span>
            <h2 className="text-3xl font-bold text-stone-900">
              Memories From Our Travelers
            </h2>
            <p className="text-xs text-stone-600">
              Reviews from international guests who journeyed across Ethiopia with our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Trekking in the Simien Mountains with Yared Tour was the adventure of a lifetime. Sitting within feet of peaceful Gelada baboons while the cliffs fell into the clouds was unforgettable. Knowing that our local scouts and cooks were fairly paid made it even more special.",
                author: "Mark & Sarah V.",
                origin: "Amsterdam, Netherlands",
                tour: "Simien Mountains Trekking"
              },
              {
                quote: "The Danakil Depression trip was handled with flawless logistics and safety. From the Erta Ale lava lake at night to the surreal colors of Dallol, every detail was professionally executed. Having support from both the Addis team and Netherlands office gave us great confidence.",
                author: "Elena Rostova",
                origin: "Munich, Germany",
                tour: "Danakil Depression Expedition"
              },
              {
                quote: "Visiting Lalibela and the Historic North with Yared's licensed church historians was deeply moving. It was not just sightseeing—it was genuine cultural dialogue. Yared Tour & Travel is truly the benchmark for responsible African travel.",
                author: "David K.",
                origin: "London, United Kingdom",
                tour: "Historic North (8 Days)"
              }
            ].map((t, i) => (
              <div 
                key={i}
                className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-stone-100 mt-6">
                  <span className="block font-bold text-xs text-stone-900">{t.author}</span>
                  <span className="block text-[11px] text-stone-500">{t.origin}</span>
                  <span className="block text-[10px] text-[#c86d3b] font-medium mt-1">
                    {t.tour}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL INQUIRY CTA SECTION */}
      <section className="bg-stone-950 text-white py-20 px-4 sm:px-8 border-t border-stone-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
            Start Your Adventure
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Ready to Experience Ethiopia Authentically?
          </h2>
          <p className="text-sm text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Select one of our 14 signature journeys or request a tailored itinerary proposal. Our team in Addis Ababa and the Netherlands is ready to assist you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/plan-your-journey"
              className="w-full sm:w-auto bg-[#c86d3b] hover:bg-[#9e4720] text-white px-8 py-4 rounded-xl font-bold text-sm shadow-xl transition hover:scale-105 active:scale-95"
            >
              Plan Your Journey Now
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 px-8 py-4 rounded-xl font-bold text-sm transition"
            >
              Contact Our Dual Offices
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
