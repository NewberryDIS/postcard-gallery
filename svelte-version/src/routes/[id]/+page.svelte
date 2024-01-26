<script lang="ts">
	export let data;
	const { imageData, galleryData } = data;
	const galleries = galleryData.items;
	import { base } from '$app/paths';
	import { imgUrl, getHeight, holidays } from '$lib';
	
    import Gallery from '$lib/gallery.svelte'
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
    <div class="logo-wrapper">
				<NewberryDcLogo />
    </div>
    <a href="{base}" class="header-home-link no-lines">
			<h1>Newberry Postcard Sender</h1>
    </a>
		</header>
	<div class="content {imageData.width > imageData.height ? 'landscape' : 'portrait' }">
		<section>
			<img src={imgUrl(imageData.image, 'large')} alt="" class="featured-image" />
			<h2>{imageData.title}</h2>
		</section>
		<ShareButtons />
	</div>
	<aside class="minigallery">
        <Gallery postcards={galleryGallery} />
	</aside>
</main>

<style>
  .header-home-link {
    text-decoration: none;
    color: rgba(var(--fg-color-1),1);
    transition: 200ms;

  }
  .header-home-link:hover {
    color: rgba(var(--splash-color),1);
  }
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
    z-index: 60;
		}
		header h1 {
			font-size: min(6.5vw, 25px);
			line-height: 25px;
		}
  .logo-wrapper {
      width: 42px;
      overflow: hidden;
  }
	}

	@media screen and (min-width: 1024px){
		main {
			flex-direction: row;
		}
		.content {
			position: sticky;
      flex: 3;
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
		/* flex-basis: 400px; */
      flex: 1;
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
		background: rgb(var(--bg-color-1));
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
    font-size: min(2vh, 3vw);
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
  .minigallery img , .noimg{
    width: min(100%, 300px);
    height: auto;
    object-fit: contain;
  }
</style>
