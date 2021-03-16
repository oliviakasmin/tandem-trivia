import React, { useState, useEffect } from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
import { util_create_rounds } from '../utilFcns'
import Round from './Round'
import { Container, Button } from 'react-bootstrap'
import { assertValidExecutionArguments } from 'graphql/execution/execute'
import axios from 'axios'

// get trivia data from graphQL
// const GET_TRIVIA_DATA = gql`
//   {
//     game {
//       question
//       correct
//       incorrect
//     }
//   }
// `

const Game = props => {
  const [showRound, setShowRound] = useState(false)
  const [getRounds, setGetRounds] = useState([])
  const [showIntro, setShowIntro] = useState(true)
  const [gameData, setGameData] = useState([])
  // const gameData = props.data.game

  useEffect(() => {
    getQuestions()
  }, [])

  const getQuestions = async () => {
    const questions = await axios.get('/api/')
    setGameData(questions.data)
  }

  const handleFirstPlay = event => {
    event.preventDefault()
    setShowIntro(false)
    setShowRound(true)
    const rounds = !gameData ? (
      <p>no questions at this time</p>
    ) : (
      util_create_rounds(gameData)
    )
    setGetRounds(rounds)
  }
  return (
    <Container>
      <br />
      {showIntro ? (
        <div>
          <h4>welcome to my trivia training game</h4>
          <br />
          <p>
            each time you play (or refresh the page) the questions and answers
            will all be shuffled to keep you on your toes
          </p>
          <br />
        </div>
      ) : (
        ''
      )}
      {!showRound ? (
        <Button size='lg' variant='outline-dark' onClick={handleFirstPlay}>
          let's play
        </Button>
      ) : (
        ''
      )}
      {showRound && getRounds[0] ? <Round rounds={getRounds} /> : ''}
    </Container>
  )
}

// connect graphQL queried data with Game component
// export default graphql(GET_TRIVIA_DATA)(Game)

export default Game
