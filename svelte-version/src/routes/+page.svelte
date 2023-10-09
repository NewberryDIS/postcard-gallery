<script>
    import { base } from '$app/paths'
    import SecretHeader from '$lib/secret-header.svelte'
    import Masonry from '$lib/masonry.svelte'
    import Footer from '$lib/footer.svelte'
    import { getHeight, holidays } from "$lib";
    export let data
    const galleries = data.galleryData

    import {goto } from '$app/navigation'

    const noimg = {
        title: "View even more postcards at Newberry Digital Collections",
        link: "https://collections.newberry.org/asset-management?WS=SearchResults#/DamView&VBID=2KXJA46IUGL5&PN=1&WS=SearchResults",
        pixel: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
        galRepreImageWidth: 300, 
        galRepreImageHeight: 400
    }
    const hGalleries = galleries.filter((f) => holidays.includes(f.title)).sort((a, b) => holidays.indexOf(a.title) - holidays.indexOf(b.title));
    // const nhGalleries = [ ...galleries.filter((f) => !holidays.includes(f.title)).sort(() => Math.round(Math.random())), noimg]
    const nhGalleries = [ ...galleries.filter((f) => !holidays.includes(f.title)).sort(() => Math.random() > 0.5 ? 1 : -1 ), noimg]

    console.log( nhGalleries )
    // const items = [...nhGalleries, ...hGalleries]
    let vaporwave = false
    function vaporclick (){
        if (!vaporwave){
            vaporwave = true
        } else {
            vaporwave = false
            goto("https://www.zooniverse.org/projects/newberry/postcard-tag")
        }
    }
</script>

<main>
    <SecretHeader title="Newberry Postcard Gallery" />
    <div class="left">

        <div class="logo">
            <a href="{ base }/">
                <img class="biggo" src="{ base }/NewberryLogo.png" alt="Logo for the Newberry Library" height="60" width="300" />
                <img class="smallo" src="{ base }/NLogo.png" alt="Logo for the Newberry Library" height="60" width="60" />
            </a>
        </div>
        <header>
            <section class="title">
                <h1 class="">Newberry
                    Postcard
                    Gallery </h1>
            </section>
            <aside class="text-content">
                <p class="text-lg">
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
                <p class="text-base">
                    The Newberry houses one of the largest public collections of
                    postcards and related materials in the United States. Learn more
                    at our{" "}
                    <a
                        href="https://www.newberry.org/collection/subjects/postcards"
                        target="_blank"
                        class="llines"
                    >
                        Postcards information page
                    </a>
                    , browse more than{" "}
                    <a
                        href="https://collections.newberry.org/asset-management?WS=SearchResults#/DamView&VBID=2KXJA4UET6ZH&PN=1&WS=SearchResults"
                        target="_blank"
                        class="llines"
                    >
                        50,000 digitized postcards
                    </a>{" "}
                    at Newberry Digital Collections, or explore the themed sets
                    featured here.
                </p>
                <p class="text-sm">
                    With gratitude to the Library of Congress for its{" "}
                    <a
                        href="https://www.loc.gov/free-to-use/"
                        target="_blank"
                        class="llines"
                    >
                        Free to Use and Reuse Sets
                    </a>
                    , from which this site is inspired.
                </p>
                <a
                    href="https://www.zooniverse.org/projects/newberry/postcard-tag"
                    target="_blank"
                class="text-button">
                The Newberry needs your help! Please assist with making our
                postcard collections more accessible!
                <p>Postcard Tag</p>
                </a>
                <!-- <button on:click={vaporclick} -->
                <!--     class={ `text-button ${vaporwave?"vaporcolors":""}` }> -->
                <!--     The Newberry needs your help! Please assist with making our -->
                <!--     postcard collections more accessible! -->
                <!--     <p>Postcard Tag</p> -->
                <!-- </button> -->
            </aside>
        </header>
        <Footer />
    </div>
    <div class="right">
        <Masonry defaultDirection="start">


            {#each nhGalleries as item}
                <a href={item.link || `${base}/${item.slug}`}  target={item.pixel ? '_blank' : '_self'} >
                    <img src="{ item.pixel ? item.pixel : item.title === 'Animated gifs' ? 'https://collections.newberry.org/AssetLink/136hd1108fjm3yp3aln81y6nenu04dqg.gif' : `https://collections.newberry.org/IIIF3/Image/${ item.title === 'Chicago' ? '2KXJ8ZSVHKQYC' : item.galRepreImageMEI}/full/300,/0/default.jpg`}" alt="a {item.title} postcard" height={getHeight( item.galRepreImageWidth, item.galRepreImageHeight )} width="300" >
                    <h3 class={item.pixel ? "noimg" : ""}>{item.title}</h3>
                </a>
            {/each}
        </Masonry>
        <Masonry>
            {#each hGalleries as item}
                <a class="holiday" href="{base}/{item.slug}">
                    <img src="https://collections.newberry.org/IIIF3/Image/{item.galRepreImageMEI}/full/300,/0/default.jpg" alt="a {item.title} postcard" height={getHeight( item.galRepreImageWidth, item.galRepreImageHeight )} width="300" >
                    <h3>{item.title}</h3>
                </a>
            {/each}
        </Masonry>
    </div>
</main>


<style>
.right {
    display: flex;
    flex-direction: column;
}
.text-button {
    cursor: pointer;
    text-align: center;
    font-family: styrene;
    font-size: 1.15rem;
    text-decoration: none;
    display: block;
    margin: 16px auto;
    padding: 24px;
    width: 80%;
    background: rgba(var(--fg-color-2), 0.77);
    color: rgb(var(--bg-color-1));
    transition: 300ms;
}
.text-button:hover {

    background: rgba(var(--fg-color-2), 1);
}
.text-button p {
    margin: 4px;
    font-size: 1.33rem;
}
/* just messing with Jen here */

.vaporcolors.text-button:hover {
    background: #150220;
    border: 3px solid rgba(22, 182, 212, 1);
    color:rgba(255,194,253,1); 
    text-shadow: 0 0 10px #f205ae,
    0 0 20px #f205ae,
    0 0 40px #f205ae,
    0 0 80px #f205ae,
    0 0 160px #f205ae,
    0 0 320px #f205ae,
    0 0 640px #f205ae;
    box-shadow: inset 0 0 10px rgba(113,213,255, 0.5),
    inset 0 0 20px rgba(113,213,255, 0.5),
    0 0 10px rgba(113,213,255, 0.3),
    0 0 20px rgba(113,213,255, 0.3),
    0 0 40px rgba(113,213,255, 0.3),
    0 0 80px rgba(113,213,255, 0.3),
    0 0 160px rgba(113,213,255, 0.3),
    0 0 320px rgba(113,213,255, 0.3);

    }
    .vaporcolors.text-button {
        background: #150220;

        color:rgba(255,194,253,0.6); 
        text-shadow: none;
        box-shadow: none;
        border: 3px solid rgba(22, 182, 212, 0.3);
    }
</style>
