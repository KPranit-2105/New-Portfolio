import { NextResponse } from "next/server";
import { retrieveRelevantContext } from "@/lib/ai/retriever";
import { buildPrompt, generateLocalFallbackResponse } from "@/lib/ai/prompts";

export const runtime = "edge";

interface HistoryMessage {
  role: "user" | "model";
  text: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, history } = body;

    // 1. Input Validation
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Please provide a valid question or query." },
        { status: 400 }
      );
    }

    const trimmedQuery = message.trim();

    // Cap query length to prevent token abuse
    if (trimmedQuery.length > 500) {
      return NextResponse.json(
        { error: "Query is too long. Please keep your question under 500 characters." },
        { status: 400 }
      );
    }

    // Sanitize history format
    const validHistory: HistoryMessage[] = Array.isArray(history)
      ? history
          .filter(
            (h: any) =>
              h &&
              typeof h.text === "string" &&
              (h.role === "user" || h.role === "model")
          )
          .slice(-6)
      : [];

    // 2. Structured Retrieval of Verified Portfolio Context
    const retrieval = retrieveRelevantContext(trimmedQuery);

    const apiKey = process.env.GEMINI_API_KEY;
    const model = process.env.GEMINI_MODEL || "gemini-2.0-flash";

    let answerText = "";

    // 3. Call Google Gemini LLM if API Key is configured
    if (apiKey) {
      try {
        const promptPayload = buildPrompt(trimmedQuery, retrieval.formattedContext, validHistory);

        const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

        // Build multi-turn contents payload
        const contents: any[] = [];
        for (const h of validHistory) {
          contents.push({
            role: h.role,
            parts: [{ text: h.text }],
          });
        }
        contents.push({
          role: "user",
          parts: [{ text: promptPayload }],
        });

        const geminiResponse = await fetch(geminiEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents,
            generationConfig: {
              temperature: 0.2, // Low temperature for high factual accuracy
              maxOutputTokens: 1200,
            },
          }),
        });

        if (geminiResponse.ok) {
          const data = await geminiResponse.json();
          const candidateText =
            data?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (candidateText && candidateText.trim().length > 0) {
            answerText = candidateText.trim();
          }
        } else {
          console.warn(
            `[AI Assistant] Gemini API returned status ${geminiResponse.status}. Falling back to deterministic grounding.`
          );
        }
      } catch (err) {
        console.error("[AI Assistant] Gemini call error:", err);
      }
    }

    // 4. Fallback to Local Deterministic Grounding if LLM response unavailable
    if (!answerText) {
      answerText = generateLocalFallbackResponse(trimmedQuery, retrieval.items, validHistory);
    }

    // 5. Return Grounded Response with Sources
    return NextResponse.json({
      success: true,
      answer: answerText,
      sources: retrieval.sources,
      isLlmGenerated: Boolean(apiKey && answerText),
    });
  } catch (error) {
    console.error("[AI Assistant API Error]:", error);
    return NextResponse.json(
      {
        error:
          "The AI assistant is temporarily unavailable. Please explore Pranit's portfolio directly or try again later.",
      },
      { status: 500 }
    );
  }
}
