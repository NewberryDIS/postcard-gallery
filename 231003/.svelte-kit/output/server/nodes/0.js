import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.21d226c9.js","_app/immutable/chunks/scheduler.aaf53295.js","_app/immutable/chunks/index.849bc1eb.js"];
export const stylesheets = ["_app/immutable/assets/0.2d8c91ee.css"];
export const fonts = [];
