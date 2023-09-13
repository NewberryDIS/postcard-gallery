// import kv from '@vercel/kv';
import { createClient } from '@vercel/kv';
import { packageExtractor, dataProcessor } from '$lib';
import { KV_REST_API_URL, KV_REST_API_TOKEN, CTX_API_TOKEN } from '$env/static/private';

const allGalleryMEI = '2KXJ8ZSA9MFDO';

export async function load() {
	const galleryDataClient = createClient({
		url: KV_REST_API_URL,
		token: KV_REST_API_TOKEN
	});
	const url = packageExtractor[0] + allGalleryMEI + packageExtractor[1] + '&token=' + CTX_API_TOKEN;
	console.log(url);
	let galleryData = null;
	// let galleryData = await galleryDataClient.get('galleryData');

	if (galleryData) console.log(galleryData);
	if (!galleryData) {
		const rawData = await fetch(url);
		const rawJson = await rawData.json();
		const processedData = await dataProcessor(rawJson);
		// const processedData = await dataProcessor(rawJson, true);
		galleryData = processedData ? processedData : [];
		await galleryDataClient.set('galleryData', processedData);
	}
	return {
		galleryData: galleryData
	};
}
