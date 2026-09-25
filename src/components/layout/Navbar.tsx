"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Compass, 
  Phone, 
  Mail, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  MapPin,
  Calendar
} from "lucide-react";
import companyData from "@/data/company.json";
import toursData from "@/data/tours.json";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toursDropdownOpen, setToursDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Trust & Dual-Office Banner */}
      <div className="bg-[#142820] text-amber-100/90 text-xs py-2 px-4 sm:px-8 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Travelife Partner &bull; Est. 2004
            </span>
            <span className="hidden md:inline-block text-amber-200/40">|</span>
            <span className="hidden md:inline-flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-400" />
              Addis Ababa: <a href="tel:+251944349722" className="hover:text-white transition">+251 944 34 97 22</a>
            </span>
            <span className="hidden lg:inline-block text-amber-200/40">|</span>
            <span className="hidden lg:inline-flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-400" />
              Netherlands: <a href="tel:+31248442084" className="hover:text-white transition">+31 24 844 2084</a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={companyData.socialLinks.whatsapp}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-700/80 hover:bg-emerald-600 text-white px-2.5 py-0.5 rounded-full transition font-medium"
            >
              <MessageCircle className="w-3 h-3 text-emerald-200" />
              <span>WhatsApp</span>
            </a>
            <a 
              href="mailto:ethiopia@yaredtour.com" 
              className="hidden sm:inline-flex items-center gap-1 hover:text-white transition"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              <span>ethiopia@yaredtour.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-stone-900/95 backdrop-blur-md shadow-lg py-3 border-b border-stone-800" 
          : "bg-stone-900 py-4 border-b border-stone-800/80"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c86d3b] to-[#9e4720] flex items-center justify-center text-white shadow-md shadow-orange-950/30 group-hover:scale-105 transition">
              <Compass className="w-6 h-6 text-amber-100" />
            </div>
            <div>
              <span className="block text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition">
                YARED <span className="text-[#c86d3b] font-light">TOUR & TRAVEL</span>
              </span>
              <span className="block text-[10px] tracking-wider uppercase text-stone-400">
                Responsible Travel &bull; Since 2004
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            <Link 
              href="/" 
              className="text-stone-300 hover:text-amber-400 font-medium text-sm transition"
            >
              Home
            </Link>

            {/* Tours Mega/Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setToursDropdownOpen(true)}
              onMouseLeave={() => setToursDropdownOpen(false)}
            >
              <Link 
                href="/tours" 
                className="inline-flex items-center gap-1 text-stone-300 hover:text-amber-400 font-medium text-sm transition py-2"
              >
                <span>Curated Journeys</span>
                <ChevronDown className="w-4 h-4 text-stone-400" />
              </Link>

              {toursDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-stone-900 border border-stone-700/80 rounded-xl shadow-2xl p-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="col-span-2 pb-2 mb-1 border-b border-stone-800 flex justify-between items-center text-stone-400 font-semibold uppercase tracking-wider text-[11px]">
                    <span>Our 14 Signature Journeys</span>
                    <Link href="/tours" className="text-amber-400 hover:underline lowercase font-normal">
                      view all &rarr;
                    </Link>
                  </div>
                  {toursData.map((t) => (
                    <Link
                      key={t.id}
                      href={`/tours/${t.slug}`}
                      className="p-2 rounded-lg hover:bg-stone-800/80 transition flex flex-col gap-0.5 group"
                      onClick={() => setToursDropdownOpen(false)}
                    >
                      <span className="text-stone-200 group-hover:text-amber-400 font-medium truncate">
                        {t.title.split("–")[0].trim()}
                      </span>
                      <span className="text-[10px] text-stone-400 flex items-center gap-2">
                        <span>{t.durationDays}D/{t.durationNights}N</span>
                        <span>&bull;</span>
                        <span className="truncate">{t.region}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/plan-your-journey" 
              className="text-stone-300 hover:text-amber-400 font-medium text-sm transition flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Plan Your Journey</span>
            </Link>

            <Link 
              href="/sustainability" 
              className="text-stone-300 hover:text-amber-400 font-medium text-sm transition"
            >
              Sustainability & Impact
            </Link>

            <Link 
              href="/travel-guide" 
              className="text-stone-300 hover:text-amber-400 font-medium text-sm transition"
            >
              Travel Guide
            </Link>

            <Link 
              href="/about-us" 
              className="text-stone-300 hover:text-amber-400 font-medium text-sm transition"
            >
              About Us
            </Link>

            <Link 
              href="/contact" 
              className="text-stone-300 hover:text-amber-400 font-medium text-sm transition"
            >
              Contact
            </Link>
          </div>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/plan-your-journey"
              className="bg-[#c86d3b] hover:bg-[#9e4720] text-white px-4 py-2 rounded-lg font-medium text-sm shadow-md transition hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              <span>Enquire Today</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-stone-300 hover:text-white p-2"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-stone-900 border-t border-stone-800 px-6 py-6 flex flex-col gap-4 text-stone-200">
            <Link 
              href="/" 
              className="text-base font-medium hover:text-amber-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/tours" 
              className="text-base font-medium hover:text-amber-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              All 14 Curated Journeys
            </Link>
            <Link 
              href="/plan-your-journey" 
              className="text-base font-medium text-amber-400 hover:text-amber-300 transition flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calendar className="w-4 h-4" />
              <span>Plan Your Journey (Custom Quote)</span>
            </Link>
            <Link 
              href="/sustainability" 
              className="text-base font-medium hover:text-amber-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sustainability & Community
            </Link>
            <Link 
              href="/travel-guide" 
              className="text-base font-medium hover:text-amber-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Travel Guide & FAQ
            </Link>
            <Link 
              href="/about-us" 
              className="text-base font-medium hover:text-amber-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us (2004 Heritage)
            </Link>
            <Link 
              href="/contact" 
              className="text-base font-medium hover:text-amber-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact & Offices
            </Link>

            <div className="pt-4 mt-2 border-t border-stone-800 flex flex-col gap-3 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Addis: +251 944 34 97 22 / +251 911 72 40 72</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Netherlands: +31 24 844 2084</span>
              </div>
              <Link
                href="/plan-your-journey"
                className="w-full text-center bg-[#c86d3b] hover:bg-[#9e4720] text-white py-2.5 rounded-lg font-medium text-sm shadow mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Enquire Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
