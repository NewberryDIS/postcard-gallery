

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fe4b4357.js","_app/immutable/chunks/scheduler.5a9f8fe9.js","_app/immutable/chunks/index.5ac71af3.js","_app/immutable/chunks/singletons.b3f4e721.js","_app/immutable/chunks/index.cd513c88.js","_app/immutable/chunks/paths.ab1e5827.js"];
export const stylesheets = [];
export const fonts = [];
