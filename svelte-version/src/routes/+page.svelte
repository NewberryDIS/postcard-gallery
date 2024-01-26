<script lang="ts">
	import { base } from '$app/paths';
	import SecretHeader from '$lib/secret-header.svelte';
	import Masonry from '$lib/masonry.svelte';
	import Footer from '$lib/footer.svelte';
	import { getHeight, holidays, imgUrl } from '$lib';
	export let data;
	const galleries = data.galleryData.items;
	console.log(data);

	const noimg = {
		title: 'View even more postcards at Newberry Digital Collections',
		link: 'https://collections.newberry.org/asset-management?WS=SearchResults#/DamView&VBID=2KXJA46IUGL5&PN=1&WS=SearchResults',
		pixel:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
		width: 300,
		height: 400
	};

	const hGalleries = galleries
		.filter((f) => holidays.includes(f.title))
		.sort((a, b) => holidays.indexOf(a.title) - holidays.indexOf(b.title));

	// ### Non Holiday Gallery Sorting:
	// start by filtering out the holidays
	// then a "global" sort by random
	// then loop over the array, putting the first 4 landscape postcards into arrayA (width > height), and the rest into arrayB,
	// then, merge arrays

	let nhGalleries = galleries
		.filter((f) => !holidays.includes(f.title))
		.sort(() => Math.random() - 0.5);

	const firstFourNHGalleries = [];
	const restOfNHGalleries = [];

	for (let a in nhGalleries) {
		if (firstFourNHGalleries.length < 4 && nhGalleries[a].width > nhGalleries[a].height) {
			firstFourNHGalleries.push(nhGalleries[a]);
		} else {
			restOfNHGalleries.push(nhGalleries[a]);
		}
	}

	nhGalleries = [...firstFourNHGalleries, ...restOfNHGalleries, noimg];

	// console.log(nhGalleries.map(nhg => [ nhg.title, nhg.width > nhg.height ? 'landscape' : 'portrait' ]))
</script>

<svelte:head>
	<title>Newberry Postcard Galleries</title>
</svelte:head>
<main class="main">
	<SecretHeader title="Newberry Postcard Gallery" />
	<div class="left">
		<div class="logo">
			<!-- <a href="https://www.newberry.org"> -->
			<a href="{base}/">
				<img
					class="biggo no-share"
					src="{base}/NewberryLogo.png"
					alt="Logo for the Newberry Library"
					height="60"
					width="300"
				/>
				<img
					class="smallo no-share"
					src="{base}/NLogo.png"
					alt="Logo for the Newberry Library"
					height="60"
					width="60"
				/>
			</a>
		</div>
		<header class="header">
			<section class="title">
				<h1 class="">Newberry Postcard Gallery</h1>
			</section>
			<aside class="text-content">
				<p class="text-lg">
					The vintage postcard images featured here are free to use and reuse. The Newberry believes
					that this content is in the public domain, and makes these digitized copies available
					without requiring fees or permissions. For more information, see our{' '}
					<a href="https://www.newberry.org/policies#open-access" target="_blank" class="llines">
						Open Access Policy
					</a>
					.
				</p>
				<p class="text-base">
					The Newberry houses one of the largest public collections of postcards and related
					materials in the United States. Learn more at our{' '}
					<a
						href="https://www.newberry.org/collection/subjects/postcards"
						target="_blank"
						class="llines"
					>
						Postcards information page
					</a>
					, browse more than{' '}
					<a
						href="https://collections.newberry.org/asset-management?WS=SearchResults#/DamView&VBID=2KXJA4UET6ZH&PN=1&WS=SearchResults"
						target="_blank"
						class="llines"
					>
						50,000 digitized postcards
					</a>{' '}
					at Newberry Digital Collections, or explore the themed sets featured here.
				</p>
				<p class="text-sm">
					With gratitude to the Library of Congress for its{' '}
					<a href="https://www.loc.gov/free-to-use/" target="_blank" class="llines">
						Free to Use and Reuse Sets
					</a>
					, from which this site is inspired.
				</p>
			</aside>
		</header>

		<Footer>
			<section class="tag-button">
				<p>
					The Newberry needs your help! Please assist with making our postcard collections more
					accessible at
					<a
						href="https://www.zooniverse.org/projects/newberry/postcard-tag"
						target="_blank"
						class="llines">Postcard Tag</a
					>
				</p>
			</section>
		</Footer>
	</div>
	<div class="right">
		<Masonry defaultDirection="start">
			{#each nhGalleries as item}
				<a
					href={item.link || `${base}/${item.slug}`}
					class={item.pixel ? 'noimg' : 'gallery-image'}
					target={item.pixel ? '_blank' : '_self'}
				>
					<img
						class="no-share"
						src={ item.pixel
							? item.pixel
							: `${base}/webp/${item.image}.webp` } 
						alt="a {item.title} postcard"
            onerror={ () => this.src=imgUrl(item.image, 'thumb') }
						height={getHeight(item.width, item.height)}
						width="300"
					/>
					<h3>{item.title}</h3>
				</a>
			{/each}
		</Masonry>
		<Masonry>
			{#each hGalleries as item}
				<a class="holiday" href="{base}/{item.slug}">
					<img
						class="no-share"
						src="{base}/webp/{item.image}.webp"
            onerror={ () => this.src=imgUrl(item.image, 'thumb') }
						alt="a {item.title} postcard"
						height={getHeight(item.width, item.height)}
						width="300"
					/>
					<h3>{item.title}</h3>
				</a>
			{/each}
		</Masonry>
	</div>
</main>

<style>
	.hiddenlink {
		position: fixed;
		left: 3px;
		bottom: 3px;
		z-index: 100000;
	}
	.tag-button {
		margin-inline: 16px;
		background: rgb(var(--bg-color-1));
	}
	.right {
		display: flex;
		flex-direction: column;
	}
</style>
