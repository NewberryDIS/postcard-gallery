import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.ab7f6b06.js","_app/immutable/chunks/scheduler.5a9f8fe9.js","_app/immutable/chunks/index.5ac71af3.js","_app/immutable/chunks/index.307f7804.js","_app/immutable/chunks/paths.60d3b6c2.js"];
export const stylesheets = ["_app/immutable/assets/2.a1ac19e3.css","_app/immutable/assets/index.ef0d098b.css"];
export const fonts = [];
