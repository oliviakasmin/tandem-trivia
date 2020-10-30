import React from 'react'
import { Button } from 'react-bootstrap'

const Round = props => {
  const { questions, idx } = props

  return (
    <div>
      <h2>Round {idx + 1}</h2>
      {questions.length ? (
        questions.map(question => (
          <div>
            <p>Question: {question.question}</p>
            <ul>
              <li>correct answer: {question.correct}</li>
              <li>
                incorrect answers:
                {question.incorrect.map(answer => (
                  <div>{answer}</div>
                ))}
              </li>
            </ul>
            <Button variant='info' size='sm'>
              I've chosen my answer
            </Button>
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
