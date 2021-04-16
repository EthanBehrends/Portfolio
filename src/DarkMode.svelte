<script>
    export let color;
    export let toggle;
</script>

<div id="selector" style="--color: {color}" on:click={toggle}></div>

<style>
    #selector {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: var(--color);
        transition: .2s;
    }
</style>