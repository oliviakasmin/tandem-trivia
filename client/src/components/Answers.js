import React, { useState } from 'react'
import { util_answers_shuffle } from '../utilFcns'
import { Button, ToggleButton, ButtonGroup } from 'react-bootstrap'

const Answers = props => {
  //   const [score, setScore] = useState(0)
  const { correct, incorrect, score, setScore } = props
  const incorrectObjs = incorrect.map(answer => ({
    answerText: answer,
    isCorrect: false,
  }))
  const allAnswers = [
    { answerText: correct, isCorrect: true },
    ...incorrectObjs,
  ]
  const handleAnswerClick = isCorrect => {
    console.log(isCorrect)
    console.log('score pre-click', score)
    if (isCorrect) {
      setScore(score + 1)
    }
    console.log('score post-click', score)
  }
  return (
    <div>
      {allAnswers.length ? (
        util_answers_shuffle(allAnswers).map(answer => (
          <ButtonGroup>
            <ToggleButton
              type='radio'
              variant='info'
              onClick={() => {
                handleAnswerClick(answer.isCorrect)
              }}>
              {answer.answerText}
            </ToggleButton>
          </ButtonGroup>
        ))
      ) : (
        <div>no answers yet</div>
      )}
      <br />
      <br />
      <Button variant='warning' size='sm'>
        next question
      </Button>
    </div>
  )
}

export default Answers
