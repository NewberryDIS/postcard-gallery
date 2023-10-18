import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.cd304410.js","_app/immutable/chunks/scheduler.5a9f8fe9.js","_app/immutable/chunks/index.5ac71af3.js","_app/immutable/chunks/index.1acb1a88.js","_app/immutable/chunks/paths.6aa5f08d.js"];
export const stylesheets = ["_app/immutable/assets/2.1abae37c.css","_app/immutable/assets/index.c07df211.css"];
export const fonts = [];
