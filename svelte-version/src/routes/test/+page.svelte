<script>
    import {base} from '$app/paths'
    
    import EnvelopeIcon from '$icons/envelope-icon.svelte'
    import HyperlinkIcon from '$icons/hyperlink-icon.svelte'
    import LetterStampIcon from '$icons/letter-stamp-icon.svelte'
    import MobileMessagesIcon from '$icons/mobile-messages-icon.svelte'
    import MobileSmsMessagesIcon from '$icons/mobile-sms-messages-icon.svelte'
    import QuinnIcon from '$icons/quinn-icon.svelte'
    const icons = [
"envelope-icon",
"hyperlink-icon",
"letter-stamp-icon",
"mobile-messages-icon",
"mobile-sms-messages-icon",
"quinn-icon"
    ]

</script>
<main>
<table>
    {#each icons as icon}
    <tr>
        <td>
            <img class="icon"  src="{base}/{icon}.svg" alt=""/>
        </td>
        <td>
            <object title="{icon.replace('-',' ')} icon" type="image/svg+xml" data="{base}/{icon}.svg" class="icon">
                Your browser does not support SVG
            </object> 
        </td>
        <td>
            <h3>{icon}</h3>
        </td>
    </tr>
    {/each}
    <div class="icon"><EnvelopeIcon /><br /></div>
    <div class="icon"><HyperlinkIcon /><br /></div>
    <div class="icon"><LetterStampIcon /><br /></div>
    <MobileMessagesIcon /><br />
    <MobileSmsMessagesIcon /><br />
    <QuinnIcon /><br />
</table>
</main>
<style>
td {
    padding: 16px;
}
    :global(body){
        background: #333 !important;
        color: #ccc;
        --cool: #00ff00;
        --hot: #ff00ff;
    }
main {
    display: flex;
    height: 90vh;
    justify-content: center;
    align-items: center;
}
    .icon {
        color: #00ff00;
        width: 64px;
        height: 64px;
        fill: #ff00ff;
    }
    :global(.icon svg) {
        fill: #00ffff;
    }
</style>

