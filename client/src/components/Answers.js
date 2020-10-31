import React from 'react'
import { util_answers } from '../utilFcns'
import { Button, Form } from 'react-bootstrap'

const Answers = props => {
  const { correct, incorrect } = props
  const allAnswers = [{ correct }, ...incorrect]
  return (
    <div>
      <Form>
        {allAnswers.length ? (
          util_answers(allAnswers).map(answer => (
            <Form.Group>
              {typeof answer === 'string' ? (
                <Form.Check type='radio'> {answer}</Form.Check>
              ) : (
                <Form.Check type='radio'>{answer.correct}</Form.Check>
              )}
            </Form.Group>
          ))
        ) : (
          <div>no rounds yet</div>
        )}
        <Button variant='info' size='sm' type='submit'>
          I've chosen my answer
        </Button>
      </Form>
      <br />
      <br />
      <Button variant='warning' size='sm'>
        next question
      </Button>
    </div>
  )
}

export default Answers
