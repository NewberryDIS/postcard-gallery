

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ce51b8fd.js","_app/immutable/chunks/scheduler.238e0827.js","_app/immutable/chunks/index.afd122aa.js","_app/immutable/chunks/singletons.1484bd06.js","_app/immutable/chunks/index.041b1acf.js","_app/immutable/chunks/paths.3b4e2cbd.js"];
export const stylesheets = [];
export const fonts = [];
