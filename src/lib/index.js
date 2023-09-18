/**
 * @typedef {string[]} stringArray
 */

// import { CTX_API_TOKEN } from "$env/static/private";

/**
 * @type {stringArray}
 */
export const packageExtractor = [
  "https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=",
  "&PackageFields=SystemIdentifier,Title,new.Context&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title&format=json&token=",
];

/**
 * @type {Object.<string, string>} - DEV USE ONLY!  DON'T BE LAZY!  NO PROD!
 */
export let slugs = {
  christmas: "2KXJ8ZSAKDQ5P",
  "animated-gifs": "2KXJ8ZSAQLMR7",
  bicycling: "2KXJ8ZSAKD58D",
  chicago: "2KXJ8ZSAKD6V9",
  thanksgiving: "2KXJ8ZSAKDE3I",
  halloween: "2KXJ8ZSAKDX4O",
  dogs: "2KXJ8ZSAKDC09",
  alcohol: "2KXJ8ZSAKDB98",
  "reading-and-writing": "2KXJ8ZSAKD0AX",
  newberry: "2KXJ8ZSAKDPK2",
  easter: "2KXJ8ZSAKDKDK",
  "valentines-day": "2KXJ8ZSAKDJCR",
  "school-days": "2KXJ8ZSAKDMYB",
  cats: "2KXJ8ZSAKDD11",
  "coffee-tea": "2KXJ8ZSAKDRBQ",
  "womens-rights": "2KXJ8ZSA9MW04",
};

/**
 * @function
 * @param {string} title - the title of a gallery which will become its slug
 */
export function slugify(title) {
  return title
    .normalize("NFKD")
    .replace("'", "")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * @function
 * @param {number} w - width and height of image
 * @param {number} h
 * */
export function getWidth(w, h) {
  // w:h::x:300
  return Math.round((w * 300) / h);
}
/**
 * @type {stringArray}
 */
export const holidays = [
  "Valentine's Day",
  "Easter",
  "Halloween",
  "Thanksgiving",
  "Christmas",
];
/**
 * @function
 * @param { string } ctxMEI
 * @param { string } [ size ]
 */
export function imgUrl(ctxMEI, size) {
  const iiifSize = size === "thumb" ? ",300" : "max";
  return (
    "https://collections.newberry.org/IIIF3/Image/" +
    ctxMEI +
    "/full/" +
    iiifSize +
    "/0/default.jpg"
  );
}

/*
 * @function
 * @param {string} mei - MediaEncryptedIdentifier for gallery
 * @param {string} token - cortex api token
 */
export async function getGalleryData(mei, token) {
  const topLevelUrl = packageExtractor[0] + mei + packageExtractor[1] + token;
  // console.log("top level url", topLevelUrl);

  const topLevelRawData = await fetch(topLevelUrl);
  const topLevelJson = await topLevelRawData.json();
  console.log(topLevelJson.APIResponse.Content[0].MediaEncryptedIdentifier);
  const itemRawData = await Promise.all(
    topLevelJson.APIResponse.Content.filter(
      (f) => !!f.MediaEncryptedIdentifier
    ).map(
      /** @param {import('$lib/types').APIData.ContentItem} topLevelItem - item level data as received from the top level response */
      async (topLevelItem) => {
        console.log(topLevelItem.MediaEncryptedIdentifier);
        const itemLevelUrl =
          packageExtractor[0] +
          topLevelItem.MediaEncryptedIdentifier +
          packageExtractor[1] +
          token;
        // console.log("item url", itemLevelUrl);
        let itemLevelRawData = await fetch(itemLevelUrl);
        let itemLevelJson = await itemLevelRawData.json();
        return itemLevelJson;
      }
    )
  );
  const galleryData = {
    title: topLevelJson.APIResponse.Title,
    context: topLevelJson.APIResponse["new.Context"],
    image: topLevelJson.APIResponse.Representative.MediaEncryptedIdentifier,
    imageTitle: topLevelJson.APIResponse.Representative.Title,
    width: topLevelJson.APIResponse.Representative.MaxWidth,
    height: topLevelJson.APIResponse.Representative.MaxHeight,
    items: itemRawData.map((item) => ({
      title: item.APIResponse.Title,
      slug: slugify(item.APIResponse.Title),
      image: item.APIResponse.Representative.MediaEncryptedIdentifier,
      imageTitle: item.APIResponse.Representative.Title,
      width: item.APIResponse.Representative.MaxWidth,
      height: item.APIResponse.Representative.MaxHeight,
    })),
  };
  return galleryData;
}
