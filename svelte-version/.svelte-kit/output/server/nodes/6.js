

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.2db824ba.js","_app/immutable/chunks/scheduler.238e0827.js","_app/immutable/chunks/index.afd122aa.js"];
export const stylesheets = ["_app/immutable/assets/6.ec7587cc.css"];
export const fonts = [];
