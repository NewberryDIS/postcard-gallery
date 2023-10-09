<script>
    export let data
    import {packageExtractor, slugify} from '$lib'
import indivgal from './individGalleries.json'
import allraw from './allpostcardsRaw.json'
const postcards = allraw.map(p => ({
    title: p.APIResponse.Title,
    mei: p.APIResponse.MediaEncryptedIdentifier,
    repImage: p.APIResponse.Representative?.MediaEncryptedIdentifier,
    repImageTitle: p.APIResponse.Representative?.Title,
    repImageWidth: p.APIResponse.Representative?.MaxWidth,
    repImageHeight: p.APIResponse.Representative?.MaxHeight

}))
const keyrenames = []
let outputObj = {}
let outputArray = []
for (let i in indivgal) {
    let output = {
        title: indivgal[i].title,
        context: indivgal[i].context,
        slug: slugify(indivgal[i].title),
        galMEI: indivgal[i].galMEI,
        galRepreImageMEI: indivgal[i].galRepreImageMEI,
        galRepreImageHeight: indivgal[i].galRepreImageHeight,
        galRepreImageWidth: indivgal[i].galRepreImageWidth,
        galRepreImageTitle: indivgal[i].galRepreImageTitle
    
}
keyrenames.push([output.slug, output.galMEI])
    // const postcardMEIs = indivgal[i].postcards.map(p => p.pcardMEI)
    // const pcardlist = postcards.filter(p => postcardMEIs.indexOf(p.mei) > -1 )
    // let output = indivgal[i]
    // output.slug = slugify(output.title)
    // output.postcards = pcardlist
    outputObj[output.galMEI] = output
    outputArray.push(output)
}
const meilist = ["2KXJ8ZSAKDMYB",
    "2KXJ8ZSAKDQ5P",
    "2KXJ8ZSAKDC09",
    "2KXJ8ZSAKDKDK",
    "2KXJ8ZSAKDJCR",
    "2KXJ8ZSAKDE3I",
    "2KXJ8ZSAKD6V9",
    "2KXJ8ZSAKD0AX",
    "2KXJ8ZSAKDD11",
    "2KXJ8ZSAKDRBQ",
    "2KXJ8ZSAKDB98",
    "2KXJ8ZSAKDPK2",
    "2KXJ8ZSAKDX4O",
    "2KXJ8ZSAQLMR7",
    "2KXJ8ZSA9MW04",
    "2KXJ8ZSAKD58D"]

// const wgets = indivgal.map(i => i.postcards.map(it => it.pcardMEI) ).flat().map(i => "wget -O " + i + '.json "https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=' + i + '&PackageFields=Title,MediaEncryptedIdentifier&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight,CoreField.IIIFResourceType&format=json"')

//    https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=2KXJ8ZSUQWQWQ&PackageFields=Title,MediaEncryptedIdentifier&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight,CoreField.IIIFResourceType&format=json
</script>
    <!-- {#each allgallshort as gool} -->
    <!--     <p>wget -O {slugify(gool.title)} "{packageExtractor[0] + gool.mei + packageExtractor[1].replace('&token=',"") }"</p> -->
    <!-- {/each} -->
    <!-- {#each wgets as l}
    <li>{l}</li>
    {/each} -->
<p></p>
{#each keyrenames as kr }
<li>rename {kr[1]} {kr[0]}</li>
{/each}
<!-- <pre>{JSON.stringify(Object.keys(outputObj), null, 4)}</pre> -->
<pre>{JSON.stringify(outputArray, null, 4)}</pre>
