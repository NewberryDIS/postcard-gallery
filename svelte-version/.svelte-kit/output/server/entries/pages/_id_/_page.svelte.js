import { c as create_ssr_component, v as validate_component, e as escape, f as add_attribute, d as each } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
import { S as Secret_header, M as Masonry } from "../../../chunks/masonry.js";
import { h as holidays, i as imgUrl, g as getHeight } from "../../../chunks/index.js";
const NewberryDCLogo_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "svg.svelte-1il4tdz,text.svelte-1il4tdz,path.svelte-1il4tdz{transition:150ms;fill:rgba(var(--fg-color-1))\n    }text.svelte-1il4tdz:hover,path.svelte-1il4tdz:hover{fill:rgba(var(--splash-color),1)}",
  map: null
};
const NewberryDCLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { colors } = $$props;
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  $$result.css.add(css$1);
  return `<svg version="1.1" id="svg96" width="263.54108" height="55.578121" viewBox="0 0 263.54107 55.578121" class="svelte-1il4tdz"><defs id="defs100"></defs><g id="g102" transform="translate(-0.27287251,-0.28531668)"><a href="https://www.newberry.org" target="_blank"><path id="path231-2" d="M 34.415451,0.28531669 27.454514,4.5060197 20.495529,8.7267227 20.272873,5.6681287 20.050217,2.6095357 10.161545,8.1896137 0.27287252,13.771645 V 34.81852 55.863437 h 10.00000048 10 V 34.197426 12.531411 l 2.111328,-1.216797 c 1.16086,-0.669449 2.640347,-1.5542383 3.28711,-1.9648443 1.155696,-0.733711 1.233214,-0.710808 4.554687,1.3593753 l 3.380859,2.107422 v 21.523438 21.523432 l 8.111328,-0.0195 8.109376,-0.0215 4.445312,-4.19142 4.445312,-4.19336 -2.550781,-0.008 -2.550781,-0.01 L 53.499435,29.999731 53.384201,12.579809 43.899826,6.4313707 Z" class="svelte-1il4tdz"></path></a><a href="https://collections.newberry.org" target="_blank" style="text-decoration: none; color: inherit;"><text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:21.3333px;font-family:'Styrene B Web';-inkscape-font-specification:'Styrene B Web Bold';white-space:pre;inline-size:208.543;display:inline;fill-opacity:1" x="77.995346" y="9.8382692" id="text1" transform="translate(-14.779014,26.491328)" class="svelte-1il4tdz"><tspan x="77.995346" y="9.8382692" id="tspan2">Digital Collections</tspan></text></a></g></svg>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-3tjlm1.svelte-3tjlm1{height:100vh;align-items:stretch}main.svelte-3tjlm1.svelte-3tjlm1,header.svelte-3tjlm1.svelte-3tjlm1,.content.svelte-3tjlm1.svelte-3tjlm1,.share-buttons.svelte-3tjlm1.svelte-3tjlm1,.minigallery.svelte-3tjlm1.svelte-3tjlm1{display:flex}header.svelte-3tjlm1.svelte-3tjlm1{justify-content:space-between;align-items:center;padding:3px 11px}.content.svelte-3tjlm1.svelte-3tjlm1{background:rgba(var(--bg-color-1));flex:1;flex-direction:column;height:100vh}section.svelte-3tjlm1.svelte-3tjlm1{padding:32px;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:99%;max-height:99%;overflow:hidden}section.svelte-3tjlm1 img.svelte-3tjlm1{object-fit:contain;max-width:100%;max-height:100%}.button-wrapper.svelte-3tjlm1.svelte-3tjlm1{display:flex;flex-wrap:wrap;justify-content:start;align-items:space-between}.button-wrapper.svelte-3tjlm1 button.svelte-3tjlm1{border:0;margin:3px;padding:0 11px 0 0;display:flex;line-height:32px;border:1px solid blue}.icon.svelte-3tjlm1.svelte-3tjlm1{min-width:32px;min-height:32px;display:inline-block;margin-right:11px;background:#f0f;border-right:1px solid blue}.send.svelte-3tjlm1.svelte-3tjlm1,.view.svelte-3tjlm1.svelte-3tjlm1{flex:1}.share.svelte-3tjlm1.svelte-3tjlm1{flex:2}.share-buttons.svelte-3tjlm1>div.svelte-3tjlm1{padding:0 32px;border:1px solid #f0f}.share-buttons.svelte-3tjlm1.svelte-3tjlm1{align-items:stretch;justify-content:space-evenly}h1.svelte-3tjlm1.svelte-3tjlm1{font-size:33px;line-height:33px}h2.svelte-3tjlm1.svelte-3tjlm1{font-family:'styrene';text-align:center;margin:1rem}h1.svelte-3tjlm1.svelte-3tjlm1,h2.svelte-3tjlm1.svelte-3tjlm1,h3.svelte-3tjlm1.svelte-3tjlm1{margin:0}.minigallery.svelte-3tjlm1.svelte-3tjlm1{padding:32px;min-height:100vh;width:100%;background:rgb(var(--bg-color-2));box-shadow:-10px 0 16px rgba(0, 0, 0, 0.1);position:relative;flex-basis:400px;flex-direction:column}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { imageData, galleryData } = data;
  const galleries = galleryData.items;
  const noimg = {
    title: `View even more postcards at Newberry Digital Collections`,
    link: data.galleryData.galLink,
    pixel: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
    width: 300,
    height: 400
  };
  const hGalleries = galleries.filter((f) => holidays.includes(f.title)).sort((a, b) => holidays.indexOf(a.title) - holidays.indexOf(b.title)).map((h) => {
    h.holiday = true;
    return h;
  });
  let nhGalleries = galleries.filter((f) => !holidays.includes(f.title)).sort(() => Math.random() - 0.5);
  const firstFourNHGalleries = [];
  const restOfNHGalleries = [];
  for (let a in nhGalleries) {
    if (firstFourNHGalleries.length < 4 && nhGalleries[a].width > nhGalleries[a].height) {
      firstFourNHGalleries.push(nhGalleries[a]);
    } else {
      restOfNHGalleries.push(nhGalleries[a]);
    }
  }
  const galleryGallery = [...firstFourNHGalleries, ...restOfNHGalleries, noimg, ...hGalleries];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1blp97s_START -->${$$result.title = `<title>Newberry Postcard Galleries</title>`, ""}<!-- HEAD_svelte-1blp97s_END -->`, ""} <main class="svelte-3tjlm1"><div class="content svelte-3tjlm1">${validate_component(Secret_header, "SecretHeader").$$render($$result, { title: "Newberry Postcard Gallery" }, {}, {})} <header class="svelte-3tjlm1"> <a href="${escape(base, true) + "/"}">${validate_component(NewberryDCLogo, "NewberryDcLogo").$$render($$result, {}, {}, {})}</a> <h1 class="svelte-3tjlm1" data-svelte-h="svelte-1fhpkwi">Newberry Postcard Gallery</h1></header> <section class="svelte-3tjlm1"><img${add_attribute("src", imgUrl(imageData.image), 0)} alt="" class="featured-image svelte-3tjlm1"> <h2 class="svelte-3tjlm1">${escape(imageData.title)}</h2></section> <div class="share-buttons svelte-3tjlm1" data-svelte-h="svelte-7u09ty"><div class="send svelte-3tjlm1"><h3 class="svelte-3tjlm1">Send</h3> <div class="button-wrapper svelte-3tjlm1"><button class="svelte-3tjlm1"><i class="icon svelte-3tjlm1"></i>Email</button> <button class="svelte-3tjlm1"><i class="icon svelte-3tjlm1"></i>Text Message</button> <button class="svelte-3tjlm1"><i class="icon svelte-3tjlm1"></i>Copy Link</button></div></div> <div class="share svelte-3tjlm1"><h3 class="svelte-3tjlm1">Share</h3> <div class="button-wrapper svelte-3tjlm1"><button class="svelte-3tjlm1"><i class="icon svelte-3tjlm1"></i> Facebook</button> <button class="svelte-3tjlm1"><i class="icon svelte-3tjlm1"></i>Instagram</button> <button class="svelte-3tjlm1"><i class="icon svelte-3tjlm1"></i>Xitter</button> <button class="svelte-3tjlm1"><i class="icon svelte-3tjlm1"></i>Tumblr</button> <button class="svelte-3tjlm1"><i class="icon svelte-3tjlm1"></i>Ask Quinn to Print it</button> <button class="svelte-3tjlm1"><i class="icon svelte-3tjlm1"></i>Ask Quinn to Draw it</button></div></div> <div class="view svelte-3tjlm1"><h3 class="svelte-3tjlm1">View</h3> <div class="button-wrapper svelte-3tjlm1"><button class="svelte-3tjlm1"><i class="icon svelte-3tjlm1"></i>Newberry Digital Collections</button></div></div></div></div> <aside class="minigallery svelte-3tjlm1">${validate_component(Masonry, "Masonry").$$render($$result, {}, {}, {
    default: () => {
      return `${each(galleryGallery, (item) => {
        return `<a${add_attribute("href", item.link || `${base}/${item.slug}`, 0)} class="${escape(item.pixel ? "noimg" : "", true) + " " + escape(item.holiday ? "holiday" : "", true)}"${add_attribute("target", item.pixel ? "_blank" : "_self", 0)}><img class="no-share"${add_attribute(
          "src",
          item.pixel ? item.pixel : item.title === "Animated gifs" ? "https://collections.newberry.org/AssetLink/136hd1108fjm3yp3aln81y6nenu04dqg.gif" : `https://collections.newberry.org/IIIF3/Image/${item.title === "Chicago" ? "2KXJ8ZSVHKQYC" : item.image}/full/300,/0/default.jpg`,
          0
        )} alt="${"a " + escape(item.title, true) + " postcard"}"${add_attribute("height", getHeight(item.width, item.height), 0)} width="300"> <h3 class="svelte-3tjlm1">${escape(item.title)}</h3> </a>`;
      })}`;
    }
  })}</aside> </main>`;
});
export {
  Page as default
};
