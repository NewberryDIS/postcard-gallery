import { createClient } from '@vercel/kv';
// import { getGalleryData } from '$lib';
import {
	KV_REST_API_URL,
	KV_REST_API_TOKEN
	// CTX_API_TOKEN,
} from '$env/static/private';

export async function load() {
	const galleryDataClient = createClient({
		url: KV_REST_API_URL,
		token: KV_REST_API_TOKEN
	});
	const mei = '_all_galleries';
	const galleryData = await galleryDataClient.get(mei);
	console.log(Object.keys( galleryData.items[0] ))
	console.log(galleryData.title )
	return { galleryData };
}
