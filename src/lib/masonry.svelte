<script>
    export let items, defaultDirection = "end"
    import { MasonryGrid } from "@egjs/svelte-grid";
    const gap = 5;
    const align = "center";
</script>

<div id="images" class="images">
    <MasonryGrid
        { defaultDirection }
        id="images"
        class="container"
        useResizeObserver
        observeChildren
        {gap}
        {align}
    >
    <slot />
    </MasonryGrid>
</div>
