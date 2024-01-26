import { createClient } from '@vercel/kv';
import { slugs } from '$lib';
import { KV_REST_API_URL, KV_REST_API_TOKEN, CTX_API_TOKEN } from '$env/static/private';


export async function load({ params }) {
	const galleryDataClient = createClient({
		url: KV_REST_API_URL,
		token: KV_REST_API_TOKEN
	});
    const allData = Promise.all(
await slugs.map(slug => {
            const datum = await galleryDataClient.get(slug)
            return datum
        })
    )
	return { allData };
}
