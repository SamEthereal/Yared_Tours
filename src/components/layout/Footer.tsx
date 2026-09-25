import React from "react";
import Link from "next/link";
import { 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  MessageCircle,
  Clock
} from "lucide-react";
import companyData from "@/data/company.json";
import toursData from "@/data/tours.json";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-stone-800">
          
          {/* Brand & Sustainability */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#c86d3b] flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                YARED <span className="text-[#c86d3b] font-light">TOUR & TRAVEL</span>
              </span>
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed pr-4">
              Since 2004, Yared Tour &amp; Travel has crafted immersive, sustainable journeys across Ethiopia. As an Ethiopian-Dutch tour operator and verified Travelife Partner, we bridge local wisdom with international reliability.
            </p>

            <div className="flex items-center gap-3 p-3 bg-stone-900/80 rounded-xl border border-stone-800 max-w-sm mt-1">
              <div className="p-2 bg-emerald-950/80 rounded-lg text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-white">Travelife Partner</span>
                <span className="block text-[11px] text-stone-400">Committed to sustainable &amp; community-first tourism</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <a 
                href={companyData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400/50 transition"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href={companyData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400/50 transition"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a 
                href={companyData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400/50 transition"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a 
                href={companyData.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-emerald-400 hover:border-emerald-400/50 transition"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Signature Journeys Column 1 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Northern &amp; Cultural Journeys
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <Link href="/tours/historic-north" className="hover:text-amber-300 transition">
                  Historic North (Lalibela, Gondar)
                </Link>
              </li>
              <li>
                <Link href="/tours/simien-mountains" className="hover:text-amber-300 transition">
                  Simien Mountains Trekking
                </Link>
              </li>
              <li>
                <Link href="/tours/danakil-depression" className="hover:text-amber-300 transition">
                  Danakil Depression &amp; Volcano
                </Link>
              </li>
              <li>
                <Link href="/tours/harar" className="hover:text-amber-300 transition">
                  Harar – Walled Holy City
                </Link>
              </li>
              <li>
                <Link href="/tours/addis-ababa" className="hover:text-amber-300 transition">
                  Addis Ababa Cultural Discovery
                </Link>
              </li>
              <li>
                <Link href="/tours/grand-ethiopia-journey" className="hover:text-amber-300 transition font-medium text-amber-200">
                  Grand Ethiopia Journey (12 Days)
                </Link>
              </li>
            </ul>
          </div>

          {/* Signature Journeys Column 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Southern &amp; Wildlife Routes
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <Link href="/tours/omo-valley-discovery" className="hover:text-amber-300 transition">
                  Omo Valley Discovery Journey
                </Link>
              </li>
              <li>
                <Link href="/tours/south-omo-soshi-trekking" className="hover:text-amber-300 transition">
                  South Omo – Soshi Trekking
                </Link>
              </li>
              <li>
                <Link href="/tours/ari-zone-weset-trekking" className="hover:text-amber-300 transition">
                  Ari Zone – Weset Trekking
                </Link>
              </li>
              <li>
                <Link href="/tours/bale-mountains" className="hover:text-amber-300 transition">
                  Bale Mountains &amp; Wild Wolves
                </Link>
              </li>
              <li>
                <Link href="/tours/hawassa-sidama" className="hover:text-amber-300 transition">
                  Hawassa &amp; Sidama Coffee Lands
                </Link>
              </li>
              <li>
                <Link href="/tours/arba-minch-gamo" className="hover:text-amber-300 transition">
                  Arba Minch &amp; Gamo Highlands
                </Link>
              </li>
              <li>
                <Link href="/tours/jimma-and-bonga" className="hover:text-amber-300 transition">
                  Jimma &amp; Bonga Wild Rainforest
                </Link>
              </li>
              <li>
                <Link href="/tours/borena" className="hover:text-amber-300 transition">
                  Borena – Singing Wells &amp; Camels
                </Link>
              </li>
            </ul>
          </div>

          {/* Dual Offices Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Dual Office Presence
            </h4>
            
            {/* Addis Office */}
            <div className="mb-4 text-xs space-y-1">
              <span className="font-semibold text-white flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#c86d3b]" />
                Addis Ababa (Headquarters)
              </span>
              <p className="text-stone-400 text-[11px] leading-tight">
                Rebecca Building, 2nd Floor, Off. 206, Yeka Subcity, Addis Ababa
              </p>
              <p className="text-stone-300 text-[11px]">
                <a href="tel:+251944349722" className="hover:text-amber-300">+251 944 34 97 22</a>
              </p>
              <p className="text-stone-300 text-[11px]">
                <a href="mailto:ethiopia@yaredtour.com" className="hover:text-amber-300">ethiopia@yaredtour.com</a>
              </p>
            </div>

            {/* Netherlands Office */}
            <div className="text-xs space-y-1 pt-2 border-t border-stone-800">
              <span className="font-semibold text-white flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#c86d3b]" />
                Netherlands (European Office)
              </span>
              <p className="text-stone-400 text-[11px] leading-tight">
                Rijksstraatweg 11, 6574 AA Ubbergen, The Netherlands
              </p>
              <p className="text-stone-300 text-[11px]">
                <a href="tel:+31248442084" className="hover:text-amber-300">+31 24 844 2084</a>
              </p>
              <p className="text-stone-300 text-[11px]">
                <a href="mailto:contact@yaredtour.com" className="hover:text-amber-300">contact@yaredtour.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} Yared Tour &amp; Travel. All rights reserved. 20+ Years of Ethical Travel.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-stone-300 transition">
              Privacy &amp; Data Policy
            </Link>
            <Link href="/travel-guide" className="hover:text-stone-300 transition">
              Travel FAQs
            </Link>
            <Link href="/sustainability" className="hover:text-stone-300 transition">
              Travelife Partnership
            </Link>
            <Link href="/contact" className="hover:text-stone-300 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
