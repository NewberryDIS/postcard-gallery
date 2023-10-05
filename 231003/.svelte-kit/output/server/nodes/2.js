import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.105597d6.js","_app/immutable/chunks/scheduler.aaf53295.js","_app/immutable/chunks/index.849bc1eb.js","_app/immutable/chunks/index.79ba1937.js","_app/immutable/chunks/paths.787e568d.js"];
export const stylesheets = ["_app/immutable/assets/2.353f4824.css"];
export const fonts = [];
