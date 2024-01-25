import { c as create_ssr_component, e as escape } from "./ssr.js";
import { b as base } from "./paths.js";
import "./masonry.js";
const css$1 = {
  code: ".secret-header.svelte-k6el62.svelte-k6el62{position:fixed;margin-top:0;top:0;left:0;right:0;height:40px;z-index:15;flex-direction:row;background-color:rgb(var(--bg-color-1));justify-content:start;align-items:center;padding-inline:8px}.secret-header.svelte-k6el62 img.svelte-k6el62{height:32px}.secret-header.svelte-k6el62 h1.svelte-k6el62{margin:0;padding:0;width:100%;white-space:nowrap;overflow:hidden}",
  map: null
};
const Secret_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$1);
  return `<header class="secret-header svelte-k6el62"><a href="${escape(base, true) + "/"}" data-svelte-h="svelte-ydq82d"><img src="${escape(base, true) + "/NLogo.png"}" alt="Logo for the Newberry Library" class="svelte-k6el62"></a> <h1 class="svelte-k6el62">${escape(title)}</h1> </header>`;
});
const footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-1g1jcoh{position:absolute;left:0;right:0;bottom:0}ul.svelte-1g1jcoh{height:24px;background-color:rgba(var(--bg-color-2), 1);border-bottom:1px solid rgb(var(--bg-color-1));display:flex;align-items:center;justify-content:center;padding:0}ul.svelte-1g1jcoh,li.svelte-1g1jcoh{list-style-type:none;margin:0}li.svelte-1g1jcoh{padding:0 8px}a.svelte-1g1jcoh{text-decoration:none;font-family:styrene;font-size:14px;line-height:14px}li.svelte-1g1jcoh:first-of-type{border-right:2px solid rgba(var(--fg-color-1), 0.5)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-1g1jcoh">${slots.default ? slots.default({}) : ``} <ul class="svelte-1g1jcoh" data-svelte-h="svelte-v9umyt"><li class="svelte-1g1jcoh"><a class="llines svelte-1g1jcoh" target="_blank" href="https://www.newberry.org">The Newberry</a></li> <li class="svelte-1g1jcoh"><a class="llines svelte-1g1jcoh" target="_blank" href="https://www.newberry.org/contact-librarian">Contact Us</a></li></ul> </footer>`;
});
export {
  Footer as F,
  Secret_header as S
};
