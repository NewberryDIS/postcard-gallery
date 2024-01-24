<script lang="ts">
	// import BiggerPicture from 'bigger-picture/svelte';
	// import "bigger-picture/css";
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import SecretHeader from '$lib/secret-header.svelte';
	import Masonry from '$lib/masonry.svelte';
	import Footer from '$lib/footer.svelte';
	import { imgUrl } from '$lib';
	export let data;

	// console.log(data)
	// console.log(postcards)
	// let bp, imageLinks

	const noimg = {
		title: `View even more ${data.galleryData.context} at Newberry Digital Collections`,
		link: data.galleryData.galLink,
		pixel:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
		galRepreImageWidth: 300,
		galRepreImageHeight: 400
	};

	const postcards = [...data.galleryData.postcards.sort(() => Math.random() - 0.5), noimg];
</script>

<svelte:head>
	<!-- head content -->
	<title>Newberry Library - {data.galleryData.context}</title>
</svelte:head>
<main class="main">
	<SecretHeader title={data.galleryData.context} />
	<div class="left">
		<div class="logo">
			<a href="{base}/">
				<img
					class="biggo"
					src="{base}/NewberryLogo.png"
					alt="Logo for the Newberry Library"
					height="60"
					width="300"
				/>
				<img
					class="smallo"
					src="{base}/NLogo.png"
					alt="Logo for the Newberry Library"
					height="60"
					width="60"
				/>
			</a>
		</div>
		<header class="header">
			<section>
				<h3>Free to Use and Reuse:</h3>
				<h1>
					{data.galleryData.context}
				</h1>
			</section>
			<aside class="text-content">
				<p class="text-lg">
					Featured here are some staff favorites from the Newberry’s collection. View more free to
					use and reuse images at our{' '}
					<a href="https://digital.newberry.org/postcard-gallery" class="llines">Postcard Gallery</a
					>.
				</p>
				<p class="text-base">
					The vintage postcard images featured here are free to use and reuse. The Newberry believes
					that this content is in the public domain, and makes these digitized copies available
					without requiring fees or permissions. For more information, see our{' '}
					<a href="https://www.newberry.org/policies#open-access" target="_blank" class="llines">
						Open Access Policy
					</a>
					.
				</p>
			</aside>
		</header>
		<Footer />
	</div>
	<div class="right">
		<Masonry>
			{#each postcards as postcard}
				{#if postcard.pixel}
					<a href={postcard.link} class="noimg" target="_blank">
						<img
							src={postcard.pixel}
							alt="a transparent pixel used to constrain the tile shape"
							height="400"
							width="300"
						/>
						<h3>{postcard.title}</h3>
					</a>
				{:else}
					<a
						class={`tile ${postcard.pixel ? '' : ' image-tile'}`}
						href="{base}/{postcard.repImage}"
						data-alt={postcard.title}
					>
						<img
							src={imgUrl(postcard.repImage, 'thumb')}
							width="300"
							class="thumb no-share"
							alt={postcard.title}
						/>
					</a>
				{/if}
			{/each}
		</Masonry>
	</div>
	<div class="share-btnz">
		iiii
		<div class="sharethis-inline-share-buttons" />
	</div>
</main>

<style>
	.share-btnz {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 10000;
	}
	.right {
		position: relative;
	}
	/* .right header { */
	/*     display: flex; */
	/*     flex-direction: row; */
	/*     align-items: center; */
	/*     justify-content: center; */
	/*     position: absolute; */
	/*     top: 0; */
	/*     left: 0; */
	/*     right: 0; */
	/*     height: 25px; */
	/*     padding: 0; */
	/*     background-color: rgba(var(--bg-color-1), 1); */
	/*     border-bottom: 1px solid rgb(var(--bg-color-1));  */
	/*     margin: 0; */
	/* } */
	/* .right header a, .right header span  { */
	/*     height: 77%; */
	/*     font-family: 'styrene'; */
	/*     text-align: center; */
	/*     white-space: nowrap; */
	/*     overflow: hidden; */
	/*     text-overflow: ellipsis; */
	/**/
	/* } */
	/* #no-link { */
	/*     background: rgba(0,0,0,0); */
	/* } */
	.noimg {
		max-width: 300px;
		max-height: 400px;
	}
	.tile {
		border: 0;
		margin: 0;
		padding: 0;
		min-height: 200px;
		/* border: 1px solid black; */
		width: 300px;
		display: inline-block;
		background-image: url('/spinner.svg');
		background-position: center;
		background-repeat: no-repeat;
	}
	:global(.sansie) {
		font-family: 'styrene';
		text-decoration: underline;
	}
</style>
