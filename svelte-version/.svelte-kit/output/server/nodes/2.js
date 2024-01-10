import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.2724215e.js","_app/immutable/chunks/scheduler.946d4e9f.js","_app/immutable/chunks/index.19624394.js","_app/immutable/chunks/index.0db8e3e4.js","_app/immutable/chunks/paths.70a1527c.js"];
export const stylesheets = ["_app/immutable/assets/2.d56c8882.css","_app/immutable/assets/index.ef0d098b.css"];
export const fonts = [];
