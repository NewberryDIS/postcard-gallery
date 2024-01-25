import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.0a5617d1.js","_app/immutable/chunks/scheduler.64baf27f.js","_app/immutable/chunks/index.4223bc80.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.21d245b2.js","_app/immutable/chunks/footer.596752bc.js","_app/immutable/chunks/masonry.e2fe3d7e.js","_app/immutable/chunks/index.488be997.js"];
export const stylesheets = ["_app/immutable/assets/2.e1b5780f.css","_app/immutable/assets/footer.2a0818d0.css","_app/immutable/assets/masonry.ad2fb3d9.css"];
export const fonts = [];
