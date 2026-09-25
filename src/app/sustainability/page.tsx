import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Leaf, 
  HeartHandshake, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Globe2,
  TreePine,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "Sustainability & Travelife Partner | Yared Tour & Travel",
  description: "Discover Yared Tour & Travel's commitment to community-based tourism, fair living wages, and Travelife sustainability standards across Ethiopia.",
};

export default function SustainabilityPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Travelife Partner Since 2019</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Sustainability is How We Travel
          </h1>

          <p className="text-sm text-stone-600 leading-relaxed">
            At Yared Tour &amp; Travel, sustainability is not a marketing buzzword or a checklist. For over two decades, we have believed tourism must directly benefit the communities who welcome us, protect the ecosystems we visit, and create lasting value for generations to come.
          </p>
        </div>

        {/* Hero Visual Card */}
        <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl bg-stone-900">
          <Image
            src="https://dkemhji6i1k0x.cloudfront.net/000_clients/4208285/page/ethiopia-arbaminch-rubendrenth-0025-2082f3.jpg"
            alt="Sustainable tourism in southern Ethiopia"
            fill
            priority
            className="object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 text-white max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-wider font-bold text-amber-300">
              Community Livelihoods First
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              &ldquo;When communities benefit directly, tourism becomes stronger, fairer, and infinitely more meaningful.&rdquo;
            </h2>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900">
              Direct Community Income Creation
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We design itineraries so traveler spending stays in the local economy. We employ licensed village guides in every community, contract local mule handlers, dine in authentic family restaurants, and stay in community-run guest lodges in the Dorze highlands and Ari mountains.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900">
              Cultural Respect &amp; Dignity
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We reject safari-style voyeurism. In the Lower Omo Valley and Ari highlands, our visits are rooted in genuine dialogue and mutual learning. We establish pooled community photography contributions that support local primary schools and health clinics, preventing transactional exploitation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900">
              Environmental Stewardship &amp; Wildlife
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              In fragile ecosystems such as Bale Mountains National Park and Simien Mountains, we strictly enforce Leave No Trace policies. We support park scout anti-poaching programs that protect the endangered Ethiopian wolf and Walia ibex, and carry all non-biodegradable waste out of wilderness campsites.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900">
              Travelife Certified Auditing
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              As a recognized Travelife Partner, our entire supply chain—from vehicle fuel efficiency and driver rest periods to fair contract conditions for regional partners—is audited against stringent international sustainability standards.
            </p>
          </div>

        </div>

        {/* Responsible Traveler Code of Conduct */}
        <div className="bg-[#142820] text-white p-8 sm:p-12 rounded-3xl border border-emerald-950 space-y-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-wider font-bold text-amber-300">
              For Our Guests
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              The Yared Responsible Traveler Pledge
            </h2>
            <p className="text-xs text-stone-300 leading-relaxed">
              When traveling through Ethiopia with us, we invite all travelers to share in our principles of mindfulness and respect:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {[
              "Ask permission before photographing people, especially children and sacred rituals.",
              "Dress modestly when entering ancient churches, mosques, and rural villages.",
              "Support local artisans by buying genuine handicrafts directly from community cooperatives.",
              "Never purchase protected wildlife products or unverified historical antiquities.",
              "Carry a reusable filtered water flask to minimize disposable plastic bottle waste.",
              "Approach every host community with curiosity, humility, and patience."
            ].map((rule, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-stone-900/60 p-4 rounded-xl border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-stone-200">{rule}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center sm:text-left">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 bg-[#c86d3b] hover:bg-[#9e4720] text-white px-6 py-3 rounded-xl font-bold text-xs transition"
            >
              <span>Explore Our Community-Based Tours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
