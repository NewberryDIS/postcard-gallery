export const mei = '2KXJ8ZSA9MFDO';
/**
 * @typedef {string[]} stringArray
 */

/**
 * @type {Object.<string, string>} 
 */
export let slugs = ["bicycling","chicago","dogs","alcohol","reading-and-writing","newberry","school-days","cats","coffee-tea","womens-rights","new-year","valentines-day","saint-patricks-day","easter","fourth-of-july","halloween","thanksgiving","christmas","birthdays","winter","spring","summer","autumn"]
	// christmas: '2KXJ8ZSAKDQ5P',
	// 'animated-gifs': '2KXJ8ZSAQLMR7',
	// bicycling: '2KXJ8ZSAKD58D',
	// chicago: '2KXJ8ZSAKD6V9',
	// thanksgiving: '2KXJ8ZSAKDE3I',
	// halloween: '2KXJ8ZSAKDX4O',
	// dogs: '2KXJ8ZSAKDC09',
	// alcohol: '2KXJ8ZSAKDB98',
	// 'reading-and-writing': '2KXJ8ZSAKD0AX',
	// newberry: '2KXJ8ZSAKDPK2',
	// easter: '2KXJ8ZSAKDKDK',
	// 'valentines-day': '2KXJ8ZSAKDJCR',
	// 'school-days': '2KXJ8ZSAKDMYB',
	// cats: '2KXJ8ZSAKDD11',
	// 'coffee-tea': '2KXJ8ZSAKDRBQ',
	// 'womens-rights': '2KXJ8ZSA9MW04'
// };

/**
 * @function
 * @param {string} title - the title of a gallery which will become its slug
 */
