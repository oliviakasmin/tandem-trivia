import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container>
      <br />
      <h2>about</h2>
      <p>
        I built this trivia game as a code challenge. The goal of the app is to
        create a platform for users to level up their trivia skills as a fun
        little break from work. Each round consists of 10 questions with
        multiple choice answers, and questions may not be repeated in a round. I
        hope you have fun exploring the app!
      </p>
      <br />
      <h5>technologies used</h5>
      <div>Developed using Javascript and Node.js as well as the below:</div>
      <br />
      <div>back-end</div>
      <ul>
        <li>MongoDb</li>
        <li>Mongoose</li>
        <li>Express</li>
      </ul>
      <div>front-end</div>
      <ul>
        <li>Bootstraped using Create React App</li>
        <li>React</li>
        <li>React Bootstrap</li>
        <li>Axios</li>
      </ul>
      <br />
      <h5>future features and improvements</h5>
      <p>
        The built out back-end is not entirely necessary for the current scope
        of app, but it was a lot of fun to build and now there is a framework in
        place should the app evolve and become more expansive, such as the
        option for the player to add additional trivia questions. The logic on
        the front-end is already equipped to handle additional questions and
        subsequent trivia rounds.
      </p>
      <p>
        Unit tests to check features, such as: 10 unique questions per round,
        questions and answers are shuffled, inputted data has required fields,
        only 1 answer can be selected, score counted accurately, etc.
      </p>
      <p>
        A more fleshed out UX/UI! As a start, I aimed for simple and navigable.
      </p>
      <p>A script to seed the database with additional data.</p>
      <br />
      <br />
    </Container>
  )
}

export default About
