import * as server from '../entries/pages/_cat_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_cat_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[cat]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.e468b84d.js","_app/immutable/chunks/scheduler.b9cf52ea.js","_app/immutable/chunks/index.8f3dcde5.js","_app/immutable/chunks/index.dd38e43c.js","_app/immutable/chunks/paths.f27a9b1e.js","_app/immutable/chunks/index.800adaad.js"];
export const stylesheets = ["_app/immutable/assets/3.8afab469.css","_app/immutable/assets/index.c07df211.css"];
export const fonts = [];
