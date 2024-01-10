

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f641d7dc.js","_app/immutable/chunks/scheduler.946d4e9f.js","_app/immutable/chunks/index.19624394.js","_app/immutable/chunks/singletons.74dc03d2.js","_app/immutable/chunks/index.12cfcd5c.js","_app/immutable/chunks/paths.70a1527c.js"];
export const stylesheets = [];
export const fonts = [];
