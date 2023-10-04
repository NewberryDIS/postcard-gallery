

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.eade4bb7.js","_app/immutable/chunks/scheduler.aaf53295.js","_app/immutable/chunks/index.849bc1eb.js","_app/immutable/chunks/singletons.7242e7e6.js","_app/immutable/chunks/index.f80ab385.js","_app/immutable/chunks/paths.d8151e3f.js"];
export const stylesheets = [];
export const fonts = [];
