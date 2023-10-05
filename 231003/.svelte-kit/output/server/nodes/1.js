

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a832e3eb.js","_app/immutable/chunks/scheduler.aaf53295.js","_app/immutable/chunks/index.849bc1eb.js","_app/immutable/chunks/singletons.b1e82e22.js","_app/immutable/chunks/index.f80ab385.js","_app/immutable/chunks/paths.787e568d.js"];
export const stylesheets = [];
export const fonts = [];
