"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Tour } from "@/types/tour";

interface TourCardProps {
  tour: Tour;
  onQuickInquire?: (tour: Tour) => void;
}

export default function TourCard({ tour, onQuickInquire }: TourCardProps) {
  const [imgError, setImgError] = useState(false);

  // Fallback high quality travel image if needed
  const fallbackImage = "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80";

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Visual Header */}
      <div className="relative h-60 w-full overflow-hidden bg-stone-800">
        <Image
          src={imgError || !tour.heroImage ? fallbackImage : tour.heroImage}
          alt={tour.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={() => setImgError(true)}
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
          <span className="bg-stone-900/80 backdrop-blur-md text-amber-300 px-3 py-1 rounded-full font-medium border border-amber-400/20">
            {tour.category}
          </span>
          <span className="bg-[#142820]/90 backdrop-blur-md text-emerald-300 px-2.5 py-1 rounded-full font-medium flex items-center gap-1 border border-emerald-500/30 text-[11px]">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            Travelife
          </span>
        </div>

        {/* Bottom Image Stats */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="inline-flex items-center gap-1 font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            {tour.durationDays} Days / {tour.durationNights} Nights
          </span>
          <span className="inline-flex items-center gap-1 text-stone-200 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            {tour.region}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
            <span>Difficulty: <strong className="text-stone-700">{tour.difficulty}</strong></span>
            <span>Season: <strong className="text-stone-700">{tour.bestSeason.split("(")[0].trim()}</strong></span>
          </div>

          <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#c86d3b] transition line-clamp-1">
            <Link href={`/tours/${tour.slug}`}>
              {tour.title.split("–")[0].trim()}
            </Link>
          </h3>

          <p className="text-xs font-serif italic text-amber-800/90 mt-1 mb-3 line-clamp-1">
            &ldquo;{tour.tagline}&rdquo;
          </p>

          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
            {tour.overview}
          </p>

          {/* Key Highlights */}
          <div className="space-y-1.5 mb-5 border-t border-stone-100 pt-3">
            <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block mb-1">
              Journey Highlights:
            </span>
            {tour.highlights.slice(0, 3).map((h, i) => (
              <div key={i} className="flex items-start gap-1.5 text-xs text-stone-700 line-clamp-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="truncate">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
          <Link
            href={`/tours/${tour.slug}`}
            className="flex-1 bg-stone-900 hover:bg-[#c86d3b] text-white py-2.5 px-3 rounded-xl text-xs font-semibold text-center transition flex items-center justify-center gap-1.5"
          >
            <span>View Itinerary</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href={`/plan-your-journey?tour=${tour.slug}`}
            className="bg-[#fbf5ef] hover:bg-[#f6e8da] text-[#c86d3b] hover:text-[#9e4720] border border-[#c86d3b]/30 py-2.5 px-3 rounded-xl text-xs font-semibold transition"
          >
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );
}
