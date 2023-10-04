import { c as create_ssr_component, e as escape, d as each, f as add_attribute } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
import { h as holidays, g as getWidth } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".horiz.svelte-9w821o.svelte-9w821o{display:flex;flex-flow:row wrap;gap:8px;margin:32px}.tile.svelte-9w821o.svelte-9w821o{position:relative;height:300px;display:inline-block;border:1px solid rgb(var(--fg-color-1))}.tile.svelte-9w821o h3.svelte-9w821o{position:absolute;left:0;bottom:0;right:0;margin:0;padding:8px;display:flex;color:rgb(var(--bg-color-1))}.tile.svelte-9w821o:not(.empty-tile) h3.svelte-9w821o{justify-content:flex-end;align-items:flex-end}.empty-tile.svelte-9w821o.svelte-9w821o{min-width:200px}.empty-tile.svelte-9w821o h3.svelte-9w821o{justify-content:center;align-items:center;top:0;text-align:center;background:rgb(var(--fg-color-2))}.nhtile.tile.svelte-9w821o:not(.empty-tile) h3.svelte-9w821o{background:rgb(var(--fg-color-1))}.htile.svelte-9w821o h3.svelte-9w821o{background:rgb(var(--park-green))}.notile.svelte-9w821o.svelte-9w821o{pointer-events:none;user-focus:none;user-select:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const galleries = data.galleryData;
  const hGalleries = galleries.filter((f) => holidays.includes(f.title));
  const nhGalleries = galleries.filter((f) => !holidays.includes(f.title));
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main><div class="left"><div class="logo" data-svelte-h="svelte-1440fk"><a href="${escape(base, true) + "/"}"><img height="60" width="300" src="${escape(base, true) + "/NewberryLogo.png"}" alt="logo of the Newberry Library"></a></div> <header><section class="title" data-svelte-h="svelte-clct05"><h1 class="">Newberry</h1> <h1 class="">Postcard</h1> <h1 class="">Gallery</h1></section> <aside class="text-content"><p class="text-lg">The vintage postcard images featured here are free to use and
                    reuse. The Newberry believes that this content is in the public
                    domain, and makes these digitized copies available without
                    requiring fees or permissions. For more information, see our${escape(" ")} <a href="https://www.newberry.org/policies#open-access" target="_blank" class="llines" data-svelte-h="svelte-u8amqq">Open Access Policy</a>
                    .</p> <p class="text-base">The Newberry houses one of the largest public collections of
                    postcards and related materials in the United States. Learn more
                    at our${escape(" ")} <a href="https://www.newberry.org/collection/subjects/postcards" target="_blank" class="llines" data-svelte-h="svelte-wb5ofy">Postcards information page</a>
                    , browse more than${escape(" ")} <a href="https://collections.newberry.org/asset-management?WS=SearchResults#/DamView&VBID=2KXJA4UET6ZH&PN=1&WS=SearchResults" target="_blank" class="llines" data-svelte-h="svelte-1b0zbn9">50,000 digitized postcards
                    </a>${escape(" ")}
                    at Newberry Digital Collections, or explore the themed sets
                    featured here.</p> <p class="text-base">The Newberry needs your help! Please assist with making our
                    postcard collections more accessible:${escape(" ")} <a href="https://www.zooniverse.org/projects/newberry/postcard-tag" target="_blank" class="llines" data-svelte-h="svelte-115l0vl">Postcard Tag</a></p> <p class="text-sm">With gratitude to the Library of Congress for its${escape(" ")} <a href="https://www.loc.gov/free-to-use/" target="_blank" class="llines" data-svelte-h="svelte-177cdf1">Free to Use and Reuse Sets</a>
                    , from which this site is inspired.</p></aside></header></div> <div class="right"><div class="horiz svelte-9w821o">${each(nhGalleries, (gallery) => {
    return `<a href="${escape(base, true) + "/" + escape(gallery.slug, true)}" class="tile nhtile svelte-9w821o"><img src="${"https://collections.newberry.org/IIIF3/Image/" + escape(gallery.galRepreImageMEI, true) + "/full/,300/0/default.jpg"}" alt="${"a " + escape(gallery.title, true) + " postcard"}"> <h3 class="svelte-9w821o">${escape(gallery.title)}</h3> </a>`;
  })} <a class="tile nhtile empty-tile svelte-9w821o" target="_blank" href="https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA4UE6RXM&PN=1" data-svelte-h="svelte-5nxuxs"><h3 class="svelte-9w821o">View even more postcards at Newberry Digital Collections</h3></a></div> <div class="horiz svelte-9w821o"><a${add_attribute("href", base, 0)} class="htile tile notile svelte-9w821o"${add_attribute("tabindex", -1, 0)} data-svelte-h="svelte-afqnxh"><img src="./madonna-holiday.gif"${add_attribute("width", getWidth(498, 373), 0)} height="300" alt="Madonna Ciccone dancing in a music video from the 1980s"></a> ${each(hGalleries, (gallery) => {
    return `<a href="${escape(base, true) + "/" + escape(gallery.slug, true)}" class="tile htile svelte-9w821o"><img src="${"https://collections.newberry.org/IIIF3/Image/" + escape(gallery.galRepreImageMEI, true) + "/full/,300/0/default.jpg"}" alt="${"a " + escape(gallery.title, true) + " postcard"}"> <h3 class="svelte-9w821o">${escape(gallery.title)}</h3> </a>`;
  })}</div></div> </main>`;
});
export {
  Page as default
};
