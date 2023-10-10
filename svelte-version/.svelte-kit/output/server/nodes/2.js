import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.79d260d6.js","_app/immutable/chunks/scheduler.b9cf52ea.js","_app/immutable/chunks/index.8f3dcde5.js","_app/immutable/chunks/index.57a434b9.js","_app/immutable/chunks/paths.1f6e9b32.js"];
export const stylesheets = ["_app/immutable/assets/2.beae8f1e.css","_app/immutable/assets/index.c07df211.css"];
export const fonts = [];
