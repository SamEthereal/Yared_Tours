import React from "react";
import Link from "next/link";
import { ShieldCheck, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Privacy & Data Protection Policy | Yared Tour & Travel",
  description: "Privacy policy and client data protection guidelines for Yared Tour & Travel Ethiopia.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-stone-200/90 shadow-sm space-y-8 text-stone-700 text-xs sm:text-sm leading-relaxed">
        
        <div className="border-b border-stone-200 pb-6 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>GDPR &amp; Client Data Protection</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-stone-900">
            Client Privacy &amp; Data Protection Policy
          </h1>
          <p className="text-xs text-stone-500">
            Last Updated: September 2026 &bull; Yared Tour &amp; Travel Ethiopia &amp; Netherlands
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-stone-900">1. Commitment to Privacy</h2>
          <p>
            At Yared Tour &amp; Travel, we respect your right to privacy and are committed to safeguarding your personal data in accordance with international data protection standards, including the European Union General Data Protection Regulation (GDPR). This policy explains what personal information we collect, how it is processed, and how your rights are protected.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-stone-900">2. Information We Collect</h2>
          <p>When you contact us, request a journey quotation, or confirm a tour booking, we may collect:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
            <li>Full legal name, nationality, and passport details (required for domestic Ethiopian flight ticketing and national park permits).</li>
            <li>Contact details: email address, telephone / WhatsApp number, and country of residence.</li>
            <li>Travel itinerary preferences, dietary requirements, and medical/mobility notices relevant to high-altitude trekking or dietary safety.</li>
            <li>Payment transaction records (we do not store credit card credentials on our servers).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-stone-900">3. Purpose and Legal Basis for Processing</h2>
          <p>We process your personal information exclusively for:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
            <li>Preparing bespoke quotations, flight bookings, and hotel reservations.</li>
            <li>Issuing national park permits and registering with regional cultural authorities.</li>
            <li>Ensuring traveler health and safety during expeditions in remote areas.</li>
            <li>Communicating trip updates and answering pre-departure queries.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-stone-900">4. Third-Party Sharing</h2>
          <p>
            We strictly do not sell, rent, or trade your personal information. Information is disclosed only to verified service providers essential to fulfilling your itinerary:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
            <li>Domestic airlines (Ethiopian Airlines) for internal ticket issuance.</li>
            <li>Accommodations, community-run lodges, and expedition teams.</li>
            <li>Government and national park authorities as legally required by Ethiopian law.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-stone-900">5. Your Legal Rights</h2>
          <p>
            Under GDPR and data protection laws, you retain the right to access, rectify, or request deletion of your personal data held by Yared Tour &amp; Travel at any time. To exercise these rights, please contact our data coordinator at <a href="mailto:contact@yaredtour.com" className="text-[#c86d3b] underline">contact@yaredtour.com</a>.
          </p>
        </section>

        <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <span>&copy; {new Date().getFullYear()} Yared Tour &amp; Travel</span>
          <Link href="/contact" className="text-[#c86d3b] hover:underline font-medium">
            Contact Privacy Officer &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
}
