import { createClient } from '@vercel/kv';
import { slugify, getGalleryData } from '$lib';
import {
	KV_REST_API_URL,
	KV_REST_API_TOKEN,
	CTX_API_TOKEN,
} from '$env/static/private';

export async function load() {
	const galleryDataClient = createClient({
		url: KV_REST_API_URL,
		token: KV_REST_API_TOKEN
	});
	const mei = '2KXJ8ZSA9MFDO';
	const galleryData = await galleryDataClient.get("_all_galleries");
  // MANUAL UPDATE: use cortex data getter from $lib, push data to redis;
  // below I used a method where I console logged the data and copy-pasted it, since the data model isn't lining up with the individual gallery model -- or the `type` -- not sure why!
  // const galleryData = await getGalleryData(mei, CTX_API_TOKEN)
	// await galleryDataClient.set("_all_galleries", asdf);
	// const slugs = galleryData.items.map(g => g.slug)
	// await galleryDataClient.set('_slugs', slugs)
	return { galleryData };
}
