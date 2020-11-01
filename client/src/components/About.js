import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container>
      <h2>about</h2>
      <h5>technologies used</h5>
      <div>back-end</div>
      <ul>
        <li>mongo</li>
      </ul>
      <div>front-end</div>
      <ul>
        <li>bootstraped using create react app</li>
      </ul>
      <br />
      <h5>future features and improvements</h5>
      <p>
        mutation to add new data. fully built-out backend not necessary for the
        current scope of app, but was a lot of fun to build and the app can now
        be expanded
      </p>
      <p>
        tests such ask: 10 questions per round, questions and answers are
        shuffled, inputted data has required fields, only answer can be
        selected, score counted accurately
      </p>
      <p>UX/UI started out with simple and navigable </p>
      <p>deploy the site</p>
    </Container>
  )
}

export default About
