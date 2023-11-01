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
		client: {"start":"_app/immutable/entry/start.80029c86.js","app":"_app/immutable/entry/app.a490be30.js","imports":["_app/immutable/entry/start.80029c86.js","_app/immutable/chunks/scheduler.238e0827.js","_app/immutable/chunks/singletons.7f586621.js","_app/immutable/chunks/index.041b1acf.js","_app/immutable/chunks/paths.63a12769.js","_app/immutable/entry/app.a490be30.js","_app/immutable/chunks/scheduler.238e0827.js","_app/immutable/chunks/index.afd122aa.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
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
				id: "/_use-to-update-data/data",
				pattern: /^\/_use-to-update-data\/data\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/pcard-titles",
				pattern: /^\/pcard-titles\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/[cat]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"cat","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
