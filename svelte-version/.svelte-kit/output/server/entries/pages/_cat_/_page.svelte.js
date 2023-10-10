import { c as create_ssr_component, v as validate_component, e as escape, f as add_attribute, d as each, h as null_to_empty } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
import { S as Secret_header, F as Footer, M as Masonry, i as imgUrl } from "../../../chunks/index.js";
globalThis.matchMedia?.(
  "(prefers-reduced-motion: reduce)"
).matches;
const biggerPicture = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".right.svelte-ics9c0.svelte-ics9c0.svelte-ics9c0{position:relative}.right.svelte-ics9c0 header.svelte-ics9c0.svelte-ics9c0{display:flex;flex-direction:row;align-items:center;justify-content:center;position:absolute;top:0;left:0;right:0;height:25px;padding:0;background-color:rgba(var(--bg-color-1), 1);border-bottom:1px solid rgb(var(--bg-color-1));margin:0}.right.svelte-ics9c0 header.svelte-ics9c0 a.svelte-ics9c0,.right.svelte-ics9c0 header span.svelte-ics9c0.svelte-ics9c0{height:77%;font-family:'styrene';text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#no-link.svelte-ics9c0.svelte-ics9c0.svelte-ics9c0{background:rgba(0,0,0,0)}.tile.svelte-ics9c0.svelte-ics9c0.svelte-ics9c0{bordeR:0;margin:0;padding:0;min-height:200px;width:300px;display:inline-block;background-image:url('/spinner.svg');background-position:center;background-repeat:no-repeat}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const noimg = {
    title: `View even more ${data.galleryData.context} at Newberry Digital Collections`,
    link: "https://collections.newberry.org/asset-management?WS=SearchResults#/DamView&VBID=2KXJA46IUGL5&PN=1&WS=SearchResults",
    pixel: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
    galRepreImageWidth: 300,
    galRepreImageHeight: 400
  };
  const postcards = [...data.galleryData.postcards.sort(() => Math.random() - 0.5), noimg];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main>${validate_component(Secret_header, "SecretHeader").$$render($$result, { title: data.galleryData.context }, {}, {})} <div class="left"><div class="logo" data-svelte-h="svelte-1ckqrq8"><a href="${escape(base, true) + "/"}"><img class="biggo" src="${escape(base, true) + "/NewberryLogo.png"}" alt="Logo for the Newberry Library" height="60" width="300"> <img class="smallo" src="${escape(base, true) + "/NLogo.png"}" alt="Logo for the Newberry Library" height="60" width="60"></a></div> <header class="title svelte-ics9c0"><section><h3 data-svelte-h="svelte-i0mqc1">Free to Use and Reuse:</h3> <h1>${escape(data.galleryData.context)}</h1></section> <aside class="text-content"><p class="text-lg">Featured here are some staff favorites from the Newberry’s
                    collection. View more free to use and reuse images at our${escape(" ")} <a href="https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA4UE6RXM&PN=1" target="_blank" class="llines svelte-ics9c0" data-svelte-h="svelte-1rj1iwf">Postcard Gallery</a>.</p> <p class="text-base">The vintage postcard images featured here are free to use and
                    reuse. The Newberry believes that this content is in the public
                    domain, and makes these digitized copies available without
                    requiring fees or permissions. For more information, see our${escape(" ")} <a href="https://www.newberry.org/policies#open-access" target="_blank" class="llines svelte-ics9c0" data-svelte-h="svelte-u8amqq">Open Access Policy</a>
                    .</p></aside></header> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> <div class="right svelte-ics9c0"><header class="svelte-ics9c0"><a href="https://www.newberry.org" class="llines svelte-ics9c0" target="_blank" data-svelte-h="svelte-1d3bgp0">Newberry Library &gt;</a> <a href="https://collections.newberry.org" class="llines svelte-ics9c0" target="_blank" data-svelte-h="svelte-h7eyru">Digital Collections &gt;</a> <a${add_attribute("href", base, 0)} class="llines svelte-ics9c0" target="_blank" data-svelte-h="svelte-1ogl7xc">Postcard Galleries &gt;</a> <span class="llines svelte-ics9c0" id="no-link">${escape(data.galleryData.context)}</span></header> ${validate_component(Masonry, "Masonry").$$render($$result, {}, {}, {
    default: () => {
      return `${each(postcards, (postcard) => {
        return `${postcard.pixel ? `<a${add_attribute("href", postcard.link, 0)} target="_blank" class="svelte-ics9c0"><img${add_attribute("src", postcard.pixel, 0)} alt="a transparent pixel used to constrain the tile shape" height="400" width="300"> <h3 class="noimg">${escape(postcard.title)}</h3> </a>` : `<a class="${escape(null_to_empty(`tile ${postcard.pixel ? "" : " image-tile"}`), true) + " svelte-ics9c0"}"${add_attribute("href", imgUrl(postcard.repImage), 0)}${add_attribute("data-img", imgUrl(postcard.repImage), 0)}${add_attribute("data-thumb", imgUrl(postcard.repImage, "thumb"), 0)}${add_attribute("data-height", postcard.repImageHeight, 0)}${add_attribute("data-width", postcard.repImageWidth, 0)}${add_attribute("data-alt", postcard.title, 0)} data-caption="${escape(postcard.title, true) + ".  View at <a href='https://collections.newberry.org/asset-management/" + escape(postcard.mei, true) + "' target='_blank' class='llines'>Newberry Digital Collections</a>"}"><img${add_attribute("src", imgUrl(postcard.repImage, "thumb"), 0)} width="300"${add_attribute("alt", postcard.title, 0)}> </a>`}`;
      })}`;
    }
  })}</div> </main>`;
});
export {
  Page as default
};
