import * as server from '../entries/pages/_use-to-update-data/data/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_use-to-update-data/data/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/_use-to-update-data/data/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.909614c3.js","_app/immutable/chunks/scheduler.238e0827.js","_app/immutable/chunks/index.afd122aa.js","_app/immutable/chunks/index.bd882b40.js"];
export const stylesheets = ["_app/immutable/assets/4.c79962da.css"];
export const fonts = [];
