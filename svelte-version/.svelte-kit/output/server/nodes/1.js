

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.795a9960.js","_app/immutable/chunks/scheduler.5a9f8fe9.js","_app/immutable/chunks/index.5ac71af3.js","_app/immutable/chunks/singletons.cf1b27ff.js","_app/immutable/chunks/index.cd513c88.js","_app/immutable/chunks/paths.6aa5f08d.js"];
export const stylesheets = [];
export const fonts = [];
