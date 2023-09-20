import { createClient } from '@vercel/kv';
import { KV_REST_API_URL, KV_REST_API_TOKEN, CTX_API_TOKEN } from '$env/static/private';
import { searchAPIurl, slugify } from '$lib';

const galleryDataClient = createClient({
	url: KV_REST_API_URL,
	token: KV_REST_API_TOKEN
});

export async function load() {
	const allGalleriesMEI = '2KXJ8ZSA9MFDO';

	const homeDataAPIUrl =
		searchAPIurl[0] + searchAPIurl[2] + searchAPIurl[1] + '&token=' + CTX_API_TOKEN;
	console.log(homeDataAPIUrl);
	const homeDataAPIResponse = await fetch(homeDataAPIUrl);
	const homeDataJson = await homeDataAPIResponse.json();

	// console.log(homeDataJson);
	const slugs = {};
	const homePageGalleryData = homeDataJson.APIResponse.Items.map(
		/** @type { import('$lib/types').APIData.APIManifestResponse } */
		(item) => {
			slugs[slugify(item.Title)] = item.MediaEncryptedIdentifier;
			/** @type { import('$lib/types').allGalleries } **/
			return {
				sysid: item.SystemIdentifier,
				title: item.Title,
				slug: slugify(item.Title),
				imageMEI: item['CoreField.Representative_Image_RecordID'],
				mei: item.MediaEncryptedIdentifier,
				// width: item.MaxWidth,
				// height: item.MaxHeight,
				iiiftype: item['CoreField.IIIFResourceType']
			};
		}
	);
	// console.log(homePageGalleryData);
	// await galleryDataClient.set(allGalleriesMEI, homePageGalleryData);
	return { allGalleries: homePageGalleryData };
}
// 	// const meis = homePageGalleryData.map((item) => item.image);
// 	// console.log(homePageGalleryData);
// 	let outputItems;
// 	const inidividualGalleryCalls = await Promise.all(
// 		homePageGalleryData.map(async (gallery) => {
// 			if (gallery.iiiftype !== 'Manifest') {
// 				console.warn('gallery is not a manifest!');
// 				return true;
// 			}
// 			const galleryAPIUrl = searchAPIurl[0] + gallery.mei + searchAPIurl[1] + CTX_API_TOKEN;
// 			const galleryAPIResponse = await fetch(galleryAPIUrl);
// 			const galleryJson = await galleryAPIResponse.json();
//
// 			// console.log(' gallery', gallery);
// 			console.log(' galleryData', galleryJson);
// 			outputItems = {
// 				canvases: [],
// 				manifests: []
// 			};
// 			// console.log(galleryJson.Content);
//
// 			galleryJson.APIResponse.Content.map((item) => {
// 				if (item['CoreField.IIIFResourceType'] === 'Canvas') {
// 					outputItems.canvases.push(item);
// 				} else if (item['CoreField.IIIFResourceType'] === 'Manifest') {
// 					outputItems.manifests.push(item);
// 				}
// 			});
//
// 			const canvasData = await Promise.all(
// 				outputItems.canvases.map(async (canvas) => {
// 					const canvasAPIurl =
// 						searchAPIurl[0] +
// 						canvas.MediaEncryptedIdentifier +
// 						searchAPIurl[1] +
// 						CTX_API_TOKEN;
// 					const canvasAPIResponse = await fetch(canvasAPIurl);
// 					const canvasJson = await canvasAPIResponse.json();
// 					// console.log('canvasJson', canvasAPIurl);
// 					// const title = canvasJson.APIResponse.Representative ? canvasJson.APIResponse.Representative.Title : canvasJson.APIResponse.Title
// 					// const image = canvasJson.APIResponse.Representative ? canvasJson.APIResponse.Representative.Title : canvasJson.APIResponse.Title
// 					return {
// 						title: canvasJson.APIResponse.Title,
// 						image: canvasJson.APIResponse.MediaEncryptedIdentifier,
// 						width: canvasJson.APIResponse.MaxWidth,
// 						height: canvasJson.APIResponse.MaxHeight
// 					};
// 				})
// 			);
//
// 			const manifestData = await Promise.all(
// 				outputItems.manifests.map(async (manifest) => {
// 					const manifestAPIurl =
// 						searchAPIurl[0] +
// 						manifest.MediaEncryptedIdentifier +
// 						searchAPIurl[1] +
// 						CTX_API_TOKEN;
// 					const manifestAPIResponse = await fetch(manifestAPIurl);
// 					const manifestJson = await manifestAPIResponse.json();
// 					const m = manifestJson.APIResponse;
// 					return {
// 						title: m.Title,
// 						image: m.Representative.MediaEncryptedIdentifier,
// 						width: m.Representative.MaxWidth,
// 						height: m.Representative.MaxHeight
// 					};
// 				})
// 			);
//
// 			// console.log('canvasData', canvasData);
// 			// console.log('manifestData', manifestData);
// 			const returnData = {
// 				title: gallery.title,
// 				slug: slugify(gallery.title),
// 				mei: galleryJson.APIResponse.MediaEncryptedIdentifier,
// 				image: galleryJson.APIResponse.Representative.MediaEncryptedIdentifier,
// 				width: galleryJson.APIResponse.Representative.MaxWidth,
// 				height: galleryJson.APIResponse.Representative.MaxHeight,
// 				context: galleryJson.APIResponse['new.Context'],
// 				postcards: [...canvasData, ...manifestData]
// 			};
//
// 			return returnData;
// 		})
// 	);
//
// 	const galleryDataClient = createClient({
// 		url: KV_REST_API_URL,
// 		token: KV_REST_API_TOKEN
// 	});
// 	const allGalleries = inidividualGalleryCalls.map((gal) => ({
// 		title: gal.title,
// 		slug: gal.slug,
// 		mei: gal.mei,
// 		image: gal.image,
// 		width: gal.width,
// 		height: gal.height,
// 		context: gal.context
// 	}));
// 	await galleryDataClient.set(allGalleriesMEI, allGalleries);
// 	await Promise.all(
// 		inidividualGalleryCalls.map(async (gallery) => {
// 			await galleryDataClient.set(gallery.mei, gallery);
// 		})
// 	);
// 	console.log(inidividualGalleryCalls.length + 1 + ' items updated.');
// 	return {
// 		inidividualGalleryCalls: inidividualGalleryCalls,
// 		allGalleries: allGalleries
// 	};
// }
