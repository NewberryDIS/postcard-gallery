import { createClient } from "@vercel/kv";
import { K as KV_REST_API_URL, a as KV_REST_API_TOKEN } from "../../../chunks/private.js";
async function load({ params }) {
  const galleryDataClient = createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN
  });
  const galleryData = await galleryDataClient.get(params.cat);
  return { galleryData };
}
export {
  load
};
