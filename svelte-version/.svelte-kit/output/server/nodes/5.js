

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.5786914a.js","_app/immutable/chunks/scheduler.64baf27f.js","_app/immutable/chunks/index.4223bc80.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.21d245b2.js","_app/immutable/chunks/quinn-icon.171f6b5a.js"];
export const stylesheets = ["_app/immutable/assets/5.c9702685.css","_app/immutable/assets/quinn-icon.a284dd86.css"];
export const fonts = [];
