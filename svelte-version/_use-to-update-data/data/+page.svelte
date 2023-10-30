<script>
    import {slugify} from '$lib'
    // import allthree from './allpostcardsraw.json'
    export let data
    const {allltoo} = data
    const {allthree} = data
    //
    const postcardsRaw = allthree.map(a3 => a3.APIResponse)
    // console.log(postcardsRaw)

    const allData = allltoo.map(p => ({
        context: p.APIResponse["new.Context"],
        title: p.APIResponse.Title,
        slug: slugify( p.APIResponse.Title ),
        galLink: `https://collections.newberry.org/${p.APIResponse.Link}`,
        galMEI: p.APIResponse.MediaEncryptedIdentifier,
        galRepreImageMEI: p.APIResponse.Representative?.MediaEncryptedIdentifier,
        galRepreImageTitle: p.APIResponse.Representative?.Title,
        galRepreImageWidth: p.APIResponse.Representative?.MaxWidth,
        galRepreImageHeight: p.APIResponse.Representative?.MaxHeight,
        postcards: p.APIResponse.Content.map(topLevelPostcard => {
            let postcardRaw = postcardsRaw.filter(pcard => pcard.MediaEncryptedIdentifier === topLevelPostcard.MediaEncryptedIdentifier).pop()
            if (postcardRaw.Representative) {
                return {
                mei: postcardRaw.MediaEncryptedIdentifier,
                repImage:      postcardRaw.Representative?.MediaEncryptedIdentifier,
                repImageHeight:postcardRaw.Representative?.MaxHeight,
                repImageTitle: postcardRaw.Representative?.Title,
                repImageWidth: postcardRaw.Representative?.MaxWidth,
                title: postcardRaw.Title
                }
            } else {

                return {

                mei: postcardRaw.MediaEncryptedIdentifier,
                repImage:      postcardRaw.MediaEncryptedIdentifier,
                repImageHeight:postcardRaw.MaxHeight,
                repImageTitle: postcardRaw.Title,
                repImageWidth: postcardRaw.MaxWidth,
                title: postcardRaw.Title
                }
        }})

    }))
    
</script>

<div class="page">
    <!-- <pre>{JSON.stringify(data, null, 4)}</pre> -->
    <pre>{JSON.stringify(allData, null, 4)}</pre>
</div>

<style>
    :global(body){
        margin: 0;
        padding: 0;
    }
    .page {
        margin: 0;
        padding: 0;
        width: 100vw;
        min-height: 100vh;
        color: #ccc;
        background: #333;
    }
</style>
