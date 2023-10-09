

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8bff975f.js","_app/immutable/chunks/scheduler.017b303e.js","_app/immutable/chunks/index.4cbd2ca2.js","_app/immutable/chunks/singletons.90e7955e.js","_app/immutable/chunks/index.739c3de6.js","_app/immutable/chunks/paths.864cf02d.js"];
export const stylesheets = [];
export const fonts = [];
