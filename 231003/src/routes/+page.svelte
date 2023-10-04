<script>
    import { base } from '$app/paths'
    import { getWidth, holidays, slugify } from "$lib";
    export let data

    const galleries = data.galleryData

    const hGalleries = galleries.filter((f) => holidays.includes(f.title));
    const nhGalleries = galleries.filter((f) => !holidays.includes(f.title));

</script>

<main>
    <div class="left">

        <div class="logo">
            <a href="{ base }/">
                <img height="60" width="300" src="{ base }/NewberryLogo.png" alt="logo of the Newberry Library" />
            </a>
        </div>
        <header>
            <section class="title">
                <h1 class="">Newberry</h1>
                <h1 class="">Postcard</h1>
                <h1 class="">Gallery</h1>
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
                <p class="text-base">
                    The Newberry needs your help! Please assist with making our
                    postcard collections more accessible:{" "}
                    <a
                        href="https://www.zooniverse.org/projects/newberry/postcard-tag"
                        target="_blank"
                        class="llines"
                    >
                        Postcard Tag
                    </a>
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
            </aside>
        </header>
    </div>
        <div class="right">
            <div class="horiz">
                {#each nhGalleries as gallery}
                    <a href="{ base }/{slugify(gallery.title)}"
                        class="tile nhtile">
                        <img src="https://collections.newberry.org/IIIF3/Image/{gallery.imageMEI}/full/,300/0/default.jpg" alt="a {gallery.title} postcard">
                        <h3>{gallery.title}</h3>
                    </a>
                {/each}
                <a
                    class="tile nhtile empty-tile"
                    target="_blank"
                    href="https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA4UE6RXM&PN=1"
                >
                    <h3>View even more postcards at Newberry Digital Collections</h3>
                </a>
            </div>
            <div class="horiz">
                <a href="{ base }" class="htile tile notile" tabIndex={-1}>
                    <img
                        src="./madonna-holiday.gif"
                        width={getWidth(498, 373)}
                        height="300"
                        alt="Madonna Ciccone dancing in a music video from the 1980s"
                    />
                </a>
                {#each hGalleries as gallery}
                    <a href="{ base }/{slugify(gallery.title)}"
                        class="tile htile">
                        <img src="https://collections.newberry.org/IIIF3/Image/{gallery.imageMEI}/full/,300/0/default.jpg" alt="a {gallery.title} postcard">
                        <h3>{gallery.title}</h3>
                    </a>
                {/each}
            </div>
        </div>
</main>


<style>
.horiz {
    display: flex;
    flex-flow: row wrap;
    gap: 8px;
    margin: 32px;
}
.vert {
    columns: 250px;
    column-gap: 20px;
}
.tile {
    position: relative;
    height: 300px;
    display: inline-block;
    border: 1px solid rgb(var(--fg-color-1));
}

.tile h3 {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    padding: 8px;
    display: flex;
    color: rgb(var(--bg-color-1));
}
.tile:not(.empty-tile) h3 {
    justify-content: flex-end;
    align-items: flex-end;
}
.nhgals,
.hgals,
.gal {
    margin: 32px;
}
.empty-tile {
    min-width: 200px;
}
.empty-tile h3 {
    justify-content: center;
    align-items: center;
    top: 0;
    text-align: center;
    background: rgb(var(--fg-color-2));
}
.nhtile.tile:not(.empty-tile) h3 {
    background: rgb(var(--fg-color-1));
}
.htile h3 {
    background: rgb(var(--park-green));
}
.notile {
    pointer-events: none;
    user-focus: none;
    user-select: none;
}
.linkout-tile {
    min-width: 225px;
    height: 300px;
}
.linkout-tile h3 {
    top: 0;
    justify-content: center;
    align-items: center;
}
</style>
