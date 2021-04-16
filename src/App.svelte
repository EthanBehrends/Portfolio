<script>
    import NameBubble from './NameBubble.svelte';
    import Lines from './Lines.svelte';
    import DarkMode from './DarkMode.svelte';
    let darkMode = false;
    let color="#E6EEF0";
    function toggleDarkMode() {
        console.log("test");
        if(darkMode) {
            darkMode = false;
            color="#E6EEF0";
        }
        else {
            darkMode =true;
            color= "#1C2021";
        }
    }

</script>

<DarkMode color={color} toggle={toggleDarkMode} />
    <div id="splash" >

        <NameBubble name={'Ethan Behrends'} title={'software engineer'} />
        <Lines color={color}/>
    </div>
    <div id="content" style="--backgroundColor: {color}">

    </div>

<style>
    #splash {
        max-width: 100vw;
        height: 100vh;
        position: relative;
        z-index:-1;
    }
    #content {
        width: 100vw;
        height: 100vh;
        margin-top: 80px;
        position: relative;
        z-index: -2;
        background-color: var(--backgroundColor);
    }
</style>