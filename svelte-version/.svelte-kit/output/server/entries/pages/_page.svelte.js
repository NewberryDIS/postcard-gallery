import { c as create_ssr_component, v as validate_component, e as escape, d as each, f as add_attribute } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
import { h as holidays, S as Secret_header, F as Footer, M as Masonry, g as getHeight } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".right.svelte-ylk834{display:flex;flex-direction:column}.text-button.svelte-ylk834{flex-basis:55px;cursor:pointer;text-align:center;font-family:styrene;font-size:1.33rem;text-decoration:none;display:block;margin:5px auto;width:100%;padding:12px;background:rgba(var(--fg-color-2), 0.77);color:rgb(var(--bg-color-1));transition:300ms}.text-button.svelte-ylk834:hover{background:rgba(var(--fg-color-2), 1)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const galleries = data.galleryData;
  const noimg = {
    title: "View even more postcards at Newberry Digital Collections",
    link: "https://collections.newberry.org/asset-management?WS=SearchResults#/DamView&VBID=2KXJA46IUGL5&PN=1&WS=SearchResults",
    pixel: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
    galRepreImageWidth: 300,
    galRepreImageHeight: 400
  };
  const hGalleries = galleries.filter((f) => holidays.includes(f.title)).sort((a, b) => holidays.indexOf(a.title) - holidays.indexOf(b.title));
  let nhGalleries = galleries.filter((f) => !holidays.includes(f.title)).sort(() => Math.random() - 0.5);
  const firstFourNHGalleries = [];
  const restOfNHGalleries = [];
  for (let a in nhGalleries) {
    if (firstFourNHGalleries.length < 4 && nhGalleries[a].galRepreImageWidth > nhGalleries[a].galRepreImageHeight) {
      firstFourNHGalleries.push(nhGalleries[a]);
    } else {
      restOfNHGalleries.push(nhGalleries[a]);
    }
  }
  nhGalleries = [...firstFourNHGalleries, ...restOfNHGalleries, noimg];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main>${validate_component(Secret_header, "SecretHeader").$$render($$result, { title: "Newberry Postcard Gallery" }, {}, {})} <div class="left"><div class="logo" data-svelte-h="svelte-uxpqrc"> <a href="${escape(base, true) + "/"}"><img class="biggo" src="${escape(base, true) + "/NewberryLogo.png"}" alt="Logo for the Newberry Library" height="60" width="300"> <img class="smallo" src="${escape(base, true) + "/NLogo.png"}" alt="Logo for the Newberry Library" height="60" width="60"></a></div> <header><section class="title" data-svelte-h="svelte-1ybj10r"><h1 class="">Newberry Postcard Gallery</h1></section> <aside class="text-content"><p class="text-lg">The vintage postcard images featured here are free to use and
                    reuse. The Newberry believes that this content is in the public
                    domain, and makes these digitized copies available without
                    requiring fees or permissions. For more information, see our${escape(" ")} <a href="https://www.newberry.org/policies#open-access" target="_blank" class="llines" data-svelte-h="svelte-u8amqq">Open Access Policy</a>
                    .</p> <p class="text-base">The Newberry houses one of the largest public collections of
                    postcards and related materials in the United States. Learn more
                    at our${escape(" ")} <a href="https://www.newberry.org/collection/subjects/postcards" target="_blank" class="llines" data-svelte-h="svelte-wb5ofy">Postcards information page</a>
                    , browse more than${escape(" ")} <a href="https://collections.newberry.org/asset-management?WS=SearchResults#/DamView&VBID=2KXJA4UET6ZH&PN=1&WS=SearchResults" target="_blank" class="llines" data-svelte-h="svelte-1b0zbn9">50,000 digitized postcards
                    </a>${escape(" ")}
                    at Newberry Digital Collections, or explore the themed sets
                    featured here.</p> <p class="text-sm">With gratitude to the Library of Congress for its${escape(" ")} <a href="https://www.loc.gov/free-to-use/" target="_blank" class="llines" data-svelte-h="svelte-177cdf1">Free to Use and Reuse Sets</a>
                    , from which this site is inspired.</p></aside> <section class="tag-button" data-svelte-h="svelte-1w83b4m"><p>The Newberry needs your help! Please assist with making our
                    postcard collections more accessible!</p> <a href="https://www.zooniverse.org/projects/newberry/postcard-tag" target="_blank" class="text-button svelte-ylk834">Postcard Tag</a></section></header> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> <div class="right svelte-ylk834">${validate_component(Masonry, "Masonry").$$render($$result, { defaultDirection: "start" }, {}, {
    default: () => {
      return `${each(nhGalleries, (item) => {
        return `<a${add_attribute("href", item.link || `${base}/${item.slug}`, 0)}${add_attribute("target", item.pixel ? "_blank" : "_self", 0)}><img${add_attribute(
          "src",
          item.pixel ? item.pixel : item.title === "Animated gifs" ? "https://collections.newberry.org/AssetLink/136hd1108fjm3yp3aln81y6nenu04dqg.gif" : `https://collections.newberry.org/IIIF3/Image/${item.title === "Chicago" ? "2KXJ8ZSVHKQYC" : item.galRepreImageMEI}/full/300,/0/default.jpg`,
          0
        )} alt="${"a " + escape(item.title, true) + " postcard"}"${add_attribute("height", getHeight(item.galRepreImageWidth, item.galRepreImageHeight), 0)} width="300"> <h3${add_attribute("class", item.pixel ? "noimg" : "", 0)}>${escape(item.title)}</h3> </a>`;
      })}`;
    }
  })} ${validate_component(Masonry, "Masonry").$$render($$result, {}, {}, {
    default: () => {
      return `${each(hGalleries, (item) => {
        return `<a class="holiday" href="${escape(base, true) + "/" + escape(item.slug, true)}"><img src="${"https://collections.newberry.org/IIIF3/Image/" + escape(item.galRepreImageMEI, true) + "/full/300,/0/default.jpg"}" alt="${"a " + escape(item.title, true) + " postcard"}"${add_attribute("height", getHeight(item.galRepreImageWidth, item.galRepreImageHeight), 0)} width="300"> <h3>${escape(item.title)}</h3> </a>`;
      })}`;
    }
  })}</div> </main>`;
});
export {
  Page as default
};
