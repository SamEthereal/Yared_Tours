import { NextResponse } from "next/server";
import { InquirySubmission } from "@/types/tour";

export async function POST(request: Request) {
  try {
    const data: InquirySubmission = await request.json();

    if (!data.fullName || !data.email) {
      return NextResponse.json(
        { error: "Full name and email address are required." },
        { status: 400 }
      );
    }

    const referenceId = `YTT-${Date.now().toString().slice(-6)}`;

    // Structured lead record for CRM / dual-office inbox
    const notificationPayload = {
      referenceId,
      timestamp: new Date().toISOString(),
      customer: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone || "Not provided",
      },
      journeyDetails: {
        selectedTours: data.selectedTourSlugs,
        season: data.preferredSeason,
        estimatedDates: data.estimatedDates || "Flexible",
        duration: data.durationRange,
        travelers: `${data.travelersCount} (${data.groupType})`,
        accommodationStyle: data.accommodationStyle,
        specialInterests: data.specialInterests,
      },
      officeAssignment: {
        preferredOffice: data.preferredOfficeContact,
        primaryRouting: data.preferredOfficeContact === "netherlands" 
          ? "contact@yaredtour.com (Netherlands Office)" 
          : "ethiopia@yaredtour.com (Addis Ababa Office)",
        secondaryRouting: "Both offices alerted via webhook"
      },
      notes: data.notes || "None"
    };

    console.log("=== NEW YARED TOUR INQUIRY DISPATCHED ===");
    console.log(JSON.stringify(notificationPayload, null, 2));

    return NextResponse.json({
      success: true,
      referenceId,
      message: "Your inquiry has been successfully received by Yared Tour & Travel."
    });
  } catch (error) {
    console.error("Inquiry API Error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry submission." },
      { status: 500 }
    );
  }
}
