<script>
    export let color='#E6EEF0';

</script>
  <div id="foreground" style="--lightdark: {color}">
    <div  class="line" id="one"></div>
    <div class="line" id="two"></div>
    <div class="line" id="three"></div>
    <div class="line" id="four"></div>
  </div>

<style>
    #foreground {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow:hidden;
}

.line {
  opacity: .7;
  width: 150vw;
  background-color: var(--lightdark);
  position:absolute;
  transition: .2s;
}
#one{
  transform-origin: 45% 20%;
  bottom: -350px;
  left: -10vw;
  height: 400px;
  animation: lines 10s infinite alternate ease-in-out;
}
#two {
  transform-origin: 55% 20%;
  bottom: -350px;
  left: -10vw;
  height: 400px;
  animation: lines 15s infinite alternate ease-in-out;
}
#three {
  top: 45%;
  left: 70%;
  height: 200px;
  transform: translateX(-100%) rotate(-10deg);
  display:none;
}
#four {
  top: 25%;
  right: 80%;
  height: 200px;
  transform: translateX(100%) rotate(-10deg);
  display:none;
}

@keyframes lines {
  from {
    transform: rotate(-5deg);
  }
  to {
    transform: rotate(-15deg);
  }
}
</style>