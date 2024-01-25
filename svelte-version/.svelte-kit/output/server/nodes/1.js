

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0c7c7f5d.js","_app/immutable/chunks/scheduler.64baf27f.js","_app/immutable/chunks/index.4223bc80.js","_app/immutable/chunks/singletons.0a2c8def.js","_app/immutable/chunks/paths.21d245b2.js"];
export const stylesheets = [];
export const fonts = [];
