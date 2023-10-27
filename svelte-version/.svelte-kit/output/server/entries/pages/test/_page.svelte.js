import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
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
  code: "body{background:black}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<p>${validate_component(NewberryDCLogo, "NewberryDCLogo").$$render($$result, {}, {}, {})} </p>`;
});
export {
  Page as default
};
