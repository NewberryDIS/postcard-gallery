import * as server from '../entries/pages/_cat_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_cat_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[cat]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.0688e6ae.js","_app/immutable/chunks/scheduler.b9cf52ea.js","_app/immutable/chunks/index.8f3dcde5.js","_app/immutable/chunks/index.57a434b9.js","_app/immutable/chunks/paths.1f6e9b32.js","_app/immutable/chunks/index.800adaad.js"];
export const stylesheets = ["_app/immutable/assets/3.200a6d0b.css","_app/immutable/assets/index.c07df211.css"];
export const fonts = [];
