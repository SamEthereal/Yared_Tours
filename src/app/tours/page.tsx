"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Filter, Clock, MapPin, Compass, Sparkles } from "lucide-react";
import toursData from "@/data/tours.json";
import TourCard from "@/components/tours/TourCard";
import { Tour } from "@/types/tour";

export default function ToursCatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");

  const categories = [
    "All",
    "Cultural & Community",
    "Trekking & Wildlife",
    "Expedition & Geological",
    "City & Short Break"
  ];

  const filteredTours = toursData.filter((t) => {
    const matchesSearch = 
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.overview.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "All" || t.category === selectedCategory;

    let matchesDuration = true;
    if (selectedDuration === "short") {
      matchesDuration = t.durationDays <= 3;
    } else if (selectedDuration === "medium") {
      matchesDuration = t.durationDays >= 4 && t.durationDays <= 7;
    } else if (selectedDuration === "long") {
      matchesDuration = t.durationDays >= 8;
    }

    return matchesSearch && matchesCategory && matchesDuration;
  });

  return (
    <div className="bg-[#FDFBF7] min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-[#c86d3b] bg-[#fbf5ef] px-3 py-1 rounded-full border border-[#f6e8da]">
            <Compass className="w-3.5 h-3.5" />
            <span>The Yared Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Our 14 Signature Ethiopian Journeys
          </h1>
          <p className="text-sm text-stone-600 leading-relaxed">
            From the rock-hewn wonders of Lalibela and the peaks of the Simien Mountains to the subterranean lava lakes of Danakil and the living cultures of South Omo, discover our authentic travel packages.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by destination (e.g. Lalibela, Bale, Danakil, Omo)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#c86d3b]"
              />
            </div>

            {/* Duration Filter */}
            <div className="w-full md:w-56">
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full py-3 px-3 rounded-xl border border-stone-200 text-xs text-stone-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#c86d3b]"
              >
                <option value="All">All Trip Durations</option>
                <option value="short">Short Breaks (1 - 3 Days)</option>
                <option value="medium">Classic Tours (4 - 7 Days)</option>
                <option value="long">Grand Expeditions (8+ Days)</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-100">
            <span className="text-xs text-stone-400 font-medium mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Style:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-[#c86d3b] text-white shadow-sm"
                    : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between text-xs text-stone-500 px-2">
          <span>
            Showing <strong>{filteredTours.length}</strong> of <strong>{toursData.length}</strong> authentic journeys
          </span>
          {(searchQuery || selectedCategory !== "All" || selectedDuration !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedDuration("All");
              }}
              className="text-[#c86d3b] hover:underline font-medium"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Tours Grid */}
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour as unknown as Tour} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-3xl border border-stone-200 text-center max-w-md mx-auto space-y-4">
            <p className="text-sm text-stone-600">
              No journeys matched your search criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedDuration("All");
              }}
              className="bg-[#c86d3b] text-white px-5 py-2.5 rounded-xl text-xs font-semibold"
            >
              Clear Search &amp; Show All 14 Tours
            </button>
          </div>
        )}

        {/* Tailored Trip Callout */}
        <div className="bg-[#142820] text-white p-8 sm:p-12 rounded-3xl border border-emerald-950 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-300 flex items-center justify-center md:justify-start gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Tailored Travel Planning
            </span>
            <h3 className="text-2xl font-bold text-white">
              Want to Combine Routes or Customize Your Dates?
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              We specialize in tailor-made travel for individuals, couples, families, and private groups. Select your desired destinations in our guided journey wizard to receive a custom itinerary proposal.
            </p>
          </div>

          <Link
            href="/plan-your-journey"
            className="bg-[#c86d3b] hover:bg-[#9e4720] text-white px-6 py-3.5 rounded-xl font-bold text-xs whitespace-nowrap transition shadow-lg shrink-0"
          >
            Open Journey Planner
          </Link>
        </div>

      </div>
    </div>
  );
}
