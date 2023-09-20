import { createClient } from '@vercel/kv';
import { KV_REST_API_URL, KV_REST_API_TOKEN, CTX_API_TOKEN } from '$env/static/private';
import { packageExtractor, slugify } from '$lib';

export async function load() {
	const allGalleriesMEI = '2KXJ8ZSA9MFDO';

	// const homeData = await getGalleryData(allGalleriesMEI, CTX_API_TOKEN);
	const homeDataAPIUrl =
		packageExtractor[0] + allGalleriesMEI + packageExtractor[1] + CTX_API_TOKEN;
	const homeDataAPIResponse = await fetch(homeDataAPIUrl);
	const homeDataJson = await homeDataAPIResponse.json();

	const slugs = {};
	const homePageGalleryData = homeDataJson.APIResponse.Content.map((item) => {
		slugs[slugify(item.Title)] = item.MediaEncryptedIdentifier;
		// {console.log(item) && return { item: allGalleriesMEI }
		return {
			title: item.Title,
			slug: slugify(item.Title),
			mei: item.MediaEncryptedIdentifier,
			iiiftype: item['CoreField.IIIFResourceType']
		};
	});
	// const meis = homePageGalleryData.map((item) => item.image);
	// console.log(homePageGalleryData);
	let outputItems;
	const inidividualGalleryCalls = await Promise.all(
		homePageGalleryData.map(async (gallery) => {
			if (gallery.iiiftype !== 'Manifest') {
				console.warn('gallery is not a manifest!');
				return true;
			}
			const galleryAPIUrl = packageExtractor[0] + gallery.mei + packageExtractor[1] + CTX_API_TOKEN;
			const galleryAPIResponse = await fetch(galleryAPIUrl);
			const galleryJson = await galleryAPIResponse.json();

			// console.log(' gallery', gallery);
			console.log(' galleryData', galleryJson);
			outputItems = {
				canvases: [],
				manifests: []
			};
			// console.log(galleryJson.Content);

			galleryJson.APIResponse.Content.map((item) => {
				if (item['CoreField.IIIFResourceType'] === 'Canvas') {
					outputItems.canvases.push(item);
				} else if (item['CoreField.IIIFResourceType'] === 'Manifest') {
					outputItems.manifests.push(item);
				}
			});

			const canvasData = await Promise.all(
				outputItems.canvases.map(async (canvas) => {
					const canvasAPIurl =
						packageExtractor[0] +
						canvas.MediaEncryptedIdentifier +
						packageExtractor[1] +
						CTX_API_TOKEN;
					const canvasAPIResponse = await fetch(canvasAPIurl);
					const canvasJson = await canvasAPIResponse.json();
					// console.log('canvasJson', canvasAPIurl);
					// const title = canvasJson.APIResponse.Representative ? canvasJson.APIResponse.Representative.Title : canvasJson.APIResponse.Title
					// const image = canvasJson.APIResponse.Representative ? canvasJson.APIResponse.Representative.Title : canvasJson.APIResponse.Title
					return {
						title: canvasJson.APIResponse.Title,
						image: canvasJson.APIResponse.MediaEncryptedIdentifier,
						width: canvasJson.APIResponse.MaxWidth,
						height: canvasJson.APIResponse.MaxHeight
					};
				})
			);

			const manifestData = await Promise.all(
				outputItems.manifests.map(async (manifest) => {
					const manifestAPIurl =
						packageExtractor[0] +
						manifest.MediaEncryptedIdentifier +
						packageExtractor[1] +
						CTX_API_TOKEN;
					const manifestAPIResponse = await fetch(manifestAPIurl);
					const manifestJson = await manifestAPIResponse.json();
					const m = manifestJson.APIResponse;
					return {
						title: m.Title,
						image: m.Representative.MediaEncryptedIdentifier,
						width: m.Representative.MaxWidth,
						height: m.Representative.MaxHeight
					};
				})
			);

			// console.log('canvasData', canvasData);
			// console.log('manifestData', manifestData);
			const returnData = {
				title: gallery.title,
				slug: slugify(gallery.title),
				mei: galleryJson.APIResponse.MediaEncryptedIdentifier,
				image: galleryJson.APIResponse.Representative.MediaEncryptedIdentifier,
				width: galleryJson.APIResponse.Representative.MaxWidth,
				height: galleryJson.APIResponse.Representative.MaxHeight,
				context: galleryJson.APIResponse['new.Context'],
				postcards: [...canvasData, ...manifestData]
			};

			return returnData;
		})
	);

	const galleryDataClient = createClient({
		url: KV_REST_API_URL,
		token: KV_REST_API_TOKEN
	});
	const allGalleries = inidividualGalleryCalls.map((gal) => ({
		title: gal.title,
		slug: gal.slug,
		mei: gal.mei,
		image: gal.image,
		width: gal.width,
		height: gal.height,
		context: gal.context
	}));
	await galleryDataClient.set(allGalleriesMEI, allGalleries);
	await Promise.all(
		inidividualGalleryCalls.map(async (gallery) => {
			await galleryDataClient.set(gallery.mei, gallery);
		})
	);
	console.log(inidividualGalleryCalls.length + 1 + ' items updated.');
	return {
		inidividualGalleryCalls: inidividualGalleryCalls,
		allGalleries: allGalleries
	};
}
