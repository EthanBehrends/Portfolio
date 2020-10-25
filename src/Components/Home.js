import React from 'react'
import {Helmet} from 'react-helmet'
import {Container} from '@material-ui/core'
import SnowCont from './Snow'

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
  return (<div id="body">
    <Helmet>
      <title>Ethan Behrends | Home</title>
    </Helmet>
    <Container>
      <div id="name">
        <h1>
          Ethan Behrends
        </h1>
        <h2>software engineer</h2>
      </div>
      <SnowCont num={10} />
    </Container>
  </div>)
}

export default Home
