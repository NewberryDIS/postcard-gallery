import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.a96fe4d8.js","_app/immutable/chunks/scheduler.238e0827.js","_app/immutable/chunks/index.afd122aa.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.4ed2d28a.js","_app/immutable/chunks/index.3f500318.js"];
export const stylesheets = ["_app/immutable/assets/2.d56c8882.css","_app/immutable/assets/index.ef0d098b.css"];
export const fonts = [];
