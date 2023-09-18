import { createClient } from "@vercel/kv";
import { getGalleryData, slugs } from "$lib";
import {
  KV_REST_API_URL,
  KV_REST_API_TOKEN,
  CTX_API_TOKEN,
} from "$env/static/private";

export async function load({ params }) {
  const mei = slugs[params.cat];
  const galleryDataClient = createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN,
  });
  const forceUpdateData = await getGalleryData(mei, CTX_API_TOKEN);
  await galleryDataClient.set(mei, forceUpdateData);
  let galleryData;
  const redisGalleryData = await galleryDataClient.get(mei);
  if (!redisGalleryData) {
    console.log(
      "data not obtained from redis for " + params.cat + " mei : " + mei
    );
    galleryData = await getGalleryData(mei, CTX_API_TOKEN);
    await galleryDataClient.set(mei, galleryData);
  } else {
    console.log("data obtained from redis for " + params.cat + " mei : " + mei);
    galleryData = redisGalleryData;
    const refreshedData = await getGalleryData(mei, CTX_API_TOKEN);
    await galleryDataClient.set(mei, refreshedData);
  }

  return { galleryData };
}
