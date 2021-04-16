<script>
    export let color='#E6EEF0';

</script>
  <div id="foreground" style="--lightdark: {color}">
    <div  class="line" id="one">
      
    </div><div class="line" id="two">
      
    </div>
      
    </div>

<style>
    #foreground {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  
}

.line {
  opacity: .7;
  width: 150vw;
  height: 400px;
  background-color: var(--lightdark);
  position:absolute;
  bottom: -350px;
  left: -10vw;
  transition: .2s;
}
#one{
  transform-origin: 45% 20%;
  animation: lines 10s infinite alternate ease-in-out;
}
#two {
  transform-origin: 55% 20%;
  animation: lines 15s infinite alternate ease-in-out;
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