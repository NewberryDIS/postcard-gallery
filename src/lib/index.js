/**
 * @typedef {string[]} stringArray
 */

/**
 * @type {stringArray}
 */
export const packageExtractor = [
  "https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=",
  "&PackageFields=SystemIdentifier,Title,new.Context&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType&format=json",
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
  return (w * 300) / h;
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
 * @param {import('$lib/types').APIData.CortexAPIData} rawJson - the base response from Cortex from the call to the top level gallery folder
 * @param {boolean} logpls - shorthand to enable logging
 */
export async function dataProcessor(rawJson, logpls = false) {
  // console.log('logpls', logpls);
  if (!rawJson) {
    return ["no data"];
  }
  let rawConstituentData = await Promise.all(
    rawJson.APIResponse.Content.map(
      /** @param {import('$lib/types').APIData.ContentItem} galleryTopLevelData */
      async (galleryTopLevelData) => {
        let rawGalleryData = await fetch(
          packageExtractor[0] +
            galleryTopLevelData.MediaEncryptedIdentifier +
            packageExtractor[1]
        );
        let rawGalleryJson = await rawGalleryData.json();
        return rawGalleryJson;
      }
    )
  );

  if (logpls) console.log("rawJson", rawJson);
  if (logpls) console.log("rawConstituentData", rawConstituentData);

  const processedData = {
    title: rawJson.APIResponse.Title,
    image: rawJson.APIResponse.Representative.MediaEncryptedIdentifier,
    imageTitle: rawJson.APIResponse.Representative.Title,
    width: rawJson.APIResponse.Representative.MaxWidth,
    height: rawJson.APIResponse.Representative.MaxHeight,
    items: rawConstituentData
      .filter(
        (f) =>
          "APIResponse" in f &&
          "Title" in f.APIResponse &&
          "Representative" in f.APIResponse &&
          "MediaEncryptedIdentifier" in f.APIResponse.Representative
      )
      // .map((item) => ({
      //   title: item.APIResponse.Title,
      //   slug: slugify(item.APIResponse.Title),
      //   image: item.APIResponse.Representative.MediaEncryptedIdentifier,
      //   imageTitle: item.APIResponse.Representative.Title,
      //   width: item.APIResponse.Representative.MaxWidth,
      //   height: item.APIResponse.Representative.MaxHeight,
      //   postcards: [],
      // })),
      .map((item) => {
        console.log(item);
        return {
          title: item.APIResponse.Title,
          slug: slugify(item.APIResponse.Title),
          image: item.APIResponse.Representative.MediaEncryptedIdentifier,
          imageTitle: item.APIResponse.Representative.Title,
          width: item.APIResponse.Representative.MaxWidth,
          height: item.APIResponse.Representative.MaxHeight,
          postcards: [],
        };
      }),
  };
  if (logpls) console.log(processedData);
  return processedData;
}
