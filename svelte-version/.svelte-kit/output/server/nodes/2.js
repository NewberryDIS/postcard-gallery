import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.3094a84c.js","_app/immutable/chunks/scheduler.017b303e.js","_app/immutable/chunks/index.4cbd2ca2.js","_app/immutable/chunks/index.824b5cc3.js","_app/immutable/chunks/paths.864cf02d.js"];
export const stylesheets = ["_app/immutable/assets/2.45f8a878.css","_app/immutable/assets/index.0c1df475.css"];
export const fonts = [];
