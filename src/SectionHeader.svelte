<script>
    export let curText;
    export let newText;
    export let color;
    const delay = t => new Promise(resolve => setTimeout(resolve, t));
    let change =() => {
        document.getElementById('curText').animate([
            {top: '0px'},
            {top: '-30px'}
        ],
        {duration: 200});
        document.getElementById('newText').animate([
            {top: '30px'},
            {top: '0px'}
        ],
        {duration: 200});
        setTimeout(() => {
            curText = newText;
        },200);
    }

</script>
<div id="shCont" on:click={change} style="--color: {color}">
    <div id="curText">{curText}</div>
    <div id="newText">{newText}</div>
</div>
<style>
    #shCont {
        color: var(--color);
        position: absolute;
        top: 30px;
        left: 30px;
        overflow:hidden;
        height: 1.2em;
        width: 100px;
        z-index:20;
        text-align: center;
    }
    #curText {
        position: absolute;
        width: 100%;
        top:0px;
    }
    #newText {
        position:absolute;
        width: 100%;
        top:30px;
    }
</style>