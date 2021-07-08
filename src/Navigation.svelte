<script>
export let color;
</script>

<div id="nav" style="--color: {color + 'AA'}">
<slot></slot>
</div>

<style>
    #nav {
        background-color: var(--color);
        position: fixed;
        top: 0;
        left: 0;
        width: 70px;
        height: 100vh;
        z-index: 20;
        display: flex;
        align-content: space-between;
    }
</style>