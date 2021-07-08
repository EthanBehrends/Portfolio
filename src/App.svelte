<script>
    import NameBubble from './NameBubble.svelte';
    import Lines from './Lines.svelte';
    import DarkMode from './DarkMode.svelte';
    import Header from './Header.svelte';
    import ButtonLink from './ButtonLink.svelte';
    import SectionHeader from './SectionHeader.svelte';
    import Navigation from './Navigation.svelte';
    import Progress from './Progress.svelte';

    let darkMode = false;
    let color="#E6EEF0";
    let invColor="#1C2021";
    let progressMeter = 0;
    function toggleDarkMode() {
        console.log("test");
        if(darkMode) {
            darkMode = false;
            color="#E6EEF0";
            invColor="#1C2021";
        }
        else {
            darkMode =true;
            color= "#1C2021";
            invColor= "#E6EEF0";
        }
    }
    setInterval(() => {
        progressMeter = (progressMeter + 1)%4;
    },1000);
</script>

<DarkMode color={color} toggle={toggleDarkMode} />
    <div id="splash" >
        <Lines color={color}/>
        <NameBubble name={'Ethan Behrends'} title={'software engineer'} />
        
    </div>
    <Navigation color={"#5C6A6E"}>
        <Progress num={4} curr={progressMeter}></Progress>
    </Navigation>
    <div class="content" style="--backgroundColor: {color + "E6"}">
        <SectionHeader curText={"ABOUT ME"} newText={"MY WORK"} color={invColor}></SectionHeader>
        <Lines color={"#5C6A6E"}/>
        <div class="flexCont">
            <div class="flexElem flexCont">
                <Header color={invColor}>Hey there,</Header>
                <p style="--textColor: {invColor}">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobor</p>
                <p style="--textColor: {invColor}">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse</p>
                <p style="--textColor: {invColor}">Quat, vel illum dolore eu feugiat nulla facilisis at vero eros et sequat.</p>
            </div>
            <div class="flexElem flexCont">
                <ButtonLink link="https://www.linkedin.com/in/ethan-behrends">LinkedIn</ButtonLink>
                <ButtonLink link="https://www.linkedin.com/in/ethan-behrends">Download my Resume</ButtonLink>
            </div>
        </div>
    </div>
    <div class="content" style="--backgroundColor: {color + "D6"}">

    </div>
    <div class="content" style="--backgroundColor: {color + "E6"}">
        <SectionHeader curText={"ABOUT ME"} newText={"MY WORK"} color={invColor}></SectionHeader>
        <Lines color={"#5C6A6E"}/>
        <div class="flexCont">
            <div class="flexElem flexCont">
                <Header color={invColor}>Let's get in touch!</Header>
                <p style="--textColor: {invColor}">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobor</p>
                <p style="--textColor: {invColor}">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse</p>
                <p style="--textColor: {invColor}">Quat, vel illum dolore eu feugiat nulla facilisis at vero eros et sequat.</p>
            </div>
            <div class="flexElem flexCont">
                <ButtonLink link="https://www.linkedin.com/in/ethan-behrends">LinkedIn</ButtonLink>
                <ButtonLink link="https://www.linkedin.com/in/ethan-behrends">Download my Resume</ButtonLink>
            </div>
        </div>
    </div>

<style>
    #splash {
        max-width: 100vw;
        height: 100vh;
        position: relative;
        z-index:-1;
        
    }
    .content {
        width: 100vw;
        min-height: 100vh;
        position: relative;
        padding: 4em;
        box-sizing: border-box;
        z-index: 2;
        background-color: var(--backgroundColor);
    }
    .flexCont {
        display: flex;
        width: 95%;
        min-height: 200px;
        position: relative;
        box-sizing: border-box;
        margin:auto;
        justify-content: center;
        align-content: space-around;
        flex-wrap: wrap;
    }
    .flexElem {
        flex-basis:600px;
    }
    p {
        color: var(--textColor);
        margin: 1em;
        text-indent: 2em;
        line-height: 1.4em;
    }
</style>