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
    <div id="landing">
      <Container>
        <div id="name">
          <h1>
            Ethan Behrends
          </h1>
          <h2>software engineer</h2>
        </div>
        <SnowCont num={10}/>
        <div class="socialBar">
          <Grid container="container" justify="center" alignItems="center" spacing={6}>
            <Grid item="item">
              <SocialLink url="https://github.com/EthanBehrends">
                <GitHub style={{
                    color: "#bfc8e0",
                    fontSize: "50px"
                  }}/>
              </SocialLink>
            </Grid>
            <Grid item="item">
              <SocialLink url="https://linkedin.com/in/Ethan-Behrends">
                <LinkedIn style={{
                    color: "#bfc8e0",
                    fontSize: "50px"
                  }}/>
              </SocialLink>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
    <div id="content">
        <h1>Work In Progess :)</h1>
        <p>Thanks for taking the time to check out my portfolio website! I am currently in the process of a major design and content overhaul, so come back over the course of the next few weeks as I continue to make progress on those fronts. In the meantime, you can check out my resume!</p>
        <a id="tempResume" href="resume" target='_blank' rel='noopener noreferrer'>Resume</a>
  </div>
  </div>)
}

export default Home

const SocialLink = (props) => (<a href={props.url} target='_blank' rel='noopener noreferrer'>
  {props.children}
</a>)
