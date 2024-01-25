async function collectImageUrls(url) {
  try {
    const response = await fetch(url);
    const text = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    const imageUrls = [];
    for (const image of doc.querySelectorAll("img")) {
      if (image.src.indexOf('data') === -1 && image.src.indexOf('Logo') === -1){
        const wgetLine = "wget -O " + image.src.replace('https://collections.newberry.org/IIIF3/Image/','').replace('/full/300,/0/default','') + '"' + image.src + '"'
        imageUrls.push(wgetLine);
      }
    }

    return imageUrls;
  } catch (error) {
    console.error(`Error fetching page: ${url}`, error);
    return []; // Return an empty array on error
  }
}

// Get all links with the class "holiday" 
const links = document.querySelectorAll("a.holiday"); 
// Declare an array to store all image URLs 
const allImageUrls = [];

// Loop through each link and collect image URLs
(async function () {
for await (const link of links) {
  const url = link.href;
  const imageUrls = await collectImageUrls(url);
  allImageUrls.push(...imageUrls); // Add collected URLs to the main array
}})();

// Output the final array of image URLs
console.log(allImageUrls);
