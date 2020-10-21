import React from 'react'
import {Helmet} from 'react-helmet'

function Home() {
  const carousel = [
    "software engineer",
    "student",
    "react.js fan",
    "computer scientist",
    "jayhawk",
    "seeking internship"
  ];
  console.log("test");
  return (<div>
    <Helmet>
      <title>Ethan Behrends | Home</title>
    </Helmet>
    <div id="landing">
      <div id="title">
        <div id="name">Ethan Behrends</div>
        <div id="titleCarousel">
          <div id="primary">software engineer</div>
          <div id="secondary"></div>
        </div>
      </div>
      <div id="sun"></div>
      <img src="./Assets/SVG/Asset 6.svg" id="foreground5"/>
      <img src="./Assets/SVG/campanile.svg" id="campanile"/>
      <img src="./Assets/SVG/Asset 4.svg" id="foreground4"/>
      <img src="./Assets/SVG/Asset 2.svg" id="foreground2"/>
      <img src="./Assets/SVG/Asset 13.svg" id="foreground1"/>
    </div>
    <div id="main">
      <div class="container">
        <h1>A little about me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div id="progressBar">
          <div id="runner">
            <img src="./Assets/SVG/runner/Asset 18.svg" id="head"></img>
            <img src="./Assets/SVG/runner/Asset 17.svg" id="body"></img>
            <img src="./Assets/SVG/runner/Asset 16.svg" id="arm"></img>
            <img src="./Assets/SVG/runner/Asset 16.svg" id="arm2"></img>
            <img src="./Assets/SVG/runner/Asset 15.svg" id="leg"></img>
            <img src="./Assets/SVG/runner/Asset 15.svg" id="leg2"></img>
          </div>
        </div>
        <h1>Resume</h1>
        <p>Interested in checking out my resume?
          <a href="resume"> View the PDF</a>
        </p>
      </div>
    </div>
  </div>)
}

export default Home
