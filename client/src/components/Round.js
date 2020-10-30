import React from 'react'
import Answers from './Answers'
import { Button } from 'react-bootstrap'

const Round = props => {
  const { questions, idx } = props
  return (
    <div>
      <h2>Round {idx + 1}</h2>
      {questions.length ? (
        questions.map(question => (
          <div>
            <h5>Question: {question.question}</h5>
            <Answers
              correct={question.correct}
              incorrect={question.incorrect}
            />
            <br />
          </div>
        ))
      ) : (
        <div>no rounds yet</div>
      )}
      <br />
      <Button variant='success'>Get my score!</Button>
      <br />
    </div>
  )
}

export default Round
