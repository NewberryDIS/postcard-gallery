
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const CTX_API_TOKEN: string;
	export const KV_REST_API_READ_ONLY_TOKEN: string;
	export const KV_REST_API_TOKEN: string;
	export const KV_REST_API_URL: string;
	export const KV_URL: string;
	export const NX_DAEMON: string;
	export const TURBO_REMOTE_ONLY: string;
	export const TURBO_RUN_SUMMARY: string;
	export const VERCEL: string;
	export const VERCEL_ENV: string;
	export const VERCEL_GIT_COMMIT_AUTHOR_LOGIN: string;
	export const VERCEL_GIT_COMMIT_AUTHOR_NAME: string;
	export const VERCEL_GIT_COMMIT_MESSAGE: string;
	export const VERCEL_GIT_COMMIT_REF: string;
	export const VERCEL_GIT_COMMIT_SHA: string;
	export const VERCEL_GIT_PREVIOUS_SHA: string;
	export const VERCEL_GIT_PROVIDER: string;
	export const VERCEL_GIT_PULL_REQUEST_ID: string;
	export const VERCEL_GIT_REPO_ID: string;
	export const VERCEL_GIT_REPO_OWNER: string;
	export const VERCEL_GIT_REPO_SLUG: string;
	export const VERCEL_URL: string;
	export const SHELL: string;
	export const WINDOWID: string;
	export const COLORTERM: string;
	export const FUNCNEST: string;
	export const I3SOCK: string;
	export const NODE: string;
	export const LC_ADDRESS: string;
	export const LC_NAME: string;
	export const XDG_CONFIG_HOME: string;
	export const npm_config_local_prefix: string;
	export const DESKTOP_SESSION: string;
	export const LC_MONETARY: string;
	export const EDITOR: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const LOGNAME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XDG_SESSION_TYPE: string;
	export const PNPM_HOME: string;
	export const XAUTHORITY: string;
	export const DESKTOP_STARTUP_ID: string;
	export const TERMINAL: string;
	export const WINDOWPATH: string;
	export const MOTD_SHOWN: string;
	export const GDM_LANG: string;
	export const HOME: string;
	export const USERNAME: string;
	export const LANG: string;
	export const LC_PAPER: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const CSRVR: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const LC_IDENTIFICATION: string;
	export const npm_package_name: string;
	export const npm_config_prefix: string;
	export const USER: string;
	export const COLORFGBG: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const LC_TELEPHONE: string;
	export const LC_MEASUREMENT: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const NODE_PATH: string;
	export const MKLROOT: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_json: string;
	export const LC_TIME: string;
	export const BUN_INSTALL: string;
	export const GTK3_MODULES: string;
	export const BROWSER: string;
	export const PATH: string;
	export const GDMSESSION: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const MAIL: string;
	export const npm_node_execpath: string;
	export const LC_NUMERIC: string;
	export const OLDPWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		CTX_API_TOKEN: string;
		KV_REST_API_READ_ONLY_TOKEN: string;
		KV_REST_API_TOKEN: string;
		KV_REST_API_URL: string;
		KV_URL: string;
		NX_DAEMON: string;
		TURBO_REMOTE_ONLY: string;
		TURBO_RUN_SUMMARY: string;
		VERCEL: string;
		VERCEL_ENV: string;
		VERCEL_GIT_COMMIT_AUTHOR_LOGIN: string;
		VERCEL_GIT_COMMIT_AUTHOR_NAME: string;
		VERCEL_GIT_COMMIT_MESSAGE: string;
		VERCEL_GIT_COMMIT_REF: string;
		VERCEL_GIT_COMMIT_SHA: string;
		VERCEL_GIT_PREVIOUS_SHA: string;
		VERCEL_GIT_PROVIDER: string;
		VERCEL_GIT_PULL_REQUEST_ID: string;
		VERCEL_GIT_REPO_ID: string;
		VERCEL_GIT_REPO_OWNER: string;
		VERCEL_GIT_REPO_SLUG: string;
		VERCEL_URL: string;
		SHELL: string;
		WINDOWID: string;
		COLORTERM: string;
		FUNCNEST: string;
		I3SOCK: string;
		NODE: string;
		LC_ADDRESS: string;
		LC_NAME: string;
		XDG_CONFIG_HOME: string;
		npm_config_local_prefix: string;
		DESKTOP_SESSION: string;
		LC_MONETARY: string;
		EDITOR: string;
		GTK_MODULES: string;
		XDG_SEAT: string;
		PWD: string;
		LOGNAME: string;
		XDG_SESSION_DESKTOP: string;
		XDG_SESSION_TYPE: string;
		PNPM_HOME: string;
		XAUTHORITY: string;
		DESKTOP_STARTUP_ID: string;
		TERMINAL: string;
		WINDOWPATH: string;
		MOTD_SHOWN: string;
		GDM_LANG: string;
		HOME: string;
		USERNAME: string;
		LANG: string;
		LC_PAPER: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		CSRVR: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		LC_IDENTIFICATION: string;
		npm_package_name: string;
		npm_config_prefix: string;
		USER: string;
		COLORFGBG: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		LC_TELEPHONE: string;
		LC_MEASUREMENT: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		NODE_PATH: string;
		MKLROOT: string;
		DEBUGINFOD_URLS: string;
		npm_package_json: string;
		LC_TIME: string;
		BUN_INSTALL: string;
		GTK3_MODULES: string;
		BROWSER: string;
		PATH: string;
		GDMSESSION: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		MAIL: string;
		npm_node_execpath: string;
		LC_NUMERIC: string;
		OLDPWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
