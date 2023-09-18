import { createClient } from "@vercel/kv";
import { getGalleryData } from "$lib";
import {
  KV_REST_API_URL,
  KV_REST_API_TOKEN,
  CTX_API_TOKEN,
} from "$env/static/private";

export async function load() {
  const galleryDataClient = createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN,
  });
  const mei = "2KXJ8ZSA9MFDO";
  const galleryData =
    (await galleryDataClient.get(mei)) ||
    (await getGalleryData(mei, CTX_API_TOKEN));
  // const galleryData = await getGalleryData("2KXJ8ZSA9MFDO", CTX_API_TOKEN);
  await galleryDataClient.set(mei, galleryData);
  return { galleryData };
}
