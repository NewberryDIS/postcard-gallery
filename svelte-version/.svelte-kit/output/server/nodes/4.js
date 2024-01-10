

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/testpage/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.494b14e0.js","_app/immutable/chunks/scheduler.5a9f8fe9.js","_app/immutable/chunks/index.5ac71af3.js"];
export const stylesheets = ["_app/immutable/assets/4.6a3d3829.css"];
export const fonts = [];
