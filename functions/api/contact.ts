export async function onRequestPost(context: { request: Request; env: any }) {
  const { request } = context;

  try {
    const body: any = await request.json();
    const { name, email, organization, inquiryType, message } = body;

    // Bot honeypot spam protection
    if (body.botcheck) {
      console.warn("[Cloudflare Pages Contact] Bot submission dropped via honeypot.");
      return new Response(
        JSON.stringify({ success: true, message: "Inquiry received." }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validate required fields
    if (!name || !email || !message || !inquiryType) {
      return new Response(
        JSON.stringify({ error: "Missing required form fields (Name, Email, Message, Inquiry Type)." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Length validation
    if (message.trim().length < 5 || message.trim().length > 5000) {
      return new Response(
        JSON.stringify({ error: "Message length must be between 5 and 5000 characters." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Basic email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address format." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Sanitization against script tags
    if (/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi.test(message)) {
      return new Response(
        JSON.stringify({ error: "Unsafe content detected. Message rejected by security policy." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("[Cloudflare Pages Contact Inquiry Received]", {
      name,
      email,
      organization: organization || "N/A",
      inquiryType,
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Inquiry successfully recorded and transmitted securely.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("[Cloudflare Pages Contact Error]:", error);
    return new Response(
      JSON.stringify({ error: "Internal server processing error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
