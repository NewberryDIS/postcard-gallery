import { c as create_ssr_component, e as escape, v as validate_component, d as each, f as add_attribute, h as null_to_empty } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
import { S as Secret_header, F as Footer, M as Masonry, i as imgUrl } from "../../../chunks/index.js";
globalThis.matchMedia?.(
  "(prefers-reduced-motion: reduce)"
).matches;
const biggerPicture = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `.right.svelte-1ktfhpd{position:relative}.tile.svelte-1ktfhpd{bordeR:0;margin:0;padding:0;min-height:200px;width:300px;display:inline-block;background-image:url('/spinner.svg');background-position:center;background-repeat:no-repeat}.sansie{font-family:"styrene";text-decoration:underline}`,
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
  return `${$$result.head += `<!-- HEAD_svelte-bnbe6i_START -->${$$result.title = `<title>Newberry Library - ${escape(data.galleryData.context)}</title>`, ""}<!-- HEAD_svelte-bnbe6i_END -->`, ""} <main>${validate_component(Secret_header, "SecretHeader").$$render($$result, { title: data.galleryData.context }, {}, {})} <div class="left"><div class="logo" data-svelte-h="svelte-1ckqrq8"><a href="${escape(base, true) + "/"}"><img class="biggo" src="${escape(base, true) + "/NewberryLogo.png"}" alt="Logo for the Newberry Library" height="60" width="300"> <img class="smallo" src="${escape(base, true) + "/NLogo.png"}" alt="Logo for the Newberry Library" height="60" width="60"></a></div> <header class="title"><section><h3 data-svelte-h="svelte-i0mqc1">Free to Use and Reuse:</h3> <h1>${escape(data.galleryData.context)}</h1></section> <aside class="text-content"><p class="text-lg">Featured here are some staff favorites from the Newberry’s
                    collection. View more free to use and reuse images at our${escape(" ")} <a href="https://digital.newberry.org/postcard-gallery" class="llines" data-svelte-h="svelte-99fxz7">Postcard Gallery</a>.</p> <p class="text-base">The vintage postcard images featured here are free to use and
                    reuse. The Newberry believes that this content is in the public
                    domain, and makes these digitized copies available without
                    requiring fees or permissions. For more information, see our${escape(" ")} <a href="https://www.newberry.org/policies#open-access" target="_blank" class="llines" data-svelte-h="svelte-u8amqq">Open Access Policy</a>
                    .</p></aside></header> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> <div class="right svelte-1ktfhpd">      ${validate_component(Masonry, "Masonry").$$render($$result, {}, {}, {
    default: () => {
      return `${each(postcards, (postcard) => {
        return `${postcard.pixel ? `<a${add_attribute("href", postcard.link, 0)} class="noimg" target="_blank"><img${add_attribute("src", postcard.pixel, 0)} alt="a transparent pixel used to constrain the tile shape" height="400" width="300"> <h3>${escape(postcard.title)}</h3> </a>` : `<a class="${escape(null_to_empty(`tile ${postcard.pixel ? "" : " image-tile"}`), true) + " svelte-1ktfhpd"}"${add_attribute("href", imgUrl(postcard.repImage), 0)}${add_attribute("data-img", imgUrl(postcard.repImage), 0)}${add_attribute("data-thumb", imgUrl(postcard.repImage, "thumb"), 0)}${add_attribute("data-height", postcard.repImageHeight, 0)}${add_attribute("data-width", postcard.repImageWidth, 0)}${add_attribute("data-alt", postcard.title, 0)} data-caption="${"<a href='https://collections.newberry.org/asset-management/" + escape(postcard.mei, true) + "' target='_blank' class='sansie'>" + escape(postcard.title, true) + "</a>"}"><img${add_attribute("src", imgUrl(postcard.repImage, "thumb"), 0)} width="300"${add_attribute("alt", postcard.title, 0)}> </a>`}`;
      })}`;
    }
  })}</div> </main>`;
});
export {
  Page as default
};
