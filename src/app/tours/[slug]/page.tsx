import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Clock, 
  MapPin, 
  Calendar, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowLeft, 
  Compass, 
  HeartHandshake, 
  Phone,
  MessageCircle,
  Share2
} from "lucide-react";
import toursData from "@/data/tours.json";
import { Tour } from "@/types/tour";
import DayByDayTimeline from "@/components/tours/DayByDayTimeline";

export async function generateStaticParams() {
  return toursData.map((t) => ({
    slug: t.slug,
  }));
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = toursData.find((t) => t.slug === slug) as unknown as Tour;

  if (!tour) {
    notFound();
  }

  const fallbackImage = "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80";

  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-20">
      
      {/* Top Breadcrumb & Return Nav */}
      <div className="bg-stone-900 text-stone-300 py-3 px-4 sm:px-8 text-xs border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            href="/tours" 
            className="inline-flex items-center gap-1.5 hover:text-amber-400 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All 14 Journeys</span>
          </Link>

          <span className="text-stone-400 hidden sm:inline">
            Yared Tour &bull; {tour.category}
          </span>
        </div>
      </div>

      {/* Cinematic Hero */}
      <section className="relative h-[65vh] min-h-[440px] w-full bg-stone-950 flex items-end">
        <Image
          src={tour.heroImage || fallbackImage}
          alt={tour.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pb-10 w-full space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#c86d3b] text-white px-3 py-1 rounded-full text-xs font-semibold">
              {tour.category}
            </span>
            <span className="bg-stone-900/80 backdrop-blur-md text-emerald-300 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/30 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Travelife Certified Ethical Tour
            </span>
            <span className="bg-black/60 backdrop-blur-md text-stone-300 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-400" />
              {tour.region}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight max-w-4xl">
            {tour.title}
          </h1>

          <p className="text-base sm:text-lg font-serif italic text-amber-200/90 max-w-3xl">
            &ldquo;{tour.tagline}&rdquo;
          </p>
        </div>
      </section>

      {/* Fast Facts Bar */}
      <section className="bg-white border-b border-stone-200 py-4 px-4 sm:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 text-xs">
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#c86d3b] shrink-0" />
            <div>
              <span className="block text-stone-400 text-[10px] uppercase font-bold">Duration</span>
              <strong className="text-stone-800">{tour.durationDays} Days / {tour.durationNights} Nights</strong>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Compass className="w-4 h-4 text-amber-600 shrink-0" />
            <div>
              <span className="block text-stone-400 text-[10px] uppercase font-bold">Physical Grade</span>
              <strong className="text-stone-800">{tour.difficulty}</strong>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Users className="w-4 h-4 text-emerald-600 shrink-0" />
            <div>
              <span className="block text-stone-400 text-[10px] uppercase font-bold">Party Size</span>
              <strong className="text-stone-800">{tour.groupSize}</strong>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
            <div>
              <span className="block text-stone-400 text-[10px] uppercase font-bold">Best Season</span>
              <strong className="text-stone-800 truncate block">{tour.bestSeason}</strong>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-4 md:col-span-1 flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
            <div>
              <span className="block text-stone-400 text-[10px] uppercase font-bold">Route Endpoints</span>
              <strong className="text-stone-800 truncate block">{tour.startLocation} &rarr; {tour.endLocation}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Itinerary & Narrative Details */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-stone-900">
                Journey Overview
              </h2>
              <p className="text-sm text-stone-700 leading-relaxed">
                {tour.overview}
              </p>

              {/* Highlights List */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-xs uppercase font-bold tracking-wider text-[#c86d3b] mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Key Highlights of This Journey:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {tour.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-800 bg-[#fbf5ef] p-3 rounded-xl border border-[#f6e8da]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Day-by-Day Timeline */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-sm">
              <DayByDayTimeline itinerary={tour.itinerary} />
            </div>

            {/* Inclusions & Exclusions */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-stone-900">
                What&apos;s Included &amp; What&apos;s Not
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Included */}
                <div className="space-y-3">
                  <span className="text-xs uppercase font-bold tracking-wider text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Included in Package:
                  </span>
                  <ul className="space-y-2 text-xs text-stone-700">
                    {tour.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold mt-0.5">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not Included */}
                <div className="space-y-3">
                  <span className="text-xs uppercase font-bold tracking-wider text-stone-500 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-stone-400" />
                    Not Included:
                  </span>
                  <ul className="space-y-2 text-xs text-stone-500">
                    {tour.notIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-stone-400 font-bold mt-0.5">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Community Impact Focus */}
            <div className="bg-[#142820] text-white p-6 sm:p-8 rounded-3xl border border-emerald-950 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-300">
                  Responsible Tourism Guarantee
                </span>
                <h4 className="text-lg font-bold text-white">
                  Community Benefit Commitment
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {tour.communityImpactFocus}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Booking & Inquiry Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xl space-y-6">
              
              <div className="border-b border-stone-100 pb-4">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#c86d3b] block">
                  Bespoke Ethiopian Travel
                </span>
                <h3 className="text-xl font-bold text-stone-900">
                  Enquire About This Journey
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Private &amp; small group departures customized to your timing and party size.
                </p>
              </div>

              {/* Quick Fact pills */}
              <div className="space-y-2 text-xs bg-stone-50 p-4 rounded-2xl border border-stone-200/60">
                <div className="flex justify-between text-stone-600">
                  <span>Standard Duration:</span>
                  <strong className="text-stone-800">{tour.durationDays} Days / {tour.durationNights} Nights</strong>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Travel Format:</span>
                  <strong className="text-stone-800">Private Chauffeured 4WD</strong>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Guiding:</span>
                  <strong className="text-stone-800">Licensed English / Amharic</strong>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Support:</span>
                  <strong className="text-emerald-700 font-semibold">Dual Office (Addis &amp; NL)</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  href={`/plan-your-journey?tour=${tour.slug}`}
                  className="w-full bg-[#c86d3b] hover:bg-[#9e4720] text-white py-3.5 px-4 rounded-xl font-bold text-xs text-center transition block shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  Plan &amp; Customize This Itinerary
                </Link>

                <a
                  href={`https://wa.me/251944349722?text=Hello%20Yared%20Tour,%20I%20am%20interested%20in%20the%20${encodeURIComponent(tour.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-3 px-4 rounded-xl font-bold text-xs text-center transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with an Expert on WhatsApp</span>
                </a>
              </div>

              {/* Dual Office Direct Contacts */}
              <div className="pt-4 border-t border-stone-100 space-y-2 text-[11px] text-stone-500">
                <span className="font-semibold text-stone-700 block text-xs">
                  Prefer to speak by phone?
                </span>
                <div className="flex items-center justify-between">
                  <span>Ethiopia Office:</span>
                  <a href="tel:+251944349722" className="text-[#c86d3b] font-medium hover:underline">+251 944 34 97 22</a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Netherlands Office:</span>
                  <a href="tel:+31248442084" className="text-[#c86d3b] font-medium hover:underline">+31 24 844 2084</a>
                </div>
              </div>

              <div className="bg-amber-50 p-3 rounded-xl border border-amber-100 text-[11px] text-amber-800 leading-tight">
                <strong>No upfront payment required:</strong> We prepare your full day-by-day customized itinerary proposal and price quotation free of charge.
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
