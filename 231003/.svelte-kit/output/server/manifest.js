export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "postcard-gallery/_app",
	assets: new Set(["NLogo.png","NLogo_granite.png","NewberryLogo.png","NewberryLogo_granite.png","favicon.png","fonts/FlechaM-Regular.woff","fonts/StyreneB-Bold-Web.woff","fonts/StyreneB-Regular-Web.woff","fonts/signifier-bold.woff2","fonts/signifier-regular.woff2","madonna-holiday.gif","spinner.svg"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".woff2":"font/woff2",".gif":"image/gif",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.841c02ce.js","app":"_app/immutable/entry/app.77cbdada.js","imports":["_app/immutable/entry/start.841c02ce.js","_app/immutable/chunks/scheduler.aaf53295.js","_app/immutable/chunks/singletons.b1e82e22.js","_app/immutable/chunks/index.f80ab385.js","_app/immutable/chunks/paths.787e568d.js","_app/immutable/entry/app.77cbdada.js","_app/immutable/chunks/scheduler.aaf53295.js","_app/immutable/chunks/index.849bc1eb.js"],"stylesheets":[],"fonts":[]},
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
