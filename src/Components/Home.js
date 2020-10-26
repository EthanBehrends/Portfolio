import React from 'react'
import {Helmet} from 'react-helmet'
import {Container, Grid} from '@material-ui/core'
import SnowCont from './Snow'
import {GitHub, LinkedIn} from '@material-ui/icons'

function Home() {
  /*const carousel = [
    "software engineer",
    "student",
    "react.js fan",
    "computer scientist",
    "jayhawk",
    "seeking internship"
  ];*/
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
      <SnowCont num={10}/>

      <Grid container="container" justify="center" style={{position: "absolute"}} alignItems="center" spacing={6}>
        <Grid item="item">
          <SocialLink url="https://github.com/EthanBehrends">
            <GitHub style={{color: "#bfc8e0", fontSize: "50px"}}/>
          </SocialLink>
        </Grid>
        <Grid item>
          <SocialLink url="https://linkedin.com/in/Ethan-Behrends">
            <LinkedIn style={{color: "#bfc8e0", fontSize: "50px"}}/>
          </SocialLink>
        </Grid>
      </Grid>
      <div id="content">
        <h1>Who I am</h1>
      </div>
    </Container>
  </div>)
}

export default Home

const SocialLink = (props) => (<a href={props.url} target='_blank' rel='noopener noreferrer'>
  {props.children}
</a>)
