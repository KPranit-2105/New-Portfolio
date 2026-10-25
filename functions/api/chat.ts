import { retrieveRelevantContext } from "../../src/lib/ai/retriever";
import { buildPrompt, generateLocalFallbackResponse } from "../../src/lib/ai/prompts";

interface HistoryMessage {
  role: "user" | "model";
  text: string;
}

interface Env {
  GEMINI_API_KEY?: string;
  GEMINI_MODEL?: string;
  [key: string]: any;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { request, env } = context;

  try {
    const body: any = await request.json();
    const { message, history } = body;

    // 1. Input Validation
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid question or query." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const trimmedQuery = message.trim();

    if (trimmedQuery.length > 500) {
      return new Response(
        JSON.stringify({ error: "Query is too long. Please keep your question under 500 characters." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Sanitize history
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

    const apiKey = env.GEMINI_API_KEY || (typeof process !== "undefined" && process.env?.GEMINI_API_KEY);
    const model = env.GEMINI_MODEL || (typeof process !== "undefined" && process.env?.GEMINI_MODEL) || "gemini-2.0-flash";

    let answerText = "";

    // 3. Call Google Gemini LLM if API Key is configured
    if (apiKey) {
      try {
        const promptPayload = buildPrompt(trimmedQuery, retrieval.formattedContext, validHistory);
        const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

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
              temperature: 0.2,
              maxOutputTokens: 1200,
            },
          }),
        });

        if (geminiResponse.ok) {
          const data: any = await geminiResponse.json();
          const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (candidateText && candidateText.trim().length > 0) {
            answerText = candidateText.trim();
          }
        } else {
          console.warn(
            `[Cloudflare Pages AI Assistant] Gemini returned status ${geminiResponse.status}. Falling back to deterministic grounding.`
          );
        }
      } catch (err) {
        console.error("[Cloudflare Pages AI Assistant] Gemini error:", err);
      }
    }

    // 4. Fallback to Local Deterministic Grounding
    if (!answerText) {
      answerText = generateLocalFallbackResponse(trimmedQuery, retrieval.items, validHistory);
    }

    return new Response(
      JSON.stringify({
        success: true,
        answer: answerText,
        sources: retrieval.sources,
        isLlmGenerated: Boolean(apiKey && answerText),
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("[Cloudflare Pages Chat Error]:", error);
    return new Response(
      JSON.stringify({
        error:
          "The AI assistant is temporarily unavailable. Please explore Pranit's portfolio directly or try again later.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
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
