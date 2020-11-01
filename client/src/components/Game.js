import React, { useState } from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
import { util_create_rounds } from '../utilFcns'
import Round from './Round'
import { Container, Button } from 'react-bootstrap'

// get trivia data from graphQL
const GET_TRIVIA_DATA = gql`
  {
    game {
      question
      correct
      incorrect
    }
  }
`

// set up Routes so can have 'Home' 'Play' and 'About' pages
// on Home will have quick intro and big link to 'Play'
// hamburger menu UR to toggle between
// make Navbar

const Game = props => {
  const [showRound, setShowRound] = useState(false)
  const [getRounds, setGetRounds] = useState([])
  const gameData = props.data.game

  const handleFirstPlay = event => {
    event.preventDefault()
    setShowRound(true)
    const rounds = !gameData ? '' : util_create_rounds(gameData)
    setGetRounds(rounds)
  }
  return (
    <Container>
      <h1>Trivia</h1>
      {!showRound ? <Button onClick={handleFirstPlay}>play round</Button> : ''}
      {showRound && getRounds[0] ? <Round rounds={getRounds} /> : ''}
    </Container>
  )
}

// connect graphQL queried data with Game component
export default graphql(GET_TRIVIA_DATA)(Game)