export function slugify(title) {
	// console.log(title);
	return title
		.normalize('NFKD')
		.replace("'", '')
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
export function getHeight(w, h) {
	// w:h::x:400
	return Math.round((h * 300) / w);
}
// export function getWidth(w, h) {
// 	// w:h::x:400
// 	return Math.round((w * 400) / h);
// }
/*
 * The order of holidays here is the display order
 *
 * @type {stringArray}
 */
export const holidays = [
	'New Year',
	"Valentine's Day",
	"Saint Patrick's Day",
	'Easter',
	'Fourth of July',
	'Halloween',
	'Thanksgiving',
	'Christmas',
	'Birthdays',
	'Winter',
	'Spring',
	'Summer',
	'Autumn'
];
/**
 * @function
 * @param { string } ctxMEI
 * @param { string } [ size ]
 */
export function imgUrl(ctxMEI, size) {
  let iiifSize
  switch(size) {
    case 'large':
      iiifSize = 'full/,800'
      break;
    case 'thumb' && ctxMEI === '2KXJ8ZSAEHYME':
      iiifSize = '1277,650,450,450/300,';
      break;
    case 'thumb' && ctxMEI === '2KXJ8ZSATS8_C':
      iiifSize = 'square/300,'
      break;
    case 'thumb':
      iiifSize = 'full/300,'
      break;
    default: 
      iiifSize = 'full/max'
      break;
}
	return `https://collections.newberry.org/IIIF3/Image/${ctxMEI}/${iiifSize}/0/default.jpg`;
}

/**
 * @type {stringArray}
 */
export const packageExtractor = [
	'https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=',
	'&PackageFields=SystemIdentifier,Title,new.Context,CoreField.IIIFResourceType,MediaEncryptedIdentifier,MaxHeight,MaxWidth,Link&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight,CoreField.IIIFResourceType&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,Link,CoreField.IIIFResourceType,MaxWidth,MaxHeight,MediaType,CoreField.Representative_Image_RecordID&format=json&token='
];
export const imageAPIUrl = [
	'https://collections.newberry.org/API/search/v3.0/search?query=Text:',
	'&fields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight,CoreField.IIIFResourceType&format=json&token='
];
export const searchAPIurl = [
	'https://collections.newberry.org/API/search/v3.0/search?query=Parentfolderidentifier:',
	'&fields=SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.Representative_Image_RecordID,CoreField.IIIFResourceType,new.Context,MaxWidth,MaxHeight&format=json',
	'NL11L0NX'
];
/**
 * Cortex data getter, used for home page / gallery of galleries
 * This can definitely be improved but I'm waiting ~~for godot~~ until the API is fixed
 * @param {string} mei - MediaEncryptedIdentifier for gallery
 * @param {string} token - cortex api token
 */
export async function getAllData(mei, token) {
	const topLevelUrl = packageExtractor[0] + mei + packageExtractor[1] + token;
	// console.log('top level url', topLevelUrl);

	const topLevelJson = await fetch(topLevelUrl).then(r => r.json());

	if (!topLevelJson.APIResponse.Content) {
		console.log('url;', topLevelUrl);
		console.log('topLevelJson.APIResponse', topLevelJson.APIResponse);
	}

	const manifests = await Promise.all(
		topLevelJson.APIResponse.Content.filter(
			/** @param {import('$lib/types').APIData.APIManifestResponse} f - item level data as received from the top level response */
			(f) => f['CoreField.IIIFResourceType'] === 'Manifest'
		).map(
			/** @param {import('$lib/types').APIData.ContentItem} topLevelItem - item level data as received from the top level response */
			async (topLevelItem) => {
				// console.log('topLevelItem', topLevelItem);
				const itemLevelUrl =
					packageExtractor[0] + topLevelItem.MediaEncryptedIdentifier + packageExtractor[1] + token;
				let itemLevelJson = await fetch(itemLevelUrl).then( i => i.json())
				// let itemLevelRawData = await fetch(itemLevelUrl).then( i => i.json())
				// let itemLevelJson = await itemLevelRawData.json();
				return {
					title: itemLevelJson.APIResponse.Title,
					slug: slugify(itemLevelJson.APIResponse.Title),
					image: itemLevelJson.APIResponse.Representative.MediaEncryptedIdentifier,
					imageTitle: itemLevelJson.APIResponse.Representative.Title,
					width: itemLevelJson.APIResponse.Representative.MaxWidth,
					height: itemLevelJson.APIResponse.Representative.MaxHeight
				};
			}
		)
	);

	// const canvases = [];
	const canvases = await Promise.all(
		topLevelJson.APIResponse.Content.filter(
			/** @param {import('$lib/types').APIData.APICanvasResponse} f - item level data as received from the top level response */
			(f) => {
				return f['CoreField.IIIFResourceType'] === 'Canvas';
			}
		).map(
			/** @param {import('$lib/types').APIData.ContentItem} topLevelCanvas - item level data as received from the top level response */
			async (topLevelCanvas) => {
				const itemLevelJsonUrl =
					imageAPIUrl[0] + topLevelCanvas.SystemIdentifier + imageAPIUrl[1] + token;
				let itemLevelRawData = await fetch(itemLevelJsonUrl);
				let itemLevelJson = await itemLevelRawData.json();

				return {
					title: itemLevelJson.APIResponse.Items[0].Title,
					slug: slugify(itemLevelJson.APIResponse.Items[0].Title),
					image: itemLevelJson.APIResponse.Items[0].MediaEncryptedIdentifier,
					imageTitle: itemLevelJson.APIResponse.Items[0].Title,
					width: itemLevelJson.APIResponse.Items[0].MaxWidth,
					height: itemLevelJson.APIResponse.Items[0].MaxHeight
				};
			}
		)
	);

	const galleryData = {
		title: topLevelJson.APIResponse.Title,
		context: topLevelJson.APIResponse["new.Context"],
		mei: topLevelJson.APIResponse.MediaEncryptedIdentifier,
		image: topLevelJson.APIResponse.Representative.MediaEncryptedIdentifier,
		imageTitle: topLevelJson.APIResponse.Representative.Title,
		width: topLevelJson.APIResponse.Representative.MaxWidth,
		height: topLevelJson.APIResponse.Representative.MaxHeight,
		items: [...manifests, ...canvases]
	};
	return galleryData;
}
