import * as server from '../entries/pages/_cat_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_cat_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[cat]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.d4cae373.js","_app/immutable/chunks/scheduler.017b303e.js","_app/immutable/chunks/index.4cbd2ca2.js","_app/immutable/chunks/index.824b5cc3.js","_app/immutable/chunks/paths.864cf02d.js","_app/immutable/chunks/index.739c3de6.js"];
export const stylesheets = ["_app/immutable/assets/3.492a3294.css","_app/immutable/assets/index.0c1df475.css"];
export const fonts = [];
