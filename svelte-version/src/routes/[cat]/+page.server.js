import { createClient } from '@vercel/kv';
import { slugs } from '$lib';
import { KV_REST_API_URL, KV_REST_API_TOKEN } from '$env/static/private';

export async function load({ params }) {
	const galleryDataClient = createClient({
		url: KV_REST_API_URL,
		token: KV_REST_API_TOKEN
	});
	let galleryData = await galleryDataClient.get(params.cat);
	// console.log(galleryData);
	return { galleryData };
}
