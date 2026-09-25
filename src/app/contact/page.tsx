"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  Building
} from "lucide-react";
import companyData from "@/data/company.json";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    office: "either",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          selectedTourSlugs: ["General Contact Inquiry"],
          travelersCount: 1,
          groupType: "group",
          accommodationStyle: "standard-lodge",
          preferredOfficeContact: formData.office,
          notes: `Subject: ${formData.subject}\n\n${formData.message}`
        })
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-[#c86d3b] bg-[#fbf5ef] px-3 py-1 rounded-full border border-[#f6e8da]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Dual Office Operations</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Connect With Our Team
          </h1>

          <p className="text-sm text-stone-600 leading-relaxed">
            With offices in Addis Ababa, Ethiopia and Ubbergen, the Netherlands, our travel advisors are ready to assist you in English, Amharic, or Dutch.
          </p>
        </div>

        {/* Dual Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Addis Ababa Headquarters */}
          <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-[#c86d3b] bg-[#fbf5ef] px-3 py-1 rounded-full border border-[#f6e8da]">
                  Headquarters &bull; Ground Operations
                </span>
                <span className="text-[11px] text-stone-400 font-medium">Addis Ababa, Ethiopia</span>
              </div>

              <h2 className="text-2xl font-bold text-stone-900">
                Office Ethiopia
              </h2>

              <div className="space-y-3 text-xs text-stone-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c86d3b] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-800">Address:</strong>
                    <span>Rebecca Building, 2nd Floor, Office no. 206</span>
                    <span className="block text-stone-500">Subcity Yeka, Woreda 07, Addis Ababa, Ethiopia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#c86d3b] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-800">Phone Numbers:</strong>
                    <span>+251 944 34 97 22</span>
                    <span className="block">+251 911 72 40 72</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#c86d3b] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-800">Direct Operations Email:</strong>
                    <a href="mailto:ethiopia@yaredtour.com" className="text-[#c86d3b] hover:underline font-medium">
                      ethiopia@yaredtour.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#c86d3b] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-800">Business Hours:</strong>
                    <span>Mon – Fri: 8:30 AM – 5:30 PM (EAT)</span>
                    <span className="block">Sat: 9:00 AM – 1:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <a
                href="https://wa.me/251944349722"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-3 rounded-xl text-xs font-semibold text-center transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message Addis Desk on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Netherlands Office */}
          <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  European Client &amp; Support Office
                </span>
                <span className="text-[11px] text-stone-400 font-medium">Ubbergen, Netherlands</span>
              </div>

              <h2 className="text-2xl font-bold text-stone-900">
                Office Netherlands
              </h2>

              <div className="space-y-3 text-xs text-stone-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-800">Address:</strong>
                    <span>Rijksstraatweg 11</span>
                    <span className="block text-stone-500">6574 AA Ubbergen, The Netherlands</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-800">Direct Telephone:</strong>
                    <span>+31 24 844 2084</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-800">European Inquiries Email:</strong>
                    <a href="mailto:contact@yaredtour.com" className="text-amber-700 hover:underline font-medium">
                      contact@yaredtour.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-800">Business Hours:</strong>
                    <span>Mon – Fri: 9:00 AM – 5:00 PM (CET)</span>
                    <span className="block">Dutch &amp; English Consultation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <a
                href="mailto:contact@yaredtour.com"
                className="w-full bg-stone-900 hover:bg-stone-800 text-white py-3 rounded-xl text-xs font-semibold text-center transition flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email Netherlands Desk</span>
              </a>
            </div>
          </div>

        </div>

        {/* Contact Form & Google Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Direct Message Form */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#c86d3b]">
                Send a Message
              </span>
              <h3 className="text-2xl font-bold text-stone-900 mt-1">
                How Can We Help You?
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Whether you have questions about entry visas, custom dates, or regional logistics, we respond within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-900">Message Dispatched!</h4>
                <p className="text-xs text-emerald-700">
                  Thank you for reaching out. One of our coordinators will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-emerald-800 font-semibold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#c86d3b]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#c86d3b]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +44 7700 900077"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#c86d3b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Route Message To:
                  </label>
                  <select
                    value={formData.office}
                    onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                    className="w-full p-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#c86d3b]"
                  >
                    <option value="either">Fastest Available Response Desk</option>
                    <option value="ethiopia">Addis Ababa Operations Desk</option>
                    <option value="netherlands">Netherlands European Desk</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Question regarding Simien Mountains Trek in November"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#c86d3b]"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we assist you with your Ethiopian travel plans?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#c86d3b]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#c86d3b] hover:bg-[#9e4720] text-white font-bold rounded-xl transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Map Embed */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-stone-900 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#c86d3b]" />
                Addis Ababa Headquarters Location
              </h4>
              <span className="text-[11px] text-stone-500">Rebecca Building, 22</span>
            </div>

            <div className="h-[430px] rounded-2xl overflow-hidden border border-stone-200">
              <iframe
                title="Yared Tour & Travel Office Addis Ababa"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15762.110169796697!2d38.784495!3d9.015546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850069fab6d5%3A0x7ee8aa8ddadbec2b!2sRebecca%20Building%20%7C%2022!5e0!3m2!1sen!2set!4v1761082307601!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
