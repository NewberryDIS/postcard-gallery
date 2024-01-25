import * as server from '../entries/pages/_cat_cat_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_cat_cat_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[cat=cat]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.e04211d3.js","_app/immutable/chunks/scheduler.64baf27f.js","_app/immutable/chunks/index.4223bc80.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.21d245b2.js","_app/immutable/chunks/footer.596752bc.js","_app/immutable/chunks/masonry.e2fe3d7e.js","_app/immutable/chunks/index.488be997.js"];
export const stylesheets = ["_app/immutable/assets/3.529ab81b.css","_app/immutable/assets/footer.2a0818d0.css","_app/immutable/assets/masonry.ad2fb3d9.css"];
export const fonts = [];
