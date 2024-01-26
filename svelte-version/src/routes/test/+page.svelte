<script>
    import {base} from '$app/paths'
    import Gallery from '$lib/gallery.svelte'
export let data
    // $: console.log("page dot svelte", data)
    $: ( { galleryData } = data )
</script>
<main>
<Gallery { galleryData } />
</main>
<style>
    :global(body){
        background: #333;
        color: #ccc;
    }
main {
    display: flex;
        flex-direction: column;
    /* height: 90vh; */
    /* justify-content: center; */
    align-items: center;
}
</style>

