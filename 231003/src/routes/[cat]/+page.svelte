<script>
    import BiggerPicture from 'bigger-picture/svelte';
    import "bigger-picture/css";
    import { onMount } from 'svelte'
    import { base } from '$app/paths'
    import { imgUrl, getWidth } from '$lib'
    export let data
    const { postcards } = data.galleryData
    
    // console.log(data)
    let bp, imageLinks

    onMount(() => {
        bp = BiggerPicture({
	        target: document.body,
        })
        imageLinks = document.querySelectorAll('#images > a')
    }) 
    function openGallery(e) {
	    e.preventDefault()
        if (e.currentTarget !== null) {
          bp.open({
            intro: "fadeup",
            items: imageLinks,
            el: e.currentTarget,
          });
        }
    }
</script>

<main>
    <div class="left">
        <div class="logo">
            <a href="{ base }/">
                <img height="60" width="300" src="{ base }/NewberryLogo.png" alt="Logo for the Newberry Library" />
            </a>
        </div>
        <header class="title">
            <h3>Free to Use and Reuse:</h3>
            <h1>
                {data.galleryData.context}
            </h1>
            <section class="text-content">
                <p class="text-lg">
                    Featured here are some staff favorites from the Newberry’s
                    collection. View more free to use and reuse images at our{" "}
                    <a
                        href="https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA4UE6RXM&PN=1"
                        target="_blank"
                        class="llines"
                    >Postcard Gallery</a>.
                </p>
                <p class="text-base">
                    The vintage postcard images featured here are free to use and
                    reuse. The Newberry believes that this content is in the public
                    domain, and makes these digitized copies available without
                    requiring fees or permissions. For more information, see our{" "}
                    <a
                        href="https://www.newberry.org/policies#open-access"
                        target="_blank"
                        class="llines"
                    >
                        Open Access Policy
                    </a>
                    .
                </p>
            </section>
        </header>
    </div>
    <div class="right" id="images">
        {#each postcards as postcard}
            <a class="tile" 
                on:click={openGallery}
                href={imgUrl(postcard.repImage)}
                data-img={imgUrl(postcard.repImage)}
                data-thumb={imgUrl(postcard.repImage, 'thumb')}
                data-height={postcard.repImageHeight}
                data-width={postcard.repImageWidth}
                data-alt={postcard.title}
                data-caption="{postcard.title}.  View at <a href='{postcard.repImage}' class='llines'>Newberry Digital Collections</a>"
            >
                <img src={imgUrl(postcard.repImage, 'thumb')} 
                    width={getWidth(postcard.repImageWidth, postcard.repImageHeight)}
                    height={300}
                    alt={postcard.title}
                />
            </a>
        {/each}
    </div>
</main>
<style>
    .tile {
        bordeR: 0;
        margin: 0;
        padding: 0;
        height: 300px;
        display: inline-block;
        background-image: url('/spinner.svg');
        background-position: center;
        background-repeat: no-repeat;

    }
</style>
