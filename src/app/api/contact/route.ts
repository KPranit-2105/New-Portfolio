import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, inquiryType, message } = body;

    // Bot honeypot spam protection
    if (body.botcheck) {
      console.warn("[Contact Route] Bot submission trapped and dropped via honeypot.");
      return NextResponse.json(
        { success: true, message: "Inquiry received." },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!name || !email || !message || !inquiryType) {
      return NextResponse.json(
        { error: "Missing required form fields (Name, Email, Message, Inquiry Type)." },
        { status: 400 }
      );
    }

    // Length validation
    if (message.trim().length < 5 || message.trim().length > 5000) {
      return NextResponse.json(
        { error: "Message length must be between 5 and 5000 characters." },
        { status: 400 }
      );
    }

    // Basic email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    // Sanitization against script tags
    if (/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi.test(message)) {
      return NextResponse.json(
        { error: "Unsafe content detected. Message rejected by security policy." },
        { status: 400 }
      );
    }

    // Console logging / payload processing (In production, wire to Resend, SendGrid, or AWS SES)
    console.log("[GRC Portfolio Contact Inquiry Received]", {
      name,
      email,
      organization: organization || "N/A",
      inquiryType,
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry successfully recorded and transmitted securely.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Contact Route Error:", error);
    return NextResponse.json(
      { error: "Internal server processing error." },
      { status: 500 }
    );
  }
}
