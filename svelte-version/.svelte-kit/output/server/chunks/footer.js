import { c as create_ssr_component } from "./ssr.js";
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
  Footer as F
};
