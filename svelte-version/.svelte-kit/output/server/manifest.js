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
		client: {"start":"_app/immutable/entry/start.adcaf3f1.js","app":"_app/immutable/entry/app.a0e41e05.js","imports":["_app/immutable/entry/start.adcaf3f1.js","_app/immutable/chunks/scheduler.238e0827.js","_app/immutable/chunks/singletons.254b16b7.js","_app/immutable/chunks/index.041b1acf.js","_app/immutable/chunks/paths.4ed2d28a.js","_app/immutable/entry/app.a0e41e05.js","_app/immutable/chunks/scheduler.238e0827.js","_app/immutable/chunks/index.afd122aa.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
