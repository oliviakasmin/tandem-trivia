import React, { useState } from 'react'
import { Button, ToggleButton, Alert, Container } from 'react-bootstrap'
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
  const [finishedRounds, setFinishedRounds] = useState(false)

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

  // need to add else statment saying you've run out of questions! maybe just put a toast to start
  // or add another state alerting to the fact that you've finished questions and return home
  const handlePlayNext = event => {
    event.preventDefault()
    if (currentRound < rounds.length - 1) {
      setCurrentRound(currentRound + 1)
      setShowQuestions(true)
      setCurrentQuestion(0)
      setShow(false)
      setShowWrong(false)
      setShowAnswers(true)
      setScore(0)
    } else {
      setFinishedRounds(true)
    }
  }
  return (
    <div>
      {!finishedRounds ? <h2>Round {currentRound + 1}</h2> : ''}
      <br />
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
              key={`${currentQuestion} ${currentRound}`}
            />
          ) : (
            ''
          )}
          <Alert show={show} variant='warning'>
            correct!
          </Alert>
          <Alert show={showWrong} variant='secondary'>
            Oops! the correct answer is:{' '}
            {rounds[currentRound][currentQuestion].correct}
          </Alert>
          {!showAnswers & (currentQuestion < 9) ? (
            <Button variant='outline-dark' onClick={handleNextQuestion}>
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
      {!showQuestion && !finishedRounds ? (
        <div>
          <h5>you scored {score} point(s) this round</h5> <br />
          <Button variant='info' onClick={handlePlayNext}>
            play next round!
          </Button>
        </div>
      ) : (
        ''
      )}
      {finishedRounds ? (
        <div>
          <h5>
            you've played all of the rounds! navigate back to the home page to
            play again
          </h5>
          <br />
          <a href='/'>
            <Button variant='outline-dark'>home</Button>
          </a>
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
    <Container className='answers'>
      {util_answers(question.correct, question.incorrect).map(answer => (
        <div>
          <ToggleButton
            type='radio'
            variant='outline-dark'
            className='answerButton'
            onClick={() => {
              handleAnswerClick(answer.isCorrect)
            }}>
            {' '}
            {answer.answerText}
          </ToggleButton>
          <br />
        </div>
      ))}
    </Container>
  )
}

export default Round
