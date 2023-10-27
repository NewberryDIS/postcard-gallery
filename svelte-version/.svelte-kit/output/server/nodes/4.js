

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pcard-titles/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.028e483c.js","_app/immutable/chunks/scheduler.238e0827.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.afd122aa.js"];
export const stylesheets = ["_app/immutable/assets/4.71f324d2.css"];
export const fonts = [];
