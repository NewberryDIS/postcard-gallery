import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.bbabef7a.js","_app/immutable/chunks/scheduler.b9cf52ea.js","_app/immutable/chunks/index.8f3dcde5.js"];
export const stylesheets = ["_app/immutable/assets/0.214fd037.css"];
export const fonts = [];
