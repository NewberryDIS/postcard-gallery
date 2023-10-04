function getWidth(w, h) {
  return Math.round(w * 300 / h);
}
const holidays = ["Valentine's Day", "Easter", "Halloween", "Thanksgiving", "Christmas"];
function imgUrl(ctxMEI, size) {
  const iiifSize = size === "thumb" ? ",300" : "max";
  return "https://collections.newberry.org/IIIF3/Image/" + ctxMEI + "/full/" + iiifSize + "/0/default.jpg";
}
export {
  getWidth as g,
  holidays as h,
  imgUrl as i
};
