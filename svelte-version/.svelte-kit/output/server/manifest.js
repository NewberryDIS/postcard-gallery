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
		client: {"start":"_app/immutable/entry/start.23874319.js","app":"_app/immutable/entry/app.cf84a101.js","imports":["_app/immutable/entry/start.23874319.js","_app/immutable/chunks/scheduler.b9cf52ea.js","_app/immutable/chunks/singletons.ca4f9307.js","_app/immutable/chunks/index.800adaad.js","_app/immutable/chunks/paths.1f6e9b32.js","_app/immutable/entry/app.cf84a101.js","_app/immutable/chunks/scheduler.b9cf52ea.js","_app/immutable/chunks/index.8f3dcde5.js"],"stylesheets":[],"fonts":[]},
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
