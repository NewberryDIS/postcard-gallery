import * as server from '../entries/pages/_id_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.2526e9fc.js","_app/immutable/chunks/scheduler.64baf27f.js","_app/immutable/chunks/index.4223bc80.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.21d245b2.js","_app/immutable/chunks/index.488be997.js","_app/immutable/chunks/masonry.e2fe3d7e.js","_app/immutable/chunks/quinn-icon.171f6b5a.js"];
export const stylesheets = ["_app/immutable/assets/4.b90e8dfb.css","_app/immutable/assets/masonry.ad2fb3d9.css","_app/immutable/assets/quinn-icon.a284dd86.css"];
export const fonts = [];
