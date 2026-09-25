# Yared Tour & Travel: Next-Generation Web Platform Implementation Plan

## Executive Summary & Strategic Context

**Yared Tour & Travel** is an established Ethiopian-Dutch tour operator founded in 2004 with dual offices in **Addis Ababa (Ethiopia)** and **Ubbergen (Netherlands)**. The company holds a unique market advantage: 20+ years of deep local operating knowledge, European reliability and communications standards, and a verified **Travelife Partnership** for responsible, community-based travel.

Following the ICT assessment report and review of the client's active offerings from their current navigation, this plan establishes a **stunning, high-converting, modern web platform** built strictly around their **14 core journeys and destinations**, powered by a **zero-overhead JSON architecture**, with an intuitive guided inquiry builder for selecting existing packages and durations.

```
Client Portfoliobox (Current)                    Modern Next-Generation Platform
┌───────────────────────────────────────┐        ┌──────────────────────────────────────────────┐
│ • Fragile 14-item navigation menu     │        │ • Next.js 15 App Router + React 19 + TS      │
│ • No day-by-day itinerary breakdown   │        │ • Structured JSON catalog of all 14 journeys │
│ • Plain email / contact form fallback │  ───>  │ • Interactive day-by-day accordion timeline  │
│ • Unoptimized images & slow mobile UX │        │ • Guided "Select & Book Your Journey" wizard │
│ • Unused portfolio boilerplate text   │        │ • Direct dual-office routing (Addis & NL)    │
│ • Missing Travelife trust showcases   │        │ • Mobile-first, sub-second LCP (CWV 95+)     │
└───────────────────────────────────────┘        └──────────────────────────────────────────────┘
```

---

## Finalized Architecture Decisions (Based on User Guidance)

1. **Journey Selection & Tailored Inquiry Engine:**
   - Instead of an open-ended freeform trip builder, the site will feature a **Curated Journey Selector & Inquiry Wizard**:
     - Travelers pick from Yared's **existing 14 journeys/destinations**.
     - Choose from their established duration options (e.g., 2-day quick escape, 5-day trekking, 12-day grand journey).
     - Select group size / traveler configuration (solo, couple, family, private group).
     - Select preferred travel window/season and accommodation style (standard lodge, eco-resort, community stay).
     - Generates an instant structured inquiry routed to both Addis Ababa and Netherlands offices.
2. **Zero-Overhead JSON Architecture:**
   - All itinerary data, destination guides, day-by-day schedules, highlights, inclusions/exclusions, pricing tiers, FAQs, and office contact information stored in modular, type-safe JSON/TypeScript collections (`src/data/tours.json`, `src/data/destinations.json`, `src/data/company.json`).
   - Zero CMS subscription fees, zero database latency, zero hosting bloat, version-controlled directly in Git.
