import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.ae717265.js","_app/immutable/chunks/scheduler.017b303e.js","_app/immutable/chunks/index.4cbd2ca2.js"];
export const stylesheets = ["_app/immutable/assets/0.a5e00939.css"];
export const fonts = [];
