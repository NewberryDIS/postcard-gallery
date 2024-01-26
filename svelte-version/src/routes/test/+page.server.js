import { base } from '$app/paths';
// export async function load({ params }) {
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const galleryData = await fetch(`${base}/api/pc?slug=valentines-day`).then((r) => r.json());
	return { galleryData };
}
