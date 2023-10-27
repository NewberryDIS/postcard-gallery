import * as server from '../entries/pages/_cat_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_cat_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[cat]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.6eb77c41.js","_app/immutable/chunks/scheduler.238e0827.js","_app/immutable/chunks/index.afd122aa.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.041b1acf.js","_app/immutable/chunks/paths.3b4e2cbd.js","_app/immutable/chunks/index.94cbf474.js"];
export const stylesheets = ["_app/immutable/assets/3.8afab469.css","_app/immutable/assets/index.ef0d098b.css"];
export const fonts = [];
