// place files you want to import through the `$lib` alias in this folder.
//
/**
 * @typedef {import('$lib/APIData').APIData} CortexAPIData
 */

/**
 * @typedef {string[]} stringArray
 */

/**
 * @type {stringArray}
 */
export const packageExtractor = [
	'https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=',
	'&PackageFields=SystemIdentifier,Title,new.Context&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType&format=json'
];

/**
 * @function
 * @param {string} title - the title of a gallery which will become its slug
 */
export function slugify(title) {
	return title
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9 -]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');
}

/**
 * @function
 * @param {number} w - width and height of image
 * @param {number} h
 * */
export function getWidth(w, h) {
	// w:h::x:300
	return (w * 300) / h;
}
/**
 * @type {stringArray}
 */
export const holidays = ["Valentine's Day", 'Easter', 'Halloween', 'Thanksgiving', 'Christmas'];

/**
 * @function
 * @param {CortexAPIData} rawJson - the base response from Cortex from the call to the top level gallery folder
 * @param {boolean} logpls - shorthand to enable logging
 */
export async function dataProcessor(rawJson, logpls = false) {
	// console.log('logpls', logpls);
	if (!rawJson) {
		return ['no dat'];
	}
	let rawConstituentData = await Promise.all(
		rawJson.APIResponse.Content.map(async (galleryTopLevelData) => {
			let rawGalleryData = await fetch(
				packageExtractor[0] + galleryTopLevelData.MediaEncryptedIdentifier + packageExtractor[1]
			);
			let rawGalleryJson = await rawGalleryData.json();
			return rawGalleryJson;
		})
	);

	if (logpls) console.log('rawJson', rawJson);
	if (logpls) console.log('rawConstituentData', rawConstituentData);

	const processedData = {
		title: rawJson.APIResponse.Title,

		image: rawJson.APIResponse.Representative.MediaEncryptedIdentifier,
		imageTitle: rawJson.APIResponse.Representative.Title,
		width: rawJson.APIResponse.Representative.MaxWidth,
		height: rawJson.APIResponse.Representative.MaxHeight,
		items: rawConstituentData
			.filter(
				(f) =>
					'APIResponse' in f &&
					'Title' in f.APIResponse &&
					'Representative' in f.APIResponse &&
					'MediaEncryptedIdentifier' in f.APIResponse.Representative
			)
			.map((item) => ({
				title: item.APIResponse.Title,
				image: item.APIResponse.Representative.MediaEncryptedIdentifier,
				imageTitle: item.APIResponse.Representative.Title,
				width: item.APIResponse.Representative.MaxWidth,
				height: item.APIResponse.Representative.MaxHeight
			}))
	};
	if (logpls) console.log(processedData);
	return processedData;
}
