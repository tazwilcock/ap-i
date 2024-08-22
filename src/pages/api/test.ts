// src/pages/api/test.ts
import type { APIRoute } from "astro";

export const get: APIRoute = async () => {
  return new Response("Hello, this is a test route!", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
