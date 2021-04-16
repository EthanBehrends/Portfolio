<script>
    export let name;
    export let title;
</script>

  <div id="shapeCont">
    <div id="shape"></div>
  </div>
    <div id="text">
      {name}
    <div id="subText">
        {title}
    </div>
  </div>

<style>
#text {
  font-weight: bold;
  font-size: 4em;
  color: #E6EEF0;
  text-shadow: 2px 2px 4px #1C2021;
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-38%, -60%);
}
#subText {
  font-weight: 300;
  font-size: .5em;
  text-indent: 2.5em;
}
#shapeCont {
  width: 400px;
  height: 400px;
  position:absolute;
  top:50%;
  left: 25%;
  transform: translate(-50%,-50%) skew(20deg);
}

#shape {
  background-color: #717475;
  opacity: .7;
  filter: blur(1px);
  width: 400px;
  height: 400px;
  border-radius: 35% 65%;
  animation: rotate 20s infinite linear;
}
@keyframes rotate {
  0% {
    transform: rotate3D(.2,.5,-2,0deg);
  }
  100% {
    transform: rotate3D(.2,.5,-2,360deg);
  }
}
</style>