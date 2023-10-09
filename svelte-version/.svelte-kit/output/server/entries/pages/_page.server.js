import { createClient } from "@vercel/kv";
import { K as KV_REST_API_URL, a as KV_REST_API_TOKEN } from "../../chunks/private.js";
async function load() {
  const galleryDataClient = createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN
  });
  const mei = "2KXJ8ZSA9MFDO";
  const galleryData = await galleryDataClient.get(mei);
  return { galleryData };
}
export {
  load
};
