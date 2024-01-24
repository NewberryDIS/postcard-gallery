export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "postcard-gallery/_app",
	assets: new Set(["NLogo.png","NLogo_granite.png","NewberryLogo.png","NewberryLogo_granite.png","favicon.png","fonts/FlechaM-Regular.woff","fonts/StyreneB-Bold-Web.woff","fonts/StyreneB-Regular-Web.woff","fonts/signifier-bold.woff2","fonts/signifier-regular.woff2","madonna-holiday.gif","newberry.png","spinner.svg"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".woff2":"font/woff2",".gif":"image/gif",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.63dd7170.js","app":"_app/immutable/entry/app.8de806de.js","imports":["_app/immutable/entry/start.63dd7170.js","_app/immutable/chunks/scheduler.64baf27f.js","_app/immutable/chunks/singletons.a799fd17.js","_app/immutable/chunks/paths.85f455dd.js","_app/immutable/entry/app.8de806de.js","_app/immutable/chunks/index.488be997.js","_app/immutable/chunks/scheduler.64baf27f.js","_app/immutable/chunks/index.4223bc80.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[cat=cat]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"cat","matcher":"cat","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[id]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: cat } = await import ('./entries/matchers/cat.js')
			return { cat };
		}
	}
}
})();
