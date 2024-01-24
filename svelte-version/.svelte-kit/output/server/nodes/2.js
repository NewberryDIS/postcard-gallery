import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.7e2ce211.js","_app/immutable/chunks/scheduler.64baf27f.js","_app/immutable/chunks/index.4223bc80.js","_app/immutable/chunks/masonry.ec0729de.js","_app/immutable/chunks/paths.85f455dd.js","_app/immutable/chunks/footer.373a1059.js","_app/immutable/chunks/index.488be997.js"];
export const stylesheets = ["_app/immutable/assets/2.e1b5780f.css","_app/immutable/assets/masonry.516314ae.css","_app/immutable/assets/footer.2a0818d0.css"];
export const fonts = [];
