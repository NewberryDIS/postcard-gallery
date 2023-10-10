

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ce33ec16.js","_app/immutable/chunks/scheduler.b9cf52ea.js","_app/immutable/chunks/index.8f3dcde5.js","_app/immutable/chunks/singletons.ca4f9307.js","_app/immutable/chunks/index.800adaad.js","_app/immutable/chunks/paths.1f6e9b32.js"];
export const stylesheets = [];
export const fonts = [];
