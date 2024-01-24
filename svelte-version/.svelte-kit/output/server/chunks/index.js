let slugs = ["bicycling", "chicago", "dogs", "alcohol", "reading-and-writing", "newberry", "school-days", "cats", "coffee-tea", "womens-rights", "new-year", "valentines-day", "saint-patricks-day", "easter", "fourth-of-july", "halloween", "thanksgiving", "christmas", "birthdays", "winter", "spring", "summer", "autumn"];
function getHeight(w, h) {
  return Math.round(h * 300 / w);
}
const holidays = [
  "New Year",
  "Valentine's Day",
  "Saint Patrick's Day",
  "Easter",
  "Fourth of July",
  "Halloween",
  "Thanksgiving",
  "Christmas",
  "Birthdays",
  "Winter",
  "Spring",
  "Summer",
  "Autumn"
];
function imgUrl(ctxMEI, size) {
  if (ctxMEI === "2KXJ8ZSAEHYME" && size === "thumb") {
    return `https://collections.newberry.org/IIIF3/Image/${ctxMEI}/1277,650,450,450/max/0/default.jpg`;
  }
  if (ctxMEI === "2KXJ8ZSATS8_C" && size === "thumb") {
    return `https://collections.newberry.org/IIIF3/Image/${ctxMEI}/square/300,/0/default.jpg`;
  }
  const iiifSize = size === "thumb" ? ",300" : "max";
  return `https://collections.newberry.org/IIIF3/Image/${ctxMEI}/full/${iiifSize}/0/default.jpg`;
}
const packageExtractor = [
  "https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=",
  "&PackageFields=SystemIdentifier,Title,new.Context,CoreField.IIIFResourceType,MediaEncryptedIdentifier,MaxHeight,MaxWidth,Link&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight,CoreField.IIIFResourceType&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,Link,CoreField.IIIFResourceType,MaxWidth,MaxHeight,MediaType,CoreField.Representative_Image_RecordID&format=json&token="
];
export {
  getHeight as g,
  holidays as h,
  imgUrl as i,
  packageExtractor as p,
  slugs as s
};
