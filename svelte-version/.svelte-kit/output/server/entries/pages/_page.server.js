import { createClient } from "@vercel/kv";
import { K as KV_REST_API_URL, a as KV_REST_API_TOKEN } from "../../chunks/private.js";
async function load() {
  const galleryDataClient = createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN
  });
  const galleryData = await galleryDataClient.get("_all_galleries");
  return { galleryData };
}
export {
  load
};
