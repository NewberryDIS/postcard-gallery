<script>
    import alldata from './alldata.json'
</script>


<ul class="outerest">
    {#each alldata as ad}
    <li>
        <details open>
            <summary>
                <h1 on:click={hideSection(ad.galMEI)}>{ad.title}</h1>
            </summary>
            <ul class="inner" id={ad.galMEI}>
                {#each ad.postcards as p}
                    <li>
                        <a href="https://collections.newberry.org/asset-management/{p.mei}" target="_blank">
                            <img src="https://collections.newberry.org/IIIF3/Image/{p.repImage}/square/200,/0/default.jpg" alt="" />
                            <div class="title">
                                <h5>
                                    {p.title}
                                </h5>
                            </div>
                        </a>
                    </li>
                {/each}
            </ul>
        </details>
        {/each}
</ul>
<style>
.outerest {

    padding: 32px;
    margin: 0;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(var(--fg-color-1),0.6);
}
details > summary {
    list-style: none;
}

details summary::-webkit-details-marker {
    display: none;
}
h1 {
    border-top: 3px solid rgb(var(--fg-color-1));
    border-bottom: 3px solid rgb(var(--fg-color-1));
}
ul, li {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
ul.inner {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: repeat(auto-fill, 250px);
    gap: 1rem;

}
.inner li, .inner img, .inner a {
    width: 100%;
    height: 100%;
}
.inner li {
    position: relative;
}
img { 
    object-fit: cover;
    object-position: center;
}
div.title {
    font-size: 20px;

    padding: 0;
    margin: 0;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(var(--fg-color-1),0.8);

    transition: 150ms;
}
div.title:hover {

    color: rgba(var(--fg-color-1), 1);
    background: rgba(var(--fg-color-1),0.3);
}
div.title:hover h5 {

    background: rgb(var(--granite));
}
h5 {
    width: auto !important;
    height: auto !important;

    padding: 8px;
    margin: 0;
}
a {
    color: #ccc;
    text-decoration: none;

}
:global(body){
    background: rgba(var(--fg-color-2), 0.77);
    color: rgba(var(--bg-color-1), 1);
    padding: 32px;
}

</style>
