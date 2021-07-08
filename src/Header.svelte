<script>
    export let color = "#E6EEF0";
</script>

<h1 style="--color:{color}">
    <slot></slot>
</h1>

<style>

    h1 {
        margin: 1em;
        font-size: 3em;
        text-align: center;
        width: 100%;
        color: var(--color);
    }
</style>