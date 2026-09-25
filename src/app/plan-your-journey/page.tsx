"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import JourneyBuilderWizard from "@/components/wizard/JourneyBuilderWizard";
import { ShieldCheck, Compass, MessageCircle, Phone } from "lucide-react";

function WizardWrapper() {
  const searchParams = useSearchParams();
  const initialTour = searchParams.get("tour") || undefined;

  return <JourneyBuilderWizard initialTourSlug={initialTour} />;
}

export default function PlanYourJourneyPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-[#c86d3b] bg-[#fbf5ef] px-3 py-1 rounded-full border border-[#f6e8da]">
            <Compass className="w-3.5 h-3.5" />
            <span>Tailor-Made Tour Inquiries</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Plan &amp; Customize Your Journey
          </h1>

          <p className="text-sm text-stone-600 leading-relaxed">
            Select from our 14 signature Ethiopian journeys, specify your preferred dates, group size, and accommodation style. Our coordinators in Addis Ababa and the Netherlands will prepare a comprehensive itinerary and quotation.
          </p>
        </div>

        {/* Wizard Container with Suspense */}
        <Suspense fallback={
          <div className="p-12 text-center text-xs text-stone-500">
            Loading Journey Wizard...
          </div>
        }>
          <WizardWrapper />
        </Suspense>

        {/* Why Book Direct Callout */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-xs">
          <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900 mb-0.5">Travelife Partner Guarantee</strong>
              <span className="text-stone-500">Rigorous ethical standards ensuring fair compensation for local guides and community hosts.</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
            <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900 mb-0.5">Dual-Office Peace of Mind</strong>
              <span className="text-stone-500">European communication standards &amp; SEPA banking paired with local Ethiopian operations.</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
            <MessageCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900 mb-0.5">No Upfront Commitment</strong>
              <span className="text-stone-500">Detailed quotations, hotel suggestions, and customized pacing provided free of charge.</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
