import * as server from '../entries/pages/_cat_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_cat_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[cat]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.e01f08cf.js","_app/immutable/chunks/scheduler.946d4e9f.js","_app/immutable/chunks/index.19624394.js","_app/immutable/chunks/index.0db8e3e4.js","_app/immutable/chunks/paths.70a1527c.js","_app/immutable/chunks/index.12cfcd5c.js"];
export const stylesheets = ["_app/immutable/assets/3.8afab469.css","_app/immutable/assets/index.ef0d098b.css"];
export const fonts = [];
