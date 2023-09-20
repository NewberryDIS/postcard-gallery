import { json } from '@sveltejs/kit';
import { createClient } from '@vercel/kv';
import { searchAPIurl, slugify } from '$lib';
import { KV_REST_API_TOKEN, KV_REST_API_URL, CTX_API_TOKEN as ctxToken } from '$env/static/private';

const galleryDataClient = createClient({
	url: KV_REST_API_URL,
	token: KV_REST_API_TOKEN
});
/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const apiRequestMeis = url.searchParams.get('mei');
	if (!apiRequestMeis) return json({ galleryData: 'no mei provided' });
	const galleries = apiRequestMeis.split(',');

	let galleryData = [];
	for (let index = 0; index < galleries.length; index++) {
		const manifestUrl = searchAPIurl[0] + galleries[index] + searchAPIurl[1] + ctxToken;
		const manifestAPIResponse = await fetch(manifestUrl);
		/** @type { import('$lib/types').APIData.CortexManifestData } */
		const manifestJson = await manifestAPIResponse.json();
		// console.log('manifestJson.APIResponse', manifestJson.APIResponse);
		const postcardsByType = {
			canvases: manifestJson.APIResponse.Content.filter(
				(f) => f['CoreField.IIIFResourceType'] === 'Canvas'
			),
			manifests: manifestJson.APIResponse.Content.filter(
				(f) => f['CoreField.IIIFResourceType'] === 'Manifest'
			)
		};

		// postcardsByType.canvases.map((c) => console.log('c', c));
		// postcardsByType.manifests.map((m) => console.log('m', m));
		const canvases = await Promise.all(
			postcardsByType.canvases.map(
				/** @type { import('$lib/types').APIData.CortexCanvasData } */
				async (canvas) => {
					const canvasAPIurl =
						searchAPIurl[0] + canvas.SystemIdentifier + searchAPIurl[1] + '&token=' + ctxToken;
					const canvasAPIResponse = await fetch(canvasAPIurl);
					const canvasJson = await canvasAPIResponse.json();

					// console.log('canvasJson', canvasJson);
					/** @type { import('$lib/types').APIData.APICanvasResponse } */
					const c = canvasJson.APIResponse;
					/** @type { import('$lib/types').Postcard } */
					return {
						title: c.Title,
						image: c.MediaEncryptedIdentifier,
						width: c.MaxWidth,
						height: c.MaxHeight
					};
				}
			)
		);
		const manifests = await Promise.all(
			postcardsByType.manifests.map(
				/** @type { import('$lib/types').APIData.CortexManifestData } */
				async (manifest) => {
					const manifestAPIurl =
						searchAPIurl[0] + manifest.MediaEncryptedIdentifier + searchAPIurl[1] + ctxToken;
					console.log();
					const manifestAPIResponse = await fetch(manifestAPIurl);
					const manifestJson = await manifestAPIResponse.json();

					// console.log(manifestAPIurl + ' : ' + JSON.stringify(manifestJson, null, 4));
					/** @type { import('$lib/types').APIData.APIManifestResponse } */
					const m = manifestJson.APIResponse;
					/** @type { import('$lib/types').Postcard } */
					return {
						title: m.Title,
						image: m.Representative.MediaEncryptedIdentifier,
						width: m.Representative.MaxWidth,
						height: m.Representative.MaxHeight
					};
					// console.log('gallery.postcards length before push: ', gallery.postcards.length);
					// console.log('gallery.postcards length after push: ', gallery.postcards.length);
				}
			)
		);
		/** @type { import('$lib/types').Gallery } */
		const gallery = {
			pageMEI: manifestJson.APIResponse.MediaEncryptedIdentifier,
			pageTitle: manifestJson.APIResponse.Title,
			pageSlug: slugify(manifestJson.APIResponse.Title),
			pagaeContext: manifestJson.APIResponse['new.Context'],
			postcards: [...manifests, ...canvases]
		};
		await galleryDataClient.set(gallery.pageMEI, gallery);
		galleryData.push(gallery);
	}
	return json(galleryData);
}
