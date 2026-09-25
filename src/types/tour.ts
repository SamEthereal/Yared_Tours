export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
  mealsIncluded: string[];
  overnight: string;
  highlights: string[];
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  region: string;
  durationDays: number;
  durationNights: number;
  difficulty: "Easy" | "Moderate" | "Challenging" | "Strenuous";
  groupSize: string;
  bestSeason: string;
  startLocation: string;
  endLocation: string;
  heroImage: string;
  galleryImages: string[];
  category: "Cultural & Community" | "Trekking & Wildlife" | "Expedition & Geological" | "City & Short Break";
  travelifeCertified: boolean;
  communityImpactFocus: string;
  highlights: string[];
  included: string[];
  notIncluded: string[];
  itinerary: ItineraryDay[];
}

export interface OfficeContact {
  city: string;
  country: string;
  officeName: string;
  email: string;
  phones: string[];
  addressLines: string[];
  workingHours: string;
  mapEmbedUrl?: string;
  isPrimary?: boolean;
}

export interface CompanyInfo {
  name: string;
  brandTagline: string;
  foundedYear: number;
  mission: string;
  travelifeStatus: string;
  offices: {
    ethiopia: OfficeContact;
    netherlands: OfficeContact;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    linkedin: string;
    whatsapp: string;
  };
}

export interface InquirySubmission {
  fullName: string;
  email: string;
  phone?: string;
  selectedTourSlugs: string[];
  estimatedDates?: string;
  preferredSeason?: string;
  durationRange?: string;
  groupType: "solo" | "couple" | "family" | "friends" | "group";
  travelersCount: number;
  accommodationStyle: "standard-lodge" | "eco-resort" | "community-homestay" | "flexible";
  preferredOfficeContact: "ethiopia" | "netherlands" | "any";
  specialInterests?: string[];
  notes?: string;
}
