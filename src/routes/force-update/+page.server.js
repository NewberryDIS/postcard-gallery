import { createClient } from '@vercel/kv';
import { getGalleryData, slugs } from '$lib';
import { KV_REST_API_URL, KV_REST_API_TOKEN, CTX_API_TOKEN } from '$env/static/private';

export async function load() {
	const mei = '2KXJ8ZSA9MFDO';
	const galleryDataClient = createClient({
		url: KV_REST_API_URL,
		token: KV_REST_API_TOKEN
	});

	const homeData = await getGalleryData(mei, CTX_API_TOKEN);
	// await galleryDataClient.set(mei, homeData );
	const allGalleries = await Promise.all(
		homeData.items.map(async (i) => {
			// console.log(i.image);
			const itemData = await getGalleryData(i.image, CTX_API_TOKEN);
			// await galleryDataClient.set(mei, itemData)
			console.log(i.title + ' gallery updated');
			return itemData;
		})
	);

	return { allGalleries };
}
