<script>
  import { base } from '$app/paths'
  export let title
</script>
<header class="secret-header">
  <a href="{ base }/">
    <img src="{base}/NLogo.png" alt="Logo for the Newberry Library" />
  </a>
  <h1>{title}</h1>
</header>
<style>

.secret-header {
  position: fixed;
  margin-top: 0;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  z-index: 15;
  flex-direction: row;
  background-color: rgb(var(--bg-color-1));
  justify-content: start;
  align-items: center;
  padding-inline: 8px;
}
.secret-header img {
  height: 32px;
}
.secret-header h1 {
  margin: 0;
  padding: 0;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}
</style>
