import { json } from '@sveltejs/kit';
import { createClient } from '@vercel/kv';
import { packageExtractor, searchAPIurl, slugify } from '$lib';
import {
	CTX_API_TOKEN,
	KV_REST_API_TOKEN,
	KV_REST_API_URL,
	CTX_API_TOKEN as ctxToken
} from '$env/static/private';

const galleryDataClient = createClient({
	url: KV_REST_API_URL,
	token: KV_REST_API_TOKEN
});
/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const apiRequestMeis = url.searchParams.get('mei');
	if (!apiRequestMeis) return json({ galleryData: 'no mei provided' });
	const galleries = apiRequestMeis.split(',');
	// console.log(
	// 	'package extractor url.',
	// 	packageExtractor[0] + galleries + packageExtractor[1] + '&token=' + CTX_API_TOKEN
	// );
	// console.log(
	// 	'srch api url.',
	// 	searchAPIurl[0] + galleries + searchAPIurl[1] + '&token=' + CTX_API_TOKEN
	// );
	let galleryData = [];
	for (let index = 0; index < galleries.length; index++) {
		const manifestUrl =
			packageExtractor[0] + galleries[index] + packageExtractor[1] + '&token=' + CTX_API_TOKEN;
		const manifestAPIResponse = await fetch(manifestUrl);
		/** @type { import('$lib/types').CortexAPIResponse.fullPackageExtractorAPIResponse } */
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

		// console.log('postcardsByType', postcardsByType.canvases[0]);
		// console.log('postcardsByType', postcardsByType.manifests[0]);
		// postcardsByType.canvases.map((c) => console.log('c', c));
		// postcardsByType.manifests.map((m) => console.log('m', m));

		/** @type { import('$lib/types').Postcard[] } */
		// let canvases = [];
		const canvases = await Promise.all(
			postcardsByType.canvases.map(async (canvas) => {
				const canvasData = await fetch(
					searchAPIurl[0] + canvas + searchAPIurl[1] + '&token=' + ctxToken
				);
				// console.log('canvas', canvas);
				const canvasJson = await canvasData.json();
				// console.log('canvasJson', canvasJson);
				const c = canvasJson.APIResponse;
				return {
					title: c.Title,
					image: c.MediaEncryptedIdentifier,
					width: c.MaxWidth,
					height: c.MaxHeight
				};
			})
		);
		// if (postcardsByType.canvases.length > 0) {
		// 	const canvasIDs = postcardsByType.canvases.map((c) => c.MediaEncryptedIdentifier);
		// 	const canvasesData = await fetch(
		// 		searchAPIurl[0] + canvasIDs + searchAPIurl[1] + +'&token=' + ctxToken
		// 	);
		// 	console.log(searchAPIurl[0] + canvasIDs + searchAPIurl[1] + +'&token=' + ctxToken);
		// 	/** @type { import('$lib/types').CortexAPIResponse.SearchAPIResponse } */
		// 	const canvasesJson = await canvasesData.json();
		// 	console.log('canvasesJson', canvasesJson);
		// 	canvases = canvasesJson.Items.map((c) => ({
		// 		title: c.Title,
		// 		image: c.MediaEncryptedIdentifier,
		// 		width: c.MaxWidth,
		// 		height: c.MaxHeight
		// 	}));
		// }
		const manifests = await Promise.all(
			postcardsByType.manifests.map(
				/** @type { import('$lib/types').CortexAPIResponse.ContentAPIResponse } */
				async (manifest) => {
					const manifestAPIurl =
						packageExtractor[0] +
						manifest.MediaEncryptedIdentifier +
						packageExtractor[1] +
						ctxToken;
					const manifestAPIResponse = await fetch(manifestAPIurl);

					/** @type { import('$lib/types').CortexAPIResponse.fullPackageExtractorAPIResponse } */
					const manifestJson = await manifestAPIResponse.json();

					// console.log(manifestAPIurl + ' : ' + JSON.stringify(manifestJson, null, 4));
					const m = manifestJson.APIResponse;
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
			pageContext: manifestJson.APIResponse['new.Context'],
			postcards: [...manifests, ...canvases]
		};
		await galleryDataClient.set(gallery.pageMEI, gallery);
		galleryData.push(gallery);
	}
	return json(galleryData);
}
