import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Compass, 
  ShieldCheck, 
  MapPin, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  HeartHandshake
} from "lucide-react";
import companyData from "@/data/company.json";

export const metadata = {
  title: "About Us | Yared Tour & Travel Ethiopia",
  description: "Learn about Yared Tour & Travel, an Ethiopian-Dutch tour operator designing authentic, community-based journeys since 2004.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-[#c86d3b] bg-[#fbf5ef] px-3 py-1 rounded-full border border-[#f6e8da]">
            <Compass className="w-3.5 h-3.5" />
            <span>Our Story Since 2004</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Two Decades of Authentic &amp; Ethical Ethiopian Travel
          </h1>

          <p className="text-sm text-stone-600 leading-relaxed">
            Yared Tour &amp; Travel was founded in 2004 as a cross-continental partnership between Ethiopia and the Netherlands. For over 20 years, our passion has remained unchanged: to connect international travelers with Ethiopia&apos;s extraordinary heritage through authentic, dignified, and sustainable travel.
          </p>
        </div>

        {/* Dual Presence Story Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl bg-stone-900">
            <Image
              src="https://dkemhji6i1k0x.cloudfront.net/000_clients/4208285/page/artur-adilkhanian-i2jqrnbqudo-unsplash-2d7f01.jpg"
              alt="Yared Tour & Travel journey in Ethiopia"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-5">
            <span className="text-xs uppercase tracking-wider font-bold text-[#c86d3b]">
              The Ethiopian-Dutch Partnership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
              Local Ground Expertise Meets European Service Standards
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Navigating travel through remote corners of Ethiopia—from the roadless peaks of the Simien range to the volcanic depressions of the Afar desert—requires profound local knowledge, well-maintained fleets, trusted village connections, and meticulous logistical planning.
            </p>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Our dual presence gives travelers the best of both worlds: our **Addis Ababa Headquarters** coordinates on-the-ground operations, licensed guides, scouts, and 4WD expedition fleets, while our **European Office in Ubbergen, Netherlands** provides seamless communication in Dutch and English, easy European banking payments, and comprehensive pre-trip planning.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-4 rounded-2xl bg-white border border-stone-200">
                <span className="block font-bold text-stone-900 text-sm">Addis Ababa</span>
                <span className="text-stone-500">Operations &amp; Expedition Desk</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-stone-200">
                <span className="block font-bold text-stone-900 text-sm">Ubbergen, NL</span>
                <span className="text-stone-500">European Client Support Desk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Core Commitments */}
        <div className="bg-stone-900 text-white p-8 sm:p-12 rounded-3xl border border-stone-800 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
              Our Mission
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {companyData.brandTagline}
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              {companyData.mission}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-3">
              <Award className="w-6 h-6 text-amber-400" />
              <strong className="block text-white text-sm">Travelife Sustainability Partner</strong>
              <p className="text-stone-400 leading-relaxed">
                Audited against global sustainability criteria. We strictly adhere to fair remuneration, worker safety, plastic reduction, and biodiversity protection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-3">
              <Users className="w-6 h-6 text-emerald-400" />
              <strong className="block text-white text-sm">100% Local Guide Leadership</strong>
              <p className="text-stone-400 leading-relaxed">
                In every region we visit, we partner with resident indigenous guides whose families have lived there for generations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-3">
              <HeartHandshake className="w-6 h-6 text-[#c86d3b]" />
              <strong className="block text-white text-sm">Direct Community Benefits</strong>
              <p className="text-stone-400 leading-relaxed">
                By choosing community-run lodges, local pack-mule cooperatives, and village craft guilds, your journey directly supports rural livelihoods.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-4 pt-6">
          <h3 className="text-2xl font-bold text-stone-900">
            Let Us Craft Your Ethiopian Adventure
          </h3>
          <p className="text-xs text-stone-600 max-w-md mx-auto">
            Choose from our 14 signature journeys or request a customized itinerary proposal with our team.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              href="/tours"
              className="bg-stone-900 hover:bg-[#c86d3b] text-white px-6 py-3 rounded-xl font-bold text-xs transition"
            >
              Browse 14 Journeys
            </Link>
            <Link
              href="/plan-your-journey"
              className="bg-[#c86d3b] hover:bg-[#9e4720] text-white px-6 py-3 rounded-xl font-bold text-xs transition"
            >
              Plan Your Journey
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
