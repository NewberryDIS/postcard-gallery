import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
import { s as slugify } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{margin:0;padding:0}.page.svelte-1fcmmcw{margin:0;padding:0;width:100vw;min-height:100vh;color:#ccc;background:#333}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { allltoo } = data;
  const { allthree } = data;
  const postcardsRaw = allthree.map((a3) => a3.APIResponse);
  const allData = allltoo.map((p) => ({
    context: p.APIResponse["new.Context"],
    title: p.APIResponse.Title,
    slug: slugify(p.APIResponse.Title),
    galLink: `https://collections.newberry.org/${p.APIResponse.Link}`,
    galMEI: p.APIResponse.MediaEncryptedIdentifier,
    galRepreImageMEI: p.APIResponse.Representative?.MediaEncryptedIdentifier,
    galRepreImageTitle: p.APIResponse.Representative?.Title,
    galRepreImageWidth: p.APIResponse.Representative?.MaxWidth,
    galRepreImageHeight: p.APIResponse.Representative?.MaxHeight,
    postcards: p.APIResponse.Content.map((topLevelPostcard) => {
      let postcardRaw = postcardsRaw.filter((pcard) => pcard.MediaEncryptedIdentifier === topLevelPostcard.MediaEncryptedIdentifier).pop();
      if (postcardRaw.Representative) {
        return {
          mei: postcardRaw.MediaEncryptedIdentifier,
          repImage: postcardRaw.Representative?.MediaEncryptedIdentifier,
          repImageHeight: postcardRaw.Representative?.MaxHeight,
          repImageTitle: postcardRaw.Representative?.Title,
          repImageWidth: postcardRaw.Representative?.MaxWidth,
          title: postcardRaw.Title
        };
      } else {
        return {
          mei: postcardRaw.MediaEncryptedIdentifier,
          repImage: postcardRaw.MediaEncryptedIdentifier,
          repImageHeight: postcardRaw.MaxHeight,
          repImageTitle: postcardRaw.Title,
          repImageWidth: postcardRaw.MaxWidth,
          title: postcardRaw.Title
        };
      }
    })
  }));
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="page svelte-1fcmmcw"> <pre>${escape(JSON.stringify(allData, null, 4))}</pre> </div>`;
});
export {
  Page as default
};
