import { createClient } from "@vercel/kv";
import { p as packageExtractor } from "../../../chunks/index.js";
import { K as KV_REST_API_URL, a as KV_REST_API_TOKEN, C as CTX_API_TOKEN } from "../../../chunks/private.js";
async function load({ params }) {
  const galleryDataClient = createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN
  });
  const galleryData = await galleryDataClient.get("_all_galleries");
  const imageData = await fetch(packageExtractor[0] + params.id + packageExtractor[1] + CTX_API_TOKEN).then((r) => r.json()).then((rawData) => ({
    title: rawData.APIResponse.Title,
    context: rawData.APIResponse["new.Context"],
    link: `https://collections.newberry.org/${rawData.APIResponse.Link}`,
    mei: rawData.APIResponse.MediaEncryptedIdentifier,
    image: rawData.APIResponse.MediaEncryptedIdentifier,
    imageTitle: rawData.APIResponse.Title,
    width: rawData.APIResponse.MaxWidth,
    height: rawData.APIResponse.MaxHeight
  }));
  return { imageData, galleryData };
}
export {
  load
};
