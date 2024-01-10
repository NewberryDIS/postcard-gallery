import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.ea34818f.js","_app/immutable/chunks/scheduler.946d4e9f.js","_app/immutable/chunks/index.19624394.js"];
export const stylesheets = ["_app/immutable/assets/0.214fd037.css"];
export const fonts = [];
