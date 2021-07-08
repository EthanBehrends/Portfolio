<script>
export let num = 3;
export let curr=1;
function setFill(current) {
    Array.from(document.getElementById('cont').children).forEach(element => {
        element.classList.remove('filled');
    })
    Array.from(document.getElementById('cont').children)[current].classList.add('filled');
}
</script>

<div id="cont" on:click={setFill(curr)}>
    {#each Array(num) as n,i}
        <div class="dot"></div>
    {/each}
</div>

<style>
    #cont {
        display:flex;
        align-content: space-between;
        flex-wrap: wrap;
        width: 30px;
        height: 25vh;
        margin: auto;
    }
    .dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 4px solid #E6EEF0BB;
        background-color: #E6EEF000;
        transition: .2s;
    }
    .filled {
        background-color: #E6EEF0FF;
    }
</style>