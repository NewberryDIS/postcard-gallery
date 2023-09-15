<script>
    import { page } from '$app/stores'
    export let data
</script>

<pre>{JSON.stringify(data, null, 4)}</pre>
<style>
    pre {
        background: #333;
        font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
        color: #ccc;
    }
    pre:hover, pre:focus { width: min-content; }
</style>
