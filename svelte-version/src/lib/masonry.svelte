<script>
    export let  defaultDirection = "end", imgclass
    import { MasonryGrid } from "@egjs/svelte-grid";
    const gap = 5;
    const align = "center";
</script>

    <MasonryGrid
        { defaultDirection }
        id="images"
        class="container {imgclass ? imgclass : 'images'}"
        useResizeObserver
        observeChildren
        {gap}
        {align}
    >
    <slot />
    </MasonryGrid>
