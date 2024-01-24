<script lang="ts">
	export let data;
	const { imageData, galleryData } = data;
	const galleries = galleryData.items;
	import { base } from '$app/paths';
	import SecretHeader from '$lib/secret-header.svelte';
	import Masonry from '$lib/masonry.svelte';
	import { imgUrl, getHeight, holidays } from '$lib';
	import NewberryDcLogo from '$lib/NewberryDCLogo.svelte';

	// console.log(data)
	// console.log(postcards)

	const noimg = {
		title: `View even more postcards at Newberry Digital Collections`,
		link: data.galleryData.galLink,
		pixel:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
		width: 300,
		height: 400
	};

	const hGalleries = galleries
		.filter((f) => holidays.includes(f.title))
		.sort((a, b) => holidays.indexOf(a.title) - holidays.indexOf(b.title))
		.map((h) => {
			h.holiday = true;
			return h;
		});

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

	const galleryGallery = [...firstFourNHGalleries, ...restOfNHGalleries, noimg, ...hGalleries];
</script>

<svelte:head>
	<title>Newberry Postcard Galleries</title>
</svelte:head>
<main>
	<div class="content">
		<SecretHeader title="Newberry Postcard Gallery" />
		<header>
			<!-- <a href="https://www.newberry.org"> -->
			<a href="{base}/">
				<NewberryDcLogo />
			</a>
			<h1>Newberry Postcard Gallery</h1>
		</header>
		<section>
			<img src={imgUrl(imageData.image)} alt="" class="featured-image" />
			<h2>{imageData.title}</h2>
		</section>
		<div class="share-buttons">
			<div class="send">
				<h3>Send</h3>
				<div class="button-wrapper">
					<button><i class="icon" />Email</button>
					<button><i class="icon" />Text Message</button>
					<button><i class="icon" />Copy Link</button>
				</div>
			</div>
			<div class="share">
				<h3>Share</h3>
				<div class="button-wrapper">
					<button><i class="icon" /> Facebook</button>
					<button><i class="icon" />Instagram</button>
					<button><i class="icon" />Xitter</button>
					<button><i class="icon" />Tumblr</button>
					<button><i class="icon" />Ask Quinn to Print it</button>
					<button><i class="icon" />Ask Quinn to Draw it</button>
				</div>
			</div>
			<div class="view">
				<h3>View</h3>
				<div class="button-wrapper">
					<button><i class="icon" />Newberry Digital Collections</button>
				</div>
			</div>
		</div>
	</div>
	<aside class="minigallery">
		<Masonry>
			{#each galleryGallery as item}
				<a
					href={item.link || `${base}/${item.slug}`}
					class="{item.pixel ? 'noimg' : ''} {item.holiday ? 'holiday' : ''}"
					target={item.pixel ? '_blank' : '_self'}
				>
					<img
						class="no-share"
						src={item.pixel
							? item.pixel
							: item.title === 'Animated gifs'
							? 'https://collections.newberry.org/AssetLink/136hd1108fjm3yp3aln81y6nenu04dqg.gif'
							: `https://collections.newberry.org/IIIF3/Image/${
									item.title === 'Chicago' ? '2KXJ8ZSVHKQYC' : item.image
							  }/full/300,/0/default.jpg`}
						alt="a {item.title} postcard"
						height={getHeight(item.width, item.height)}
						width="300"
					/>
					<h3>{item.title}</h3>
				</a>
			{/each}
		</Masonry>
	</aside>
</main>

<style>
	main {
		height: 100vh;
		/* border: 1px solid #f0f; */
		align-items: stretch;
	}
	main,
	header,
	.content,
	.share-buttons,
	.minigallery {
		display: flex;
	}
	header {
		justify-content: space-between;
		align-items: center;
		padding: 3px 11px;
	}
	.content {
		background: rgba(var(--bg-color-1));
		flex: 1;
		flex-direction: column;
		height: 100vh;
	}
	section {
		padding: 32px;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 99%;
		max-height: 99%;
		overflow: hidden;
	}
	section img {
		object-fit: contain;
		max-width: 100%;
		max-height: 100%;
	}

	.button-wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		align-items: space-between;
	}
	.button-wrapper button {
		border: 0;
		margin: 3px;
		padding: 0 11px 0 0;
		display: flex;
		/* justify-content: stretch;
		align-items: stretch; */
		line-height: 32px;
		border: 1px solid blue;
	}
	.icon {
		min-width: 32px;
		min-height: 32px;
		display: inline-block;
		margin-right: 11px;
		background: #f0f;
		border-right: 1px solid blue;
	}
	.send,
	.view {
		flex: 1;
	}
	.share {
		flex: 2;
	}
	.share-buttons > div {
		padding: 0 32px;
		border: 1px solid #f0f;
	}
	.share-buttons {
		align-items: stretch;
		justify-content: space-evenly;
	}
	h1 {
		font-size: 33px;
		line-height: 33px;
	}
	h2 {
		font-family: 'styrene';
		text-align: center;
		margin: 1rem;
	}
	h1,
	h2,
	h3 {
		margin: 0;
	}
	.minigallery {
		padding: 32px;
		min-height: 100vh;
		width: 100%;
		background: rgb(var(--bg-color-2));
		box-shadow: -10px 0 16px rgba(0, 0, 0, 0.1);
		position: relative;
		flex-basis: 400px;
		flex-direction: column;
	}
</style>
