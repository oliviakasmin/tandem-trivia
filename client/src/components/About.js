import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container>
      <br />
      <h2>about</h2>
      <p>
        I built this trivia game as a code challenge. The goal of the app is to
        create a platform for people to level up their trivia skills as a fun
        little break. Each round consists of 10 questions with multiple choice
        answers, and questions may not be repeated in a round. I hope you have
        fun exploring the app!
      </p>
      <br />
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
        I'd love to add a GraphQL mutation to add data so that users may
        contribute new questions. The built out back-end is not entirely
        necessary for the current scope of app, but it was a lot of fun to build
        and now there is a framework in place should the app evolve and become
        more expansive. The logic on the front-end is already equipped to handle
        additional questions and subsequent trivia rounds.
      </p>
      <p>
        Unit tests to check features, such as: 10 unique questions per round,
        questions and answers are shuffled, inputted data has required fields,
        only 1 answer can be selected, score counted accurately, etc.
      </p>
      <p>
        A more fleshed out UX/UI! As a start, I aimed for simple and navigable.
      </p>
      <p>A script to seed the database.</p>
      <p>Deploy the site.</p>
    </Container>
  )
}

export default About
