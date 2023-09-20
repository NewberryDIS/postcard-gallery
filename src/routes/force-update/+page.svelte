<script>
    export let data
    $: ready = !!data 
</script>
{#if !ready}
data is updating...
{:else}
<pre>{JSON.stringify(data, null, 4)}</pre>
{/if}


    <style>
   * {
        color: #ccc;
        background: #333;
        }
    </style>
