import { slugs } from '$lib'
/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
	return slugs.includes(param);
}
