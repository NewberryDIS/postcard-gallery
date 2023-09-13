import kv from '@vercel/kv';
import { packageExtractor, dataProcessor } from '$lib';
/** @type {import('./$types').PageLoad} */

const allGalleryMEI = '2KXJ8ZSA9MFDO';

export async function load() {
	const url = packageExtractor[0] + allGalleryMEI + packageExtractor[1];
	let galleryData = await kv.get('galleryData');
	if (!galleryData) {
		const rawData = await fetch(url);
		const rawJson = await rawData.json();
		const processedData = await dataProcessor(rawJson, true);
		galleryData = processedData ? processedData : [];
		await kv.set('galleryData', processedData);
	}
	return {
		galleryData: galleryData
	};
}
