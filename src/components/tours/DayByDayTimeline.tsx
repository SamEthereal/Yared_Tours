"use client";

import React, { useState } from "react";
import { ChevronDown, MapPin, Utensils, Bed, Sparkles, CheckCircle2 } from "lucide-react";
import { ItineraryDay } from "@/types/tour";

interface DayByDayTimelineProps {
  itinerary: ItineraryDay[];
}

export default function DayByDayTimeline({ itinerary }: DayByDayTimelineProps) {
  // Open the first 2 days by default, or track an array of open indices
  const [openDays, setOpenDays] = useState<number[]>([1, 2]);

  const toggleDay = (dayNum: number) => {
    setOpenDays((prev) => 
      prev.includes(dayNum) ? prev.filter((d) => d !== dayNum) : [...prev, dayNum]
    );
  };

  const expandAll = () => {
    setOpenDays(itinerary.map((d) => d.day));
  };

  const collapseAll = () => {
    setOpenDays([]);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-stone-200">
        <div>
          <h3 className="text-xl font-bold text-stone-900">
            Day-by-Day Journey Itinerary
          </h3>
          <p className="text-xs text-stone-500 mt-0.5">
            Detailed daily schedule, meal inclusions, and overnight accommodations
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={expandAll}
            className="text-stone-600 hover:text-[#c86d3b] font-medium px-2 py-1 rounded bg-stone-100 transition"
          >
            Expand All
          </button>
          <span className="text-stone-300">|</span>
          <button
            onClick={collapseAll}
            className="text-stone-600 hover:text-[#c86d3b] font-medium px-2 py-1 rounded bg-stone-100 transition"
          >
            Collapse All
          </button>
        </div>
      </div>

      <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-stone-200">
        {itinerary.map((day) => {
          const isOpen = openDays.includes(day.day);

          return (
            <div 
              key={day.day} 
              className="relative transition-all duration-300"
            >
              {/* Timeline marker icon */}
              <div 
                className={`absolute -left-6 sm:-left-8 top-1.5 w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shadow transition-colors ${
                  isOpen 
                    ? "bg-[#c86d3b] text-white ring-4 ring-[#c86d3b]/20" 
                    : "bg-stone-100 text-stone-600 border border-stone-300"
                }`}
              >
                {day.day}
              </div>

              {/* Day Header Accordion Toggle */}
              <button
                onClick={() => toggleDay(day.day)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start justify-between gap-4 ${
                  isOpen 
                    ? "bg-white border-[#c86d3b]/40 shadow-md" 
                    : "bg-white/80 hover:bg-white border-stone-200 shadow-sm"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold tracking-wider uppercase text-[#c86d3b]">
                      Day {day.day}
                    </span>
                    <span className="text-stone-300">&bull;</span>
                    <span className="inline-flex items-center gap-1 text-xs text-stone-500 font-medium bg-stone-100 px-2 py-0.5 rounded-md">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      {day.location}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-stone-900">
                    {day.title}
                  </h4>
                </div>

                <div className={`p-1.5 rounded-full bg-stone-100 text-stone-500 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-[#c86d3b]/10 text-[#c86d3b]" : ""
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Expanded Details */}
              {isOpen && (
                <div className="mt-2 p-5 sm:p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-4 animate-in fade-in duration-200">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {day.description}
                  </p>

                  {/* Highlights of the Day */}
                  {day.highlights && day.highlights.length > 0 && (
                    <div className="bg-[#fbf5ef] p-3.5 rounded-xl border border-[#f6e8da] space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#9e4720] flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        Today&apos;s Highlights:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {day.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-stone-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Meals & Overnight Footer */}
                  <div className="pt-3 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center gap-2 text-stone-600">
                      <Utensils className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>
                        <strong className="text-stone-800">Meals Included:</strong>{" "}
                        {day.mealsIncluded && day.mealsIncluded.length > 0 
                          ? day.mealsIncluded.join(", ") 
                          : "Breakfast"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-stone-600">
                      <Bed className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>
                        <strong className="text-stone-800">Overnight:</strong> {day.overnight}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
