import * as server from '../entries/pages/_cat_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_cat_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[cat]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.c89bfcd0.js","_app/immutable/chunks/scheduler.5a9f8fe9.js","_app/immutable/chunks/index.5ac71af3.js","_app/immutable/chunks/index.4c482612.js","_app/immutable/chunks/paths.66711c76.js","_app/immutable/chunks/index.cd513c88.js"];
export const stylesheets = ["_app/immutable/assets/3.8afab469.css","_app/immutable/assets/index.c07df211.css"];
export const fonts = [];
