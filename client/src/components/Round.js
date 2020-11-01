import React, { useState } from 'react'
import { Button, ToggleButton, ButtonGroup, Alert } from 'react-bootstrap'
import { util_answers } from '../utilFcns'

const Round = props => {
  const { questions, idx } = props
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [show, setShow] = useState(false)
  const [showWrong, setShowWrong] = useState(false)
  const [showAnswers, setShowAnswers] = useState(true)
  const [showQuestion, setShowQuestions] = useState(true)

  const handleAnswerClick = isCorrect => {
    setShowAnswers(false)
    if (isCorrect) {
      setScore(score + 1)
      setShow(true)
    } else {
      setShowWrong(true)
    }
  }
  const handleNextQuestion = event => {
    event.preventDefault()
    if (currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1)
    }
    setShow(false)
    setShowWrong(false)
    setShowAnswers(true)
  }
  const handleShowScore = event => {
    event.preventDefault()
    setShowQuestions(false)
  }
  return (
    <div>
      <h2>Round {idx + 1}</h2>
      {showQuestion && questions[currentQuestion].question ? (
        <div>
          <h5>
            Question {currentQuestion + 1}/10:{' '}
            {questions[currentQuestion].question}
          </h5>
          {showAnswers ? (
            <Answer
              question={questions[currentQuestion]}
              handleAnswerClick={handleAnswerClick}
            />
          ) : (
            ''
          )}
          <Alert show={show} variant='success'>
            correct!
          </Alert>
          <Alert show={showWrong} variant='secondary'>
            Oops! the correct answer is: {questions[currentQuestion].correct}
          </Alert>
          {!showAnswers & (currentQuestion < 9) ? (
            <Button variant='warning' onClick={handleNextQuestion}>
              next question
            </Button>
          ) : (
            ''
          )}
          {!showAnswers & (currentQuestion === 9) ? (
            <Button variant='success' onClick={handleShowScore}>
              get my score!
            </Button>
          ) : (
            ''
          )}
          <br />
          <br />
        </div>
      ) : (
        ''
      )}
      {!showQuestion ? <h5>you scored {score} points this round!</h5> : ''}
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
