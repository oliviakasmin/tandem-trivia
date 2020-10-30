import React from 'react'
import { util_answers } from '../utilFcns'
import { Button } from 'react-bootstrap'

const Answers = props => {
  const { correct, incorrect } = props
  const allAnswers = [{ correct }, ...incorrect]
  return (
    <div>
      {allAnswers.length ? (
        util_answers(allAnswers).map(answer => (
          <ul>
            {typeof answer === 'string' ? (
              <li>{answer}</li>
            ) : (
              <li>{answer.correct}</li>
            )}
          </ul>
        ))
      ) : (
        <div>no rounds yet</div>
      )}
      <Button variant='info' size='sm'>
        I've chosen my answer
      </Button>
      <br />
      <br />
      <Button variant='secondary' size='sm'>
        next question
      </Button>
    </div>
  )
}

export default Answers
