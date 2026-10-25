import { onRequestPost as chatPost, onRequestOptions as chatOptions } from "./functions/api/chat";
import { onRequestPost as contactPost, onRequestOptions as contactOptions } from "./functions/api/contact";

interface Env {
  ASSETS?: {
    fetch: (request: Request) => Promise<Response>;
  };
  GEMINI_API_KEY?: string;
  GEMINI_MODEL?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Route: /api/chat
    if (url.pathname === "/api/chat") {
      if (request.method === "OPTIONS") {
        return chatOptions();
      }
      if (request.method === "POST") {
        return chatPost({ request, env });
      }
      return new Response("Method Not Allowed", { status: 405 });
    }

    // Route: /api/contact
    if (url.pathname === "/api/contact") {
      if (request.method === "OPTIONS") {
        return contactOptions();
      }
      if (request.method === "POST") {
        return contactPost({ request, env });
      }
      return new Response("Method Not Allowed", { status: 405 });
    }

    // Static asset fallback via Cloudflare Workers Static Assets binding
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response("Not Found", { status: 404 });
  },
};
