<script>
    export let data
    const {alldata} = data
</script>
    <div class="page">
<pre>{JSON.stringify(data, null, 4)}</pre>gcc
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
