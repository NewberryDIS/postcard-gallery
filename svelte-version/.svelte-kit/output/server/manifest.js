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
		client: {"start":"_app/immutable/entry/start.9bdb9e74.js","app":"_app/immutable/entry/app.8180b39d.js","imports":["_app/immutable/entry/start.9bdb9e74.js","_app/immutable/chunks/scheduler.5a9f8fe9.js","_app/immutable/chunks/singletons.b97c873e.js","_app/immutable/chunks/index.cd513c88.js","_app/immutable/chunks/paths.60d3b6c2.js","_app/immutable/entry/app.8180b39d.js","_app/immutable/chunks/scheduler.5a9f8fe9.js","_app/immutable/chunks/index.5ac71af3.js"],"stylesheets":[],"fonts":[]},
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
