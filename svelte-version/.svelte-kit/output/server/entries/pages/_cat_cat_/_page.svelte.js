import { c as create_ssr_component, e as escape, v as validate_component, d as each, f as add_attribute, h as null_to_empty } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
import { S as Secret_header, M as Masonry } from "../../../chunks/masonry.js";
import { F as Footer } from "../../../chunks/footer.js";
import { i as imgUrl } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".share-btnz.svelte-16kql8i{position:fixed;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;z-index:10000}.right.svelte-16kql8i{position:relative}.noimg.svelte-16kql8i{max-width:300px;max-height:400px}.tile.svelte-16kql8i{border:0;margin:0;padding:0;min-height:200px;width:300px;display:inline-block;background-image:url('/spinner.svg');background-position:center;background-repeat:no-repeat}.sansie{font-family:'styrene';text-decoration:underline}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const noimg = {
    title: `View even more ${data.galleryData.context} at Newberry Digital Collections`,
    link: data.galleryData.galLink,
    pixel: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
    galRepreImageWidth: 300,
    galRepreImageHeight: 400
  };
  const postcards = [...data.galleryData.postcards.sort(() => Math.random() - 0.5), noimg];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ibxeh0_START -->${$$result.title = `<title>Newberry Library - ${escape(data.galleryData.context)}</title>`, ""}<!-- HEAD_svelte-ibxeh0_END -->`, ""} <main class="main">${validate_component(Secret_header, "SecretHeader").$$render($$result, { title: data.galleryData.context }, {}, {})} <div class="left"><div class="logo" data-svelte-h="svelte-1ijknou"><a href="${escape(base, true) + "/"}"><img class="biggo" src="${escape(base, true) + "/NewberryLogo.png"}" alt="Logo for the Newberry Library" height="60" width="300"> <img class="smallo" src="${escape(base, true) + "/NLogo.png"}" alt="Logo for the Newberry Library" height="60" width="60"></a></div> <header class="header"><section><h3 data-svelte-h="svelte-i0mqc1">Free to Use and Reuse:</h3> <h1>${escape(data.galleryData.context)}</h1></section> <aside class="text-content"><p class="text-lg">Featured here are some staff favorites from the Newberry’s collection. View more free to
					use and reuse images at our${escape(" ")} <a href="https://digital.newberry.org/postcard-gallery" class="llines" data-svelte-h="svelte-10s6swy">Postcard Gallery</a>.</p> <p class="text-base">The vintage postcard images featured here are free to use and reuse. The Newberry believes
					that this content is in the public domain, and makes these digitized copies available
					without requiring fees or permissions. For more information, see our${escape(" ")} <a href="https://www.newberry.org/policies#open-access" target="_blank" class="llines" data-svelte-h="svelte-j4k36f">Open Access Policy</a>
					.</p></aside></header> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> <div class="right svelte-16kql8i">${validate_component(Masonry, "Masonry").$$render($$result, {}, {}, {
    default: () => {
      return `${each(postcards, (postcard) => {
        return `${postcard.pixel ? `<a${add_attribute("href", postcard.link, 0)} class="noimg svelte-16kql8i" target="_blank"><img${add_attribute("src", postcard.pixel, 0)} alt="a transparent pixel used to constrain the tile shape" height="400" width="300"> <h3>${escape(postcard.title)}</h3> </a>` : `<a class="${escape(null_to_empty(`tile ${postcard.pixel ? "" : " image-tile"}`), true) + " svelte-16kql8i"}" href="${escape(base, true) + "/" + escape(postcard.repImage, true)}"${add_attribute("data-alt", postcard.title, 0)}><img${add_attribute("src", imgUrl(postcard.repImage, "thumb"), 0)} width="300" class="thumb no-share"${add_attribute("alt", postcard.title, 0)}> </a>`}`;
      })}`;
    }
  })}</div> <div class="share-btnz svelte-16kql8i" data-svelte-h="svelte-150uf78">iiii
		<div class="sharethis-inline-share-buttons"></div></div> </main>`;
});
export {
  Page as default
};
