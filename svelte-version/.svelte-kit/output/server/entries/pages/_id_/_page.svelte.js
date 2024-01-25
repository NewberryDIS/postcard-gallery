import { c as create_ssr_component, v as validate_component, f as add_attribute, e as escape, d as each } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
import { h as holidays, i as imgUrl, g as getHeight } from "../../../chunks/index.js";
import { M as Masonry } from "../../../chunks/masonry.js";
import { E as Envelope_icon, M as Mobile_messages_icon, H as Hyperlink_icon, L as Letter_stamp_icon, Q as Quinn_icon } from "../../../chunks/quinn-icon.js";
const NewberryDCLogo_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "@media screen and (max-width: 1023px){#dc-text.svelte-rxgbgy.svelte-rxgbgy{display:none}#n-path.svelte-rxgbgy.svelte-rxgbgy{transform:scale(0.5);transform-origin:center left}}svg.svelte-rxgbgy.svelte-rxgbgy,text.svelte-rxgbgy.svelte-rxgbgy,path.svelte-rxgbgy.svelte-rxgbgy{transition:300ms;fill:rgba(var(--fg-color-1))\n    }a.svelte-rxgbgy:hover .svelte-rxgbgy:is(svg, path, text){fill:rgba(var(--splash-color),1)}",
  map: null
};
const NewberryDCLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { colors } = $$props;
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  $$result.css.add(css$2);
  return `<svg version="1.1" id="svg96" width="263.54108" height="55.578121" viewBox="0 0 263.54107 55.578121" class="svelte-rxgbgy"><defs id="defs100"></defs><g id="g102" transform="translate(-0.27287251,-0.28531668)"><a href="https://www.newberry.org" target="_blank" id="n-path" class="svelte-rxgbgy"><path id="path231-2" d="M 34.415451,0.28531669 27.454514,4.5060197 20.495529,8.7267227 20.272873,5.6681287 20.050217,2.6095357 10.161545,8.1896137 0.27287252,13.771645 V 34.81852 55.863437 h 10.00000048 10 V 34.197426 12.531411 l 2.111328,-1.216797 c 1.16086,-0.669449 2.640347,-1.5542383 3.28711,-1.9648443 1.155696,-0.733711 1.233214,-0.710808 4.554687,1.3593753 l 3.380859,2.107422 v 21.523438 21.523432 l 8.111328,-0.0195 8.109376,-0.0215 4.445312,-4.19142 4.445312,-4.19336 -2.550781,-0.008 -2.550781,-0.01 L 53.499435,29.999731 53.384201,12.579809 43.899826,6.4313707 Z" class="svelte-rxgbgy"></path></a><a href="https://collections.newberry.org" id="dc-text" target="_blank" style="text-decoration: none; color: inherit;" class="svelte-rxgbgy"><text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:21.3333px;font-family:'Styrene B Web';-inkscape-font-specification:'Styrene B Web Bold';white-space:pre;inline-size:208.543;display:inline;fill-opacity:1" x="77.995346" y="9.8382692" id="text1" transform="translate(-14.779014,26.491328)" class="svelte-rxgbgy"><tspan x="77.995346" y="9.8382692" id="tspan2" class="svelte-rxgbgy">Digital Collections</tspan></text></a></g></svg>`;
});
const shareButtons_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btn-label.svelte-hvbwl.svelte-hvbwl{padding-left:0.5rem;height:32px;width:100%}.share-btn.svelte-hvbwl.svelte-hvbwl{border:1px solid rgb(var(--bg-color-2));background:linear-gradient(\n  to right,\n  rgba(var(--bg-color-2), 0.3),\n  rgba(var(--bg-color-2), 0.3)\n);background-size:0 100%;background-position:0 100%;background-repeat:no-repeat;transition:background-size 300ms}.share-btn.svelte-hvbwl.svelte-hvbwl:hover,.share-btn.svelte-hvbwl.svelte-hvbwl:focus{background-size:100% 100%}.share-buttons.svelte-hvbwl.svelte-hvbwl{display:flex;flex-direction:column;flex-direction:row;width:66%;margin:auto;align-items:center;justify-content:space-evenly}.share-text.svelte-hvbwl.svelte-hvbwl,.button-wrapper.svelte-hvbwl.svelte-hvbwl{flex:1;padding:0 32px}.button-wrapper.svelte-hvbwl.svelte-hvbwl{display:flex;flex-wrap:wrap;justify-content:stretch;align-items:stretch}.button-wrapper.svelte-hvbwl a.svelte-hvbwl{text-decoration:none}.share-btn.svelte-hvbwl.svelte-hvbwl{position:relative;font-family:'styrene';font-size:0.87rem;cursor:pointer;color:rgb(var(--fg-color-1));height:32px;width:100%;margin:3px;padding:0 11px 0 0;display:flex;justify-content:start;align-items:start;line-height:32px;overflow:hidden}.icon.svelte-hvbwl.svelte-hvbwl{width:32px;height:32px;color:rgb(var(--fg-color-1));background:rgb(var(--bg-color-2))}.icon svg{width:32px;height:32px;padding:3px;display:inline-block;margin-right:11px}",
  map: null
};
const Share_buttons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="share-buttons svelte-hvbwl"><div class="share-text svelte-hvbwl" data-svelte-h="svelte-rt2bpw"><h3>Newberry Postcard Sender</h3> <p>Greet a frend with a vintage postcard image from the Newberry&#39;s collections</p></div> <div class="button-wrapper svelte-hvbwl"><button data-network="email" class="share-btn svelte-hvbwl"><span class="icon svelte-hvbwl">${validate_component(Envelope_icon, "EmailIcon").$$render($$result, {}, {}, {})}</span> <span class="btn-label svelte-hvbwl" data-svelte-h="svelte-14nvmfi">Email</span></button> <button data-network="sms" class="share-btn svelte-hvbwl"><span class="icon svelte-hvbwl">${validate_component(Mobile_messages_icon, "SmsIcon").$$render($$result, {}, {}, {})}</span> <span class="btn-label svelte-hvbwl" data-svelte-h="svelte-q7rqau">Text Message</span></button> <button data-network="copy" class="share-btn svelte-hvbwl"><span class="icon svelte-hvbwl">${validate_component(Hyperlink_icon, "HyperlinkIcon").$$render($$result, {}, {}, {})}</span> <span class="btn-label svelte-hvbwl" data-svelte-h="svelte-ed2akn">Copy Link</span></button> <a${add_attribute("href", base, 0)} class="share-btn svelte-hvbwl"><span class="icon svelte-hvbwl">${validate_component(Letter_stamp_icon, "LetterIcon").$$render($$result, {}, {}, {})}</span> <span class="btn-label svelte-hvbwl" data-svelte-h="svelte-1uq1ddn">Send another postcard</span></a> <button class="share-btn svelte-hvbwl"><span class="icon svelte-hvbwl">${validate_component(Quinn_icon, "QuIconn").$$render($$result, {}, {}, {})}</span> <span class="btn-label svelte-hvbwl" data-svelte-h="svelte-aub0b3">Ask Quinn to Print it</span></button> <button class="share-btn svelte-hvbwl"><span class="icon svelte-hvbwl">${validate_component(Quinn_icon, "QuIconn").$$render($$result, {}, {}, {})}</span> <span class="btn-label svelte-hvbwl" data-svelte-h="svelte-vj0s84">Ask Quinn to Draw it</span></button></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media screen and (max-width: 1023px){main.svelte-cit90k.svelte-cit90k{flex-direction:column}.content.svelte-cit90k.svelte-cit90k{position:relative}main.svelte-cit90k.svelte-cit90k,.content.svelte-cit90k.svelte-cit90k,.minigallery.svelte-cit90k.svelte-cit90k{height:auto;min-height:99%;max-height:99%}section.svelte-cit90k.svelte-cit90k{max-height:70vh}section.svelte-cit90k img.svelte-cit90k{width:100%;height:100%}.minigallery.svelte-cit90k.svelte-cit90k{flex-basis:unset}header.svelte-cit90k.svelte-cit90k{height:33px}header.svelte-cit90k h1.svelte-cit90k{font-size:25px;line-height:25px}}@media screen and (min-width: 1024px){main.svelte-cit90k.svelte-cit90k{flex-direction:row}.content.svelte-cit90k.svelte-cit90k{position:sticky}main.svelte-cit90k.svelte-cit90k{min-height:100vh}.content.svelte-cit90k.svelte-cit90k,.minigallery.svelte-cit90k.svelte-cit90k{height:calc(100vh - 66px);max-width:99%;max-height:99%}section.svelte-cit90k img.svelte-cit90k{width:auto;height:auto}.minigallery.svelte-cit90k.svelte-cit90k{flex-basis:400px}header.svelte-cit90k.svelte-cit90k{height:66px}header.svelte-cit90k h1.svelte-cit90k{font-size:25px;line-height:25px}}main.svelte-cit90k.svelte-cit90k{background:rgba(var(--bg-color-1));align-items:stretch;padding-top:66px}main.svelte-cit90k.svelte-cit90k,header.svelte-cit90k.svelte-cit90k,.content.svelte-cit90k.svelte-cit90k,.minigallery.svelte-cit90k.svelte-cit90k{display:flex}header.svelte-cit90k.svelte-cit90k{position:fixed;background:rgb(vaR(--bg-color-1));top:0;right:0;left:0;justify-content:space-between;align-items:center;padding:3px 11px}.content.svelte-cit90k.svelte-cit90k{flex:1;flex-direction:column}section.svelte-cit90k.svelte-cit90k{padding:32px;display:flex;flex-direction:column;justify-content:center;align-items:center;overflow:hidden}section.svelte-cit90k img.svelte-cit90k{object-fit:contain;max-width:100%;max-height:100%}h1.svelte-cit90k.svelte-cit90k{font-size:33px;line-height:33px}h2.svelte-cit90k.svelte-cit90k{font-family:'styrene';text-align:center;margin:1rem}h1.svelte-cit90k.svelte-cit90k,h2.svelte-cit90k.svelte-cit90k,h3.svelte-cit90k.svelte-cit90k{margin:0}.minigallery.svelte-cit90k.svelte-cit90k{padding:32px;min-height:calc(100vh - 66px);width:100%;background:rgb(var(--bg-color-2));box-shadow:-10px 0 16px rgba(0, 0, 0, 0.1);position:relative;flex-direction:column}",
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
  return `${$$result.head += `<!-- HEAD_svelte-1blp97s_START -->${$$result.title = `<title>Newberry Postcard Galleries</title>`, ""}<!-- HEAD_svelte-1blp97s_END -->`, ""} <main class="svelte-cit90k"><header class="svelte-cit90k">${validate_component(NewberryDCLogo, "NewberryDcLogo").$$render($$result, {}, {}, {})} <h1 class="svelte-cit90k" data-svelte-h="svelte-prs07">Newberry Postcard Sender</h1></header> <div class="${"content " + escape(
    imageData.width > imageData.height ? "landscape" : "portrait",
    true
  ) + " svelte-cit90k"}"><section class="svelte-cit90k"><img${add_attribute("src", imgUrl(imageData.image), 0)} alt="" class="featured-image svelte-cit90k"> <h2 class="svelte-cit90k">${escape(imageData.title)}</h2></section> ${validate_component(Share_buttons, "ShareButtons").$$render($$result, {}, {}, {})}</div> <aside class="minigallery svelte-cit90k">${validate_component(Masonry, "Masonry").$$render($$result, {}, {}, {
    default: () => {
      return `${each(galleryGallery, (item) => {
        return `<a${add_attribute("href", item.link || `${base}/${item.slug}`, 0)} class="${escape(item.pixel ? "noimg" : "", true) + " " + escape(item.holiday ? "holiday" : "", true)}"${add_attribute("target", item.pixel ? "_blank" : "_self", 0)}><img class="no-share"${add_attribute(
          "src",
          item.pixel ? item.pixel : item.title === "Animated gifs" ? "https://collections.newberry.org/AssetLink/136hd1108fjm3yp3aln81y6nenu04dqg.gif" : `https://collections.newberry.org/IIIF3/Image/${item.title === "Chicago" ? "2KXJ8ZSVHKQYC" : item.image}/full/300,/0/default.jpg`,
          0
        )} alt="${"a " + escape(item.title, true) + " postcard"}"${add_attribute("height", getHeight(item.width, item.height), 0)} width="300"> <h3 class="svelte-cit90k">${escape(item.title)}</h3> </a>`;
      })}`;
    }
  })}</aside> </main>`;
});
export {
  Page as default
};
