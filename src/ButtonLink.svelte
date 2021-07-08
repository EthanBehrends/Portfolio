<script>
    export let link="#";
    export let color="#E6EEF0";
    export let backgroundColor="#5C6A6E";
</script>

<a target ="_blank" href={link} style="--color: {color};--backgroundColor:{backgroundColor}"><slot></slot></a>

<style>
a {
    text-decoration: none;
    color: var(--color);
    background-color: var(--backgroundColor);
    padding: .5em;
    font-size: 1.2em;
    border-radius: .5em;
    text-align:center;
    min-width: 300px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: inset 0 0 10px #404A4D, 0 0 0px #1696BA;
    transition: .2s;

}
a:hover {
    transform: translate(2px,2px);
    box-shadow: inset 0 0 30px #404A4D, 0 0 0px #1696BA;
}
a:active {
    box-shadow: inset 0 0 10px #404A4D, 0 0 10px #1696BA;
}
</style>