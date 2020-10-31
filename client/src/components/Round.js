import React, { useState } from 'react'
import { Button, ToggleButton, ButtonGroup, Alert } from 'react-bootstrap'
import { util_answers } from '../utilFcns'

const Round = props => {
  const { questions, idx } = props
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [show, setShow] = useState(false)
  const [showAnswers, setShowAnswers] = useState(true)
  const [success, setSuccess] = useState(false)

  const handleAnswerClick = isCorrect => {
    if (isCorrect) {
      setScore(score + 1)
      setSuccess(true)
      setShow(true)
      setShowAnswers(false)
    }
    setCurrentQuestion(currentQuestion + 1)
  }
  return (
    <div>
      <h2>Round {idx + 1}</h2>
      {questions.length ? (
        questions.map(question => (
          <div>
            <h5>Question: {question.question}</h5>

            {/* {util_answers(question.correct, question.incorrect).map(answer => (
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
            ))} */}

            {showAnswers ? (
              <Answer
                question={question}
                handleAnswerClick={handleAnswerClick}
              />
            ) : (
              <p>the correct answer is: </p>
            )}

            <Alert show={show} variant={success}>
              correct!
            </Alert>
            <br />
            <Button variant='warning'>next question</Button>
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

const Answer = props => {
  const { question, handleAnswerClick } = props
  return (
    <div>
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
    </div>
  )
}

export default Round
