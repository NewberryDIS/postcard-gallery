import { createClient } from '@vercel/kv';
import { getGalleryData, slugs } from '$lib';
import { KV_REST_API_URL, KV_REST_API_TOKEN, CTX_API_TOKEN } from '$env/static/private';

const meiRegex = /^\w+$/

export async function load({ params }) {
	const galleryDataClient = createClient({
		url: KV_REST_API_URL,
		token: KV_REST_API_TOKEN
	});
  const  galleryData = await galleryDataClient.get(params.cat);
	return { galleryData };
}
