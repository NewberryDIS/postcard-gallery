

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d5883fc6.js","_app/immutable/chunks/scheduler.64baf27f.js","_app/immutable/chunks/index.4223bc80.js","_app/immutable/chunks/singletons.a799fd17.js","_app/immutable/chunks/paths.85f455dd.js"];
export const stylesheets = [];
export const fonts = [];
