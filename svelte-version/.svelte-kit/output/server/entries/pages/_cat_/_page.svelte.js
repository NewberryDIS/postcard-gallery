import { c as create_ssr_component, v as validate_component, e as escape, d as each, f as add_attribute } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
import { S as Secret_header, F as Footer, M as Masonry, i as imgUrl } from "../../../chunks/index.js";
globalThis.matchMedia?.(
  "(prefers-reduced-motion: reduce)"
).matches;
const biggerPicture = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tile.svelte-tjc7wo{bordeR:0;margin:0;padding:0;width:300px;display:inline-block;background-image:url('/spinner.svg');background-position:center;background-repeat:no-repeat}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { postcards } = data.galleryData;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main>${validate_component(Secret_header, "SecretHeader").$$render($$result, { title: data.galleryData.context }, {}, {})} <div class="left"><div class="logo" data-svelte-h="svelte-1ckqrq8"><a href="${escape(base, true) + "/"}"><img class="biggo" src="${escape(base, true) + "/NewberryLogo.png"}" alt="Logo for the Newberry Library" height="60" width="300"> <img class="smallo" src="${escape(base, true) + "/NLogo.png"}" alt="Logo for the Newberry Library" height="60" width="60"></a></div> <header class="title"><section><h3 data-svelte-h="svelte-i0mqc1">Free to Use and Reuse:</h3> <h1>${escape(data.galleryData.context)}</h1></section> <section class="text-content"><p class="text-lg">Featured here are some staff favorites from the Newberry’s
                    collection. View more free to use and reuse images at our${escape(" ")} <a href="https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA4UE6RXM&PN=1" target="_blank" class="llines" data-svelte-h="svelte-1rj1iwf">Postcard Gallery</a>.</p> <p class="text-base">The vintage postcard images featured here are free to use and
                    reuse. The Newberry believes that this content is in the public
                    domain, and makes these digitized copies available without
                    requiring fees or permissions. For more information, see our${escape(" ")} <a href="https://www.newberry.org/policies#open-access" target="_blank" class="llines" data-svelte-h="svelte-u8amqq">Open Access Policy</a>
                    .</p></section></header> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> <div class="right">${validate_component(Masonry, "Masonry").$$render($$result, {}, {}, {
    default: () => {
      return `${each(postcards, (postcard) => {
        return `<a class="tile svelte-tjc7wo"${add_attribute("href", imgUrl(postcard.repImage), 0)}${add_attribute("data-img", imgUrl(postcard.repImage), 0)}${add_attribute("data-thumb", imgUrl(postcard.repImage, "thumb"), 0)}${add_attribute("data-height", postcard.repImageHeight, 0)}${add_attribute("data-width", postcard.repImageWidth, 0)}${add_attribute("data-alt", postcard.title, 0)} data-caption="${escape(postcard.title, true) + ".  View at <a href='https://collections.newberry.org/asset-management/" + escape(postcard.mei, true) + "' target='_blank' class='llines'>Newberry Digital Collections</a>"}"><img${add_attribute("src", imgUrl(postcard.repImage, "thumb"), 0)} width="300"${add_attribute("alt", postcard.title, 0)}> </a>`;
      })}`;
    }
  })}</div> </main>`;
});
export {
  Page as default
};
