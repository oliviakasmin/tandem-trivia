import React, { useState } from 'react'
import { Button, ToggleButton, ButtonGroup, Alert } from 'react-bootstrap'
import { util_answers } from '../utilFcns'

const Round = props => {
  const { rounds } = props
  const [currentRound, setCurrentRound] = useState(0)
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
  const handlePlayNext = event => {
    event.preventDefault()
    if (currentRound < rounds.length - 1) setCurrentRound(currentRound + 1)
    setShowQuestions(true)
    setCurrentQuestion(0)
    setShow(false)
    setShowWrong(false)
    setShowAnswers(true)
  }
  // let questions = rounds[currentRound]
  return (
    <div>
      <h2>Round {currentRound + 1}</h2>
      {showQuestion && rounds[currentRound][currentQuestion].question ? (
        <div>
          <h5>
            Question {currentQuestion + 1}/10:{' '}
            {rounds[currentRound][currentQuestion].question}
          </h5>
          {showAnswers ? (
            <Answer
              question={rounds[currentRound][currentQuestion]}
              handleAnswerClick={handleAnswerClick}
            />
          ) : (
            ''
          )}
          <Alert show={show} variant='success'>
            correct!
          </Alert>
          <Alert show={showWrong} variant='secondary'>
            Oops! the correct answer is:{' '}
            {rounds[currentRound][currentQuestion].correct}
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
      {!showQuestion ? (
        <div>
          {' '}
          <h5>you scored {score} points this round!</h5> <br />
          <Button variant='success' onClick={handlePlayNext}>
            play next round!
          </Button>
          <Button variant='warning'>i'm done training for now</Button>{' '}
        </div>
      ) : (
        ''
      )}
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
