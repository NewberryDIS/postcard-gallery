import * as server from '../entries/pages/_id_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.861b7c0e.js","_app/immutable/chunks/scheduler.64baf27f.js","_app/immutable/chunks/index.4223bc80.js","_app/immutable/chunks/masonry.ec0729de.js","_app/immutable/chunks/paths.85f455dd.js","_app/immutable/chunks/index.488be997.js"];
export const stylesheets = ["_app/immutable/assets/4.fccc1409.css","_app/immutable/assets/masonry.516314ae.css"];
export const fonts = [];
