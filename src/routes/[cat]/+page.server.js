import { createClient } from "@vercel/kv";
import { packageExtractor, dataProcessor, slugs, slugify } from "$lib";
import {
  KV_REST_API_URL,
  KV_REST_API_TOKEN,
  CTX_API_TOKEN,
} from "$env/static/private";

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ params }) {
  const mei = slugs[params.cat];
  console.log("mei", mei);
  const galleryDataClient = createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN,
  });
  // let galleryData = null;
  let galleryData = await galleryDataClient.get("galleryData");
  console.log(galleryData);
  galleryData = await galleryData.items
    .filter(
      /** @param {import('$lib/types').Gallery} f */
      (f) => slugify(f.pageTitle) === params.cat
    )
    .pop();
  if (galleryData) console.log("galleryData", galleryData);
  if (!galleryData) {
    const url =
      packageExtractor[0] +
      mei +
      packageExtractor[1] +
      "&token=" +
      CTX_API_TOKEN;
    console.log("url", url);
    const rawData = await fetch(url);
    const rawJson = await rawData.json();
    const processedData = await dataProcessor(rawJson);
    // const processedData = await dataProcessor(rawJson, true);
    galleryData = processedData ? processedData : [];
    await galleryDataClient.set("galleryData", processedData);
  }
  return {
    galleryData: galleryData,
  };
}
