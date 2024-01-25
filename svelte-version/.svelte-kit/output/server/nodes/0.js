import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.ad589f36.js","_app/immutable/chunks/scheduler.64baf27f.js","_app/immutable/chunks/index.4223bc80.js"];
export const stylesheets = ["_app/immutable/assets/0.061784f1.css"];
export const fonts = [];
