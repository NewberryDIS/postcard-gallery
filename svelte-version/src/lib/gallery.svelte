<script>
    import { base  } from '$app/paths'
    import { imgUrl, slugs } from '$lib'
    export let galleryData, postcards
    import { MasonryGrid } from "@egjs/svelte-grid";
    import Arrow from '$lib/icons/arrow.svelte'
    const gap = 5;
    const align = "center";
    const defaultDirection = "end" 

    let slug = 'valentines-day'
    // $: console.log(postcards)
    async function getPostcards(s) {
        slug = s
        galleryData = await fetch(`${base}/api/pc?slug=${s}`).then(r => r.json())
    }
    $: postcards = postcards || galleryData.postcards
</script>
<div class="dropdown">
    <button class="selected"><span>{slug}</span><Arrow /></button>
    <ul>
        {#each slugs as s}
            <li>
                <button class={s === slug ? 'active' : 'inactive' } on:click={() => getPostcards(s)}>
                    {s}
                    {#if s === slug}
                    <Arrow rotate />
    {/if}
            </button>
            </li>
        {/each}
    </ul>
</div>
<div class="gallery">
    <MasonryGrid
        { defaultDirection }
        id="images"
        class="container"
        useResizeObserver
        observeChildren
        {gap}
        {align}
    >
        {#if postcards}
            {#each postcards as postcard}
                <a
                    class={`tile ${postcard.pixel ? '' : ' image-tile'}`}
                    href="{base}/{postcard.repImage}"
                    data-alt={postcard.title}
                >
                    <img
                        src="{base}/webp/{postcard.repImage}.webp"
                        onerror={ () => this.src=imgUrl(postcard.repImage, 'thumb') }
                        width="200"
                        class="thumb no-share"
                        alt={postcard.title}
                    />
                </a>
            {/each}
        {/if}
    </MasonryGrid>
</div>
<style>
    .dropdown li {
        height: 0px;
        /* height: 22px; */

        transition-property: height;
        transition-duration: 300ms;
    }
    .dropdown :is(li, button){
        box-sizing: border-box;
        width: 100%;
    }
    .dropdown button {
        position: relative;
        font-family: 'styrene';
        font-size: 0.87rem;
        cursor: pointer;
        color: rgb(var(--fg-color-1));
        display: flex;
        justify-content: space-between;
        align-items: center;

        border: 1px solid rgb(var(--bg-color-2));

    }
    .dropdown button:not(.selected, .active){
        background: linear-gradient(
            to right,
            rgba(var(--bg-color-2), 1),
            rgba(var(--bg-color-2), 1)
            );
        background-size:   0 100%;
        background-position:  0 100%;
        background-repeat: no-repeat;
        transition: background-size 300ms;
    }
    /* .dropdown ul button.active, .dropdown ul li:has(.active) { */
    /*     display: none; */
    /* } */
    .dropdown ul button:hover,
    .dropdown ul button:focus  {
        background-size:  100% 100%;
    }
    .active, .selected {
        background: rgb(var(--bg-color-2));
        display: flex;
        justify-content: space-between;
    }
    .dropdown:hover li {
        height: 22px;
    }
    .dropdown:hover ul {
        opacity: 0.99;
        border: 1px solid rgb(var(--fg-1));
    }
    .dropdown ul {

        background: rgb(var(--bg-color-1));
        transition-property: opacity;
        transition-duration: 150ms;
        transition-delay: 100ms;
        opacity: 0.01;
        border: 0;
        position: absolute;
        top: 22px;
        list-style-type: none;
        width: 200px;
        padding: 3px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        gap: 3px;
    }
    .dropdown :is(ul, li) {

        margin: 0;
    }
    .dropdown {
        width: 200px;
        margin-block: 11px;
        z-index: 9001;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        gap: 3px;
    }
    .gallery {
        width: 450px;
        max-height: 100vh;
        overflow: auto;
    }
</style>
