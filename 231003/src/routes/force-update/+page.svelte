<script>
    import { base } from '$app/paths'
    export let data
    // $: console.log(data)
    let updateList = ['2KXJ8ZSAKD6V9']
    $: allNone = updateList.length === data.allGalleries.length
    $: galleriesToBeUpdated = data.allGalleries.filter(f => updateList.includes(f.mei)).map(g => g.title).join(', ')
    function toggleAll(){
        if ( allNone ){
            updateList = []
        } else {
            updateList = data.allGalleries.map(g => g.mei)
        }
    }
    async function updateRedis(){
        const apiUrl = `${base}/api/update?mei=${updateList.join(',')}`
        console.log("apiUrl", apiUrl)
        fetch(apiUrl).then(response => response.json().then(j => console.log(j)))
    }
</script>
<main>
    <div class="key">
<h1> Galleries to be updated: {galleriesToBeUpdated ? `${ galleriesToBeUpdated }; (${updateList.length})` : "None.  Select some."}</h1>
        <small>{updateList.join(', ')}</small>
        <button on:click={updateRedis}>Update now</button>
    </div>
<ul>
    <li>
        <label>
            <input type="checkbox"
                on:click={toggleAll}
                checked={ allNone }
            />
            Select {allNone ? 'none' : 'all'}
        </label>
    </li>

    {#each data.allGalleries as gallery}
        <li>
            <label>
                <input 
                    type="checkbox"
                    name="galleryToBeUpdated"
                    value={gallery.mei}
                    bind:group={updateList}
                /> 
                {gallery.title}
            </label>
        </li>
    {/each}
</ul>
</main>
<!-- {#if !ready} -->
<!--     data is updating... -->
<!-- {:else} -->
<!--     <pre>{JSON.stringify(data, null, 4)}</pre> -->
<!-- {/if} -->


<style>
main {
    width: 70%; 
    margin: 64px auto;
    display: flex;
    flex-direction: row-reverse;
    /* justify-content: center; */
    /* align-items: center; */
    gap: 32px;

}
.key {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
}
h1 {
    margin: 0;
}
    ul {
    margin: 0;
        list-style-type: none;
    }
    :global(body){
        color: #ccc;
        background: #333;
    }
small, ul{  
font-family: monospace;
 }
    </style>
