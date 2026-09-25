"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  MapPin, 
  Clock, 
  Users, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Send,
  Building,
  HeartHandshake
} from "lucide-react";
import toursData from "@/data/tours.json";
import { Tour, InquirySubmission } from "@/types/tour";

interface JourneyBuilderWizardProps {
  initialTourSlug?: string;
}

export default function JourneyBuilderWizard({ initialTourSlug }: JourneyBuilderWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTours, setSelectedTours] = useState<string[]>(
    initialTourSlug ? [initialTourSlug] : ["historic-north"]
  );

  const [season, setSeason] = useState("oct-jan");
  const [datesNotes, setDatesNotes] = useState("");
  const [durationPref, setDurationPref] = useState("standard");
  const [groupType, setGroupType] = useState<InquirySubmission["groupType"]>("couple");
  const [travelersCount, setTravelersCount] = useState(2);
  const [accommodationStyle, setAccommodationStyle] = useState<InquirySubmission["accommodationStyle"]>("standard-lodge");
  const [specialInterests, setSpecialInterests] = useState<string[]>(["Cultural Immersion", "Photography"]);
  const [preferredOffice, setPreferredOffice] = useState<InquirySubmission["preferredOfficeContact"]>("any");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    notes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (initialTourSlug && !selectedTours.includes(initialTourSlug)) {
      setSelectedTours([initialTourSlug]);
    }
  }, [initialTourSlug]);

  const toggleTour = (slug: string) => {
    if (selectedTours.includes(slug)) {
      if (selectedTours.length > 1) {
        setSelectedTours(selectedTours.filter((s) => s !== slug));
      }
    } else {
      setSelectedTours([...selectedTours, slug]);
    }
  };

  const toggleInterest = (interest: string) => {
    setSpecialInterests((prev) => 
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleNext = () => {
    if (currentStep === 1 && selectedTours.length === 0) {
      setErrorMessage("Please select at least one journey to proceed.");
      return;
    }
    setErrorMessage("");
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const handleBack = () => {
    setErrorMessage("");
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setErrorMessage("Please fill in your name and email address.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const payload: InquirySubmission = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        selectedTourSlugs: selectedTours,
        preferredSeason: season,
        estimatedDates: datesNotes,
        durationRange: durationPref,
        groupType,
        travelersCount,
        accommodationStyle,
        preferredOfficeContact: preferredOffice,
        specialInterests,
        notes: `Country: ${formData.country || "Not specified"}\n${formData.notes}`
      };

      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error("Unable to send inquiry. Please try again or reach out directly.");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl max-w-3xl mx-auto text-center space-y-6">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-wider font-bold text-[#c86d3b]">
            Inquiry Successfully Received
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
            Thank You, {formData.fullName.split(" ")[0]}!
          </h2>
          <p className="text-sm text-stone-600 max-w-lg mx-auto leading-relaxed">
            Your customized journey inquiry has been dispatched to our travel coordination desk. A detailed itinerary proposal and quotation will be prepared by our team.
          </p>
        </div>

        <div className="bg-[#fbf5ef] p-6 rounded-2xl border border-[#f6e8da] max-w-md mx-auto text-left space-y-3 text-xs text-stone-700">
          <div className="font-semibold text-stone-900 text-sm border-b border-stone-200 pb-2">
            Inquiry Summary:
          </div>
          <div>
            <strong>Selected Journeys:</strong>{" "}
            {selectedTours
              .map((slug) => toursData.find((t) => t.slug === slug)?.title.split("–")[0].trim())
              .filter(Boolean)
              .join(" + ")}
          </div>
          <div>
            <strong>Travel Party:</strong> {travelersCount} Traveler(s) ({groupType})
          </div>
          <div>
            <strong>Travel Window:</strong> {season} {datesNotes ? `(${datesNotes})` : ""}
          </div>
          <div>
            <strong>Assigned Response Desk:</strong>{" "}
            {preferredOffice === "netherlands" 
              ? "Netherlands European Office (+31 24 844 2084)" 
              : "Addis Ababa Headquarters (+251 944 34 97 22)"}
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
            }}
            className="text-xs text-stone-600 hover:text-stone-900 underline"
          >
            Submit Another Request
          </button>
          <a
            href="https://wa.me/251944349722"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold px-4 py-2 rounded-xl transition"
          >
            <span>Have an urgent question? Message on WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl overflow-hidden max-w-5xl mx-auto">
      {/* Step Progress Bar */}
      <div className="bg-stone-950 text-white px-6 sm:px-10 py-5 border-b border-stone-800">
        <div className="flex items-center justify-between gap-2 max-w-3xl mx-auto">
          {[
            { step: 1, label: "1. Journeys" },
            { step: 2, label: "2. Timing" },
            { step: 3, label: "3. Travelers" },
            { step: 4, label: "4. Preferences" },
            { step: 5, label: "5. Details" },
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-2">
              <div 
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  currentStep === item.step
                    ? "bg-[#c86d3b] text-white ring-2 ring-amber-400"
                    : currentStep > item.step
                    ? "bg-emerald-600 text-white"
                    : "bg-stone-800 text-stone-400"
                }`}
              >
                {currentStep > item.step ? <Check className="w-3.5 h-3.5" /> : item.step}
              </div>
              <span className={`hidden sm:inline text-xs font-medium ${
                currentStep === item.step ? "text-amber-300" : "text-stone-400"
              }`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Wizard Body */}
      <div className="p-6 sm:p-10">
        {errorMessage && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
            <span>&bull;</span>
            <span>{errorMessage}</span>
          </div>
        )}

        {/* STEP 1: Select Journey */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#c86d3b]">
                Step 1 of 5
              </span>
              <h2 className="text-2xl font-bold text-stone-900 mt-1">
                Select Your Desired Journey(s)
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Choose from Yared&apos;s 14 authentic signature itineraries. You can select one journey or combine multiple routes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-h-[460px] overflow-y-auto pr-1">
              {toursData.map((t) => {
                const isSelected = selectedTours.includes(t.slug);
                return (
                  <div
                    key={t.id}
                    onClick={() => toggleTour(t.slug)}
                    className={`cursor-pointer p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 relative ${
                      isSelected
                        ? "bg-[#fbf5ef] border-[#c86d3b] shadow-sm ring-1 ring-[#c86d3b]"
                        : "bg-white hover:bg-stone-50 border-stone-200"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                          {t.region}
                        </span>
                        <h4 className="text-sm font-bold text-stone-900 line-clamp-1">
                          {t.title.split("–")[0].trim()}
                        </h4>
                      </div>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                        isSelected ? "bg-[#c86d3b] border-[#c86d3b] text-white" : "border-stone-300"
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </div>

                    <p className="text-[11px] text-stone-600 line-clamp-2">
                      {t.tagline}
                    </p>

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-600" />
                        {t.durationDays}D / {t.durationNights}N
                      </span>
                      <span>{t.difficulty}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-xs text-stone-500 bg-stone-50 p-3 rounded-xl flex items-center justify-between">
              <span>Selected ({selectedTours.length} journey{selectedTours.length > 1 ? "s" : ""}):</span>
              <span className="font-semibold text-stone-800 truncate max-w-md">
                {selectedTours.map(s => toursData.find(t => t.slug === s)?.title.split("–")[0].trim()).join(", ")}
              </span>
            </div>
          </div>
        )}

        {/* STEP 2: Timing & Duration */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#c86d3b]">
                Step 2 of 5
              </span>
              <h2 className="text-2xl font-bold text-stone-900 mt-1">
                Travel Timing & Duration
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                When would you like to travel, and what is your ideal trip length?
              </p>
            </div>

            <div className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                Preferred Season / Time of Year
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "oct-jan", label: "Peak Dry Season (Oct – Jan)", desc: "Warm sunny days, clear mountain skies, best for trekking & festivals" },
                  { id: "feb-may", label: "Spring Bloom (Feb – May)", desc: "Pleasant temperatures, fewer visitors, excellent birdwatching" },
                  { id: "jun-sep", label: "Lush Green Season (Jun – Sep)", desc: "Rich waterfalls, lush vegetation, cultural ceremonies" }
                ].map((s) => (
                  <div
                    key={s.id}
                    onClick={() => setSeason(s.id)}
                    className={`cursor-pointer p-4 rounded-xl border text-left transition ${
                      season === s.id 
                        ? "bg-[#fbf5ef] border-[#c86d3b] ring-1 ring-[#c86d3b]" 
                        : "bg-white hover:bg-stone-50 border-stone-200"
                    }`}
                  >
                    <span className="font-bold text-xs text-stone-900 block mb-1">{s.label}</span>
                    <span className="text-[11px] text-stone-500 leading-snug block">{s.desc}</span>
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Estimated Dates or Specific Month (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mid November 2026 or 2 weeks around Christmas"
                  value={datesNotes}
                  onChange={(e) => setDatesNotes(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#c86d3b]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Trip Duration Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  {[
                    { id: "standard", label: "Standard Itinerary Length", desc: "Follow the crafted day-by-day plan as designed" },
                    { id: "condensed", label: "Condensed Pace", desc: "Express highlights if you have limited days" },
                    { id: "extended", label: "Relaxed / Extended Pace", desc: "Add leisure days for deeper photography or rest" }
                  ].map((d) => (
                    <div
                      key={d.id}
                      onClick={() => setDurationPref(d.id)}
                      className={`cursor-pointer p-4 rounded-xl border text-left transition ${
                        durationPref === d.id 
                          ? "bg-[#fbf5ef] border-[#c86d3b] ring-1 ring-[#c86d3b]" 
                          : "bg-white hover:bg-stone-50 border-stone-200"
                      }`}
                    >
                      <span className="font-bold text-stone-900 block mb-1">{d.label}</span>
                      <span className="text-[11px] text-stone-500 leading-snug block">{d.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Travelers & Party */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#c86d3b]">
                Step 3 of 5
              </span>
              <h2 className="text-2xl font-bold text-stone-900 mt-1">
                Travelers & Party Configuration
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Who is traveling on this journey? All Yared tours are private or tailored small groups.
              </p>
            </div>

            <div className="space-y-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                Party Composition
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs text-center">
                {[
                  { id: "solo", label: "Solo Traveler" },
                  { id: "couple", label: "Couple / 2" },
                  { id: "family", label: "Family" },
                  { id: "friends", label: "Friends Group" },
                  { id: "group", label: "Special Group" },
                ].map((g) => (
                  <div
                    key={g.id}
                    onClick={() => setGroupType(g.id as any)}
                    className={`cursor-pointer p-3.5 rounded-xl border font-medium transition ${
                      groupType === g.id 
                        ? "bg-[#fbf5ef] border-[#c86d3b] text-[#c86d3b] font-bold" 
                        : "bg-white hover:bg-stone-50 border-stone-200 text-stone-700"
                    }`}
                  >
                    {g.label}
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Total Number of Travelers: <strong className="text-[#c86d3b] text-base">{travelersCount}</strong>
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setTravelersCount((prev) => Math.max(prev - 1, 1))}
                    className="w-10 h-10 rounded-xl bg-stone-100 hover:bg-stone-200 font-bold text-stone-700 text-lg flex items-center justify-center transition"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold text-stone-900 w-8 text-center">{travelersCount}</span>
                  <button
                    type="button"
                    onClick={() => setTravelersCount((prev) => Math.min(prev + 1, 30))}
                    className="w-10 h-10 rounded-xl bg-stone-100 hover:bg-stone-200 font-bold text-stone-700 text-lg flex items-center justify-center transition"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Preferences & Style */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#c86d3b]">
                Step 4 of 5
              </span>
              <h2 className="text-2xl font-bold text-stone-900 mt-1">
                Accommodation Style & Interests
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Select your preferred lodging standard and special travel passions.
              </p>
            </div>

            <div className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                Accommodation Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {[
                  { id: "standard-lodge", title: "Comfort Lodges & Hotels", desc: "Top available regional 4-star hotels, lakeside resorts, and boutique heritage suites" },
                  { id: "eco-resort", title: "Eco-Lodges & Nature Cabins", desc: "Sustainable timber lodges, mountain chalets, and solar-powered wilderness retreats" },
                  { id: "community-homestay", title: "Village Homestays & Community Lodges", desc: "Authentic Dorze & Ari compound stays with direct host family engagement" }
                ].map((a) => (
                  <div
                    key={a.id}
                    onClick={() => setAccommodationStyle(a.id as any)}
                    className={`cursor-pointer p-4 rounded-xl border text-left transition ${
                      accommodationStyle === a.id 
                        ? "bg-[#fbf5ef] border-[#c86d3b] ring-1 ring-[#c86d3b]" 
                        : "bg-white hover:bg-stone-50 border-stone-200"
                    }`}
                  >
                    <span className="font-bold text-stone-900 block mb-1">{a.title}</span>
                    <span className="text-[11px] text-stone-500 leading-snug block">{a.desc}</span>
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Special Travel Interests (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    "Cultural Immersion & Anthropology",
                    "Wildlife Tracking (Wolves, Baboons, Nyala)",
                    "Highland Trekking & Walking",
                    "Coffee Origins & Farm Visits",
                    "Photography & Landscapes",
                    "Ancient Christian & Islamic History",
                    "UNESCO World Heritage Architecture"
                  ].map((interest) => {
                    const isChecked = specialInterests.includes(interest);
                    return (
                      <button
                        type="button"
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`px-3 py-1.5 rounded-full border text-xs transition ${
                          isChecked 
                            ? "bg-[#c86d3b] text-white border-[#c86d3b] font-medium" 
                            : "bg-white hover:bg-stone-100 text-stone-700 border-stone-200"
                        }`}
                      >
                        {interest}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: Contact Details & Office Routing */}
        {currentStep === 5 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#c86d3b]">
                Step 5 of 5
              </span>
              <h2 className="text-2xl font-bold text-stone-900 mt-1">
                Where Should We Send Your Itinerary & Quote?
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Our dual offices in Addis Ababa and the Netherlands provide seamless support in English, Amharic, and Dutch.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ruben van Dijk"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#c86d3b]"
                />
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. ruben@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#c86d3b]"
                />
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +31 6 12345678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#c86d3b]"
                />
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Country of Residence
                </label>
                <input
                  type="text"
                  placeholder="e.g. Netherlands, United States, Germany"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#c86d3b]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Preferred Contact Office
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: "any", label: "Either Office (Fastest Response)" },
                    { id: "ethiopia", label: "Addis Ababa Headquarters (EAT)" },
                    { id: "netherlands", label: "Netherlands Office (CET / Dutch/EU)" }
                  ].map((o) => (
                    <div
                      key={o.id}
                      onClick={() => setPreferredOffice(o.id as any)}
                      className={`cursor-pointer p-2.5 rounded-xl border text-center transition ${
                        preferredOffice === o.id 
                          ? "bg-[#fbf5ef] border-[#c86d3b] text-[#c86d3b] font-bold" 
                          : "bg-white hover:bg-stone-50 border-stone-200 text-stone-700"
                      }`}
                    >
                      {o.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Special Requests, Dietary Requirements, or Questions
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us if you have any questions or specific highlights you would love to experience..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#c86d3b]"
                />
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-3 text-xs text-emerald-800">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              <span>
                <strong>Your privacy is protected:</strong> Yared Tour &amp; Travel never shares your details with third parties. No payment is required at this stage.
              </span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-[#c86d3b] hover:bg-[#9e4720] text-white font-bold text-sm shadow-lg transition flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Dispatching Your Inquiry...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Request Custom Journey Proposal &amp; Quote</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* Wizard Footer Controls */}
        <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 px-4 py-2 rounded-lg bg-stone-100 transition"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 5 && (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#c86d3b] hover:bg-[#9e4720] px-6 py-2.5 rounded-xl shadow transition"
            >
              <span>Continue</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
