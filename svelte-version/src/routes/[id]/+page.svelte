<script lang="ts">
	export let data;
	const { imageData, galleryData } = data;
	const galleries = galleryData.items;
	import { base } from '$app/paths';
	import { imgUrl, getHeight, holidays } from '$lib';
	
	import Masonry from '$lib/masonry.svelte';
	import SecretHeader from '$lib/secret-header.svelte';
	import NewberryDcLogo from '$lib/NewberryDCLogo.svelte';
	import ShareButtons from '$lib/share-buttons.svelte';

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
		<header>
				<NewberryDcLogo />
			<h1>Newberry Postcard Sender</h1>
		</header>
	<div class="content {imageData.width > imageData.height ? 'landscape' : 'portrait' }">
		<section>
			<img src={imgUrl(imageData.image)} alt="" class="featured-image" />
			<h2>{imageData.title}</h2>
		</section>
		<ShareButtons />
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
	.portrait {
	}
	.landscape {
	}
	@media screen and (max-width: 1023px){
		main {
			flex-direction: column;
		}
		.content {
			position: relative;
		}
		main, .content, .minigallery {
			height: auto;
			min-height: 99%;
			max-height: 99%;
		}
		section {
			max-height: 70vh;
		}
		section img {
			width: 100%;
			height: 100%;
		}
		.minigallery {
			flex-basis: unset;
		}
		header {
			height: 33px;
		}
		header h1 {
			font-size: 25px;
			line-height: 25px;
		}
	}

	@media screen and (min-width: 1024px){
		main {
			flex-direction: row;
		}
		.content {
			position: sticky;
		}
		main {
			min-height: 100vh;
		} 
		.content, .minigallery {
		height:calc(100vh - 66px);
		max-width: 99%;
		max-height: 99%;
		}
		section img {
			width: auto;
			height: auto;
		}
		.minigallery {
		flex-basis: 400px;
		}
		header {
			height: 66px;
		}
		header h1 {
			font-size: 25px;
			line-height: 25px;
		}
	}
	main {
		background: rgba(var(--bg-color-1));
		/* border: 1px solid #f0f; */
		align-items: stretch;
		padding-top: 66px;
	}
	main,
	header,
	.content,
	.minigallery {
		display: flex;
	}
	header {
		position: fixed;
		background: rgb(vaR(--bg-color-1));
		top: 0;
		right: 0;
		left: 0;
		justify-content: space-between;
		align-items: center;
		padding: 3px 11px;
	}
	.content {
		flex: 1;
		flex-direction: column;
	}
	section {
		padding: 32px;
		/* flex: 1; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	section img {
		object-fit: contain;
		max-width: 100%;
		max-height: 100%;
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
		min-height: calc(100vh - 66px);
		width: 100%;
		background: rgb(var(--bg-color-2));
		box-shadow: -10px 0 16px rgba(0, 0, 0, 0.1);
		position: relative;
		flex-direction: column;
	}
</style>
