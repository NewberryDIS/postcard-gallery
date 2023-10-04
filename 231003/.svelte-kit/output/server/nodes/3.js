import * as server from '../entries/pages/_cat_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_cat_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[cat]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.9b7be235.js","_app/immutable/chunks/scheduler.aaf53295.js","_app/immutable/chunks/index.849bc1eb.js","_app/immutable/chunks/index.79ba1937.js","_app/immutable/chunks/index.f80ab385.js","_app/immutable/chunks/paths.d8151e3f.js"];
export const stylesheets = ["_app/immutable/assets/3.86d5454b.css"];
export const fonts = [];