3. **Core Catalog: The 14 Authentic Journeys (as verified from the client's menu):**
   1. **Addis Ababa** (Cultural & Historical Discovery)
   2. **Hawassa - Sidama** (Coffee Lands of Sidama & Yirgacheffe)
   3. **Arba Minch and Gamo Highlands** (Dorze Heritage & Nechisar)
   4. **Omo Valley Discovery Journey** (Cultural Encounters)
   5. **South Omo – Soshi Trekking** (Community Highland Trekking)
   6. **Ari Zone - Weset Trekking** (Village Immersion & Traditional Life)
   7. **Borena** (Camel Trekking & Pastoralist Culture)
   8. **Jimma and Bonga** (Origins of Coffee, Rainforests & Honey)
   9. **Bale Mountains** (Harenna Forest, Sanetti Plateau & Ethiopian Wolf)
   10. **Danakil Depression** (Erta Ale Volcano & Dallol Hydrothermal Wonders)
   11. **Harar** (The Holy Walled City & Hyena Tradition)
   12. **Grand Ethiopia Journey** (Combined Comprehensive Route)
   13. **Historic North** (Bahir Dar, Gondar, Lalibela & Axum)
   14. **Simien Mountains** (National Park, Gelada Baboons & Peak Trekking)

---

## Design System & Visual Aesthetics

- **Color Palette:**
  - **Lalibela Terracotta / Ochre:** `#C86D3B` and `#9E4720` (warm earth, stone heritage).
  - **Simien Forest Deep Green:** `#1D3A2F` and `#2D5442` (reinforcing Travelife eco-stewardship).
  - **Golden Abyssinian Accents:** `#E5A93C` and `#C68A24` (highlights, ratings, badges).
  - **Warm Parchment & Linen:** `#FDFBF7` and `#F5EFEB` (clean, luxurious editorial reading backgrounds).
  - **Charcoal Slate:** `#181A1B` (crisp, readable typography).
- **Typography:**
  - Headings: Elegant, high-editorial Serif (*Playfair Display* / *Cinzel*).
  - Body & UI: Contemporary, high-legibility Sans (*Plus Jakarta Sans* / *Inter*).
- **Layout & Interactions:**
  - Cinematic hero headers with progressive image loading.
  - Interactive day-by-day itinerary accordions with elevation & activity indicators.
  - Prominent Travelife Partner badge and dual-headquarters trust signals.

---

## Proposed Project Structure & Files

```
c:/Users/ENDER/Projects/Tour Site/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── tours/
│   │   └── badges/
├── src/
│   ├── app/
│   │   ├── layout.tsx                     # Global layout (Navbar, Footer, SEO)
│   │   ├── page.tsx                       # Homepage (Hero, Finder, Featured Tours, Trust)
│   │   ├── tours/
│   │   │   ├── page.tsx                   # Full catalog of 14 journeys with filters
│   │   │   └── [slug]/
│   │   │       └── page.tsx               # Dynamic tour page (day-by-day, inclusions, inquiry)
│   │   ├── plan-your-journey/
│   │   │   └── page.tsx                   # Guided 4-step Journey & Quote Selector
│   │   ├── sustainability/
│   │   │   └── page.tsx                   # Travelife accreditation & community impact
│   │   ├── travel-guide/
│   │   │   └── page.tsx                   # Visa, health, altitude, cultural etiquette & FAQ
│   │   ├── about-us/
│   │   │   └── page.tsx                   # 20+ year story (2004), Ethiopian-Dutch dual team
│   │   ├── contact/
│   │   │   └── page.tsx                   # Addis Ababa & Netherlands offices, WhatsApp, maps
│   │   └── api/
│   │       └── inquiry/
│   │           └── route.ts               # Lead handler & dual-office email/webhook dispatcher
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                 # Responsive header with dual-office status & WhatsApp
│   │   │   └── Footer.tsx                 # Rich footer with Travelife, office addresses & links
│   │   ├── tours/
│   │   │   ├── TourCard.tsx               # Rich tour card with duration, difficulty, highlights
│   │   │   ├── TourFilter.tsx             # Filter by style, duration, and region
│   │   │   ├── DayByDayTimeline.tsx       # Expandable daily itinerary with inclusions & tags
│   │   │   └── QuickInquiryModal.tsx      # Pre-filled tour inquiry drawer
│   │   ├── wizard/
│   │   │   └── JourneyBuilderWizard.tsx   # Step-by-step selector of existing journeys & durations
│   │   └── ui/                            # Accessible buttons, badges, accordions, dialogs
│   ├── data/
│   │   ├── tours.json                     # Complete data for all 14 journeys (days, highlights)
│   │   ├── company.json                   # Office contacts, team info, Travelife credentials
│   │   └── travelGuide.json               # Practical tips, altitude, visas, FAQs
│   └── types/
│       └── tour.ts                        # TypeScript interfaces for Tour, ItineraryDay, Inquiry
```

---

## Detailed Implementation Steps

### Step 1: Framework & Design Setup
- Initialize Next.js 15 project with TypeScript, Tailwind CSS, Lucide React, and Radix UI primitives.
- Configure Google Fonts (`Playfair Display` + `Plus Jakarta Sans`) and color variables in Tailwind.

### Step 2: Structured Data Compilation (`tours.json`)
- Extract and standardize the full content from the client's current site for all **14 journeys**:
  - Title, slug, region, duration (days/nights), physical rating, best season.
  - Highlights, hero image, gallery images.
  - Detailed day-by-day itinerary (Day 1, Day 2... with titles, activities, meals, and overnight locations).
  - Transparent "Included" vs "Not Included" lists.
- Compile `company.json` with official Addis Ababa and Ubbergen (NL) office details, phone numbers, WhatsApp, and Travelife accreditation copy.

### Step 3: Global Layout & High-Impact Homepage
- **Navigation:** Clean header featuring Destinations dropdown (grouped by the 14 journeys), "Plan Your Journey", "Sustainability", "Travel Guide", "About", and quick-contact triggers (WhatsApp & Dual Office phone badge).
- **Hero Section:** High-impact visual headline: *"Responsible Travel. Human to Human."* with quick-filter bar (Journey, Duration, Travel Style).
- **14 Journeys Showcase:** Visual cards with duration, difficulty pill, photo badges, and instant "View Itinerary" action.
- **Why Travel With Yared:** 2004 heritage (22+ years), Travelife Partner certification, 100% community-based guides, Dutch customer service guarantees.
- **Social Proof & Traveler Testimonials:** Genuine client feedback and community stories.
- **Dual Office Footer:** Live office hours, addresses in Addis Ababa (Rebecca Building) and Ubbergen Netherlands, social links, and privacy policy.

### Step 4: Tour Catalog & Dynamic Tour Detail Pages
- `/tours`: Filterable catalog of the 14 journeys with instant search and category tags (Cultural, Trekking, Wildlife, Short Break).
- `/tours/[slug]`:
  - Hero with key tour facts (Duration, Starting Point, Group Size, Best Season, Travelife Rating).
  - Interactive Day-by-Day itinerary accordions.
  - Inclusions/Exclusions grid.
  - Sticky Inquiry Sidebar allowing travelers to select preferred dates, guest count, and submit a quote request for that specific tour.

### Step 5: Curated "Plan Your Journey" Selector
- Multi-step guided wizard:
  - **Step 1:** Select one or multiple of the **14 core journeys** (e.g. Historic North + Simien Mountains or Danakil + Harar).
  - **Step 2:** Select travel duration preference & estimated travel dates/season.
  - **Step 3:** Select group configuration (Solo, Couple, Family, Private Group).
  - **Step 4:** Select accommodation preference (Lodge/Hotel, Eco-Lodge, Village Homestay).
  - **Step 5:** Enter contact information and preferred office (Addis Ababa or Netherlands).
- Instant submission to `/api/inquiry` with automated email confirmation to client and alerts to team inboxes.

### Step 6: Sustainability & Practical Travel Guides
- `/sustainability`: In-depth Travelife Partner showcase, community benefits, ethical guidelines, and village partnership model.
- `/travel-guide`: Practical advice on Ethiopian visas, altitude preparation, packing essentials, cultural etiquette, and comprehensive FAQ.
- `/contact`: Dedicated dual-office page with direct contact forms, WhatsApp links, and embedded Google Maps for both locations.

---

## Verification & Launch Plan

### Automated Checks
- `npm run build`: Zero errors, strict TypeScript validation.
- `npm run lint`: Code quality and accessibility compliance.
- Lighthouse Audit: Score **95+** on Performance, Accessibility, Best Practices, and SEO.

### Manual & Functional Tests
1. **Journey Navigation:** Verify all 14 journeys open seamlessly with accurate day-by-day details, correct imagery, and no broken links.
2. **Inquiry Wizard:** Walk through the 5-step journey selector, submit test inquiries, and verify payload structure and feedback states.
3. **Mobile Responsiveness:** Validate on iPhone and Android mobile viewport sizes (responsive navbar, smooth touch scrolling, legible fonts).
4. **Dual-Office Contact Channels:** Test phone, email, and WhatsApp links for both Ethiopian and Dutch offices.
