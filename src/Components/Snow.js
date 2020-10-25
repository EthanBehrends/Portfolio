import React from 'react'

function Snow() {
  const aniLen = 5;
  const startPos = "-" + (aniLen * Math.random()).toFixed(2) + "s";
  const aniWidth = (Math.random() * 50).toFixed(1);
  const aniOffset = Math.random() * (98 - aniWidth);
  const aniChoice = Math.floor(Math.random() * 4) + 1;
  const opacity = Math.random() * .75 + .25;
  const contStyle = {
    left: (aniOffset + "vw"),
    width: (aniWidth +"vw"),
    animationDelay: startPos,
    position: "absolute",
    top: "100%"
  }
  const snowStyle = {
    animationDelay: startPos,
    opacity: opacity
  }
  return(
    <div class="snowCont" style={contStyle}>
      <div class={"snow snow-" + aniChoice} style={snowStyle}></div>
    </div>
  )
}

function SnowCont(props) {
  let elements = []
  for (var i = 0; i < props.num; i++) {
    elements.push(<Snow key={i}></Snow>);
  }
  return(elements);
}

export default SnowCont
