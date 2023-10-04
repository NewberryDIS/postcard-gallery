export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "postcard-gallery/_app",
	assets: new Set(["NLogo.png","NLogo_granite.png","NewberryLogo.png","NewberryLogo_granite.png","favicon.png","fonts/FlechaM-Regular.woff","fonts/StyreneB-Bold-Web.woff","fonts/StyreneB-Regular-Web.woff","fonts/signifier-bold.woff2","fonts/signifier-regular.woff2","madonna-holiday.gif"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".woff2":"font/woff2",".gif":"image/gif"},
	_: {
		client: {"start":"_app/immutable/entry/start.4c1c015a.js","app":"_app/immutable/entry/app.0949897f.js","imports":["_app/immutable/entry/start.4c1c015a.js","_app/immutable/chunks/scheduler.aaf53295.js","_app/immutable/chunks/singletons.736085a8.js","_app/immutable/chunks/index.f80ab385.js","_app/immutable/chunks/paths.a0e450d2.js","_app/immutable/entry/app.0949897f.js","_app/immutable/chunks/scheduler.aaf53295.js","_app/immutable/chunks/index.cb92cc6d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			{
				id: "/api/update",
				pattern: /^\/api\/update\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/update/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
