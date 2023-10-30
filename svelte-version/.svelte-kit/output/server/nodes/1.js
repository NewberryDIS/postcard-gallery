

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e815326a.js","_app/immutable/chunks/scheduler.238e0827.js","_app/immutable/chunks/index.afd122aa.js","_app/immutable/chunks/singletons.254b16b7.js","_app/immutable/chunks/index.041b1acf.js","_app/immutable/chunks/paths.4ed2d28a.js"];
export const stylesheets = [];
export const fonts = [];
