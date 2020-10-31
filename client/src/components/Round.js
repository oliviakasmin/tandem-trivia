import React, { useState } from 'react'
import { Button, ToggleButton, ButtonGroup, Alert } from 'react-bootstrap'
import { util_answers } from '../utilFcns'

const Round = props => {
  const { questions, idx } = props
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [show, setShow] = useState(false)
  const [showWrong, setShowWrong] = useState(false)
  const [showAnswers, setShowAnswers] = useState(true)
  const [finished, setFinished] = useState(false)

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
    if (currentQuestion >= 9) {
      console.log('at question 10')
      setFinished(true)
      console.log(finished)
    }
    setShow(false)
    setShowWrong(false)
    setShowAnswers(true)
  }
  const handleShowScore = event => {
    event.preventDefault()
    setShowScore(true)
  }
  return (
    <div>
      <h2>Round {idx + 1}</h2>
      {questions[currentQuestion].question ? (
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
          <br />
          <br />
        </div>
      ) : (
        <div>no rounds yet</div>
      )}
      {finished ? <Button variant='success'>Get my score!</Button> : ''}
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

// {questions.length ? (
//   questions.map(question => (
//     <div>
//       <h5>Question: {question.question}</h5>
//       {showAnswers ? (
//         <Answer
//           question={question}
//           handleAnswerClick={handleAnswerClick}
//         />
//       ) : (
//         ''
//       )}
//       <Alert show={show} variant='success'>
//         correct!
//       </Alert>
//       <Alert show={showWrong} variant='secondary'>
//         Oops! the correct answer is: {question.correct}
//       </Alert>
//       {!showAnswers ? (
//         <Button variant='warning' onClick={handleNextQuestion}>
//           next question
//         </Button>
//       ) : (
//         ''
//       )}
//       <br />
//       <br />
//     </div>
//   ))
// ) : (
//   <div>no rounds yet</div>
// )}
