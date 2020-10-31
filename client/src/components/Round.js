import React, { useState } from 'react'
import { Button, ToggleButton, ButtonGroup } from 'react-bootstrap'
import { util_answers } from '../utilFcns'

const Round = props => {
  const { questions, idx } = props
  const [score, setScore] = useState(0)
  const handleAnswerClick = isCorrect => {
    if (isCorrect) {
      setScore(score + 1)
    }
    console.log('score post-click', score)
  }
  return (
    <div>
      <h2>Round {idx + 1}</h2>
      {questions.length ? (
        questions.map(question => (
          <div>
            <h5>Question: {question.question}</h5>
            {util_answers(question.correct, question.incorrect).map(answer => (
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
            ))}
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
