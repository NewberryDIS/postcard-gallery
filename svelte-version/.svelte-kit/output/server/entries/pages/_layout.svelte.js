import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
const id = "G-VXBH4RD619";
const Ga = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-a2kvt3_START --><script async src="${"https://www.googletagmanager.com/gtag/js?id=" + escape(id, true)}"><\/script><!-- HEAD_svelte-a2kvt3_END -->`, ""}`;
});
const newberry = "";
const shared = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Ga, "GoogleAnalytics").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
