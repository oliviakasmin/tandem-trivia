import React, { useState } from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
import { util_create_rounds } from '../utilFcns'
import Round from './Round'
import { Container, Button } from 'react-bootstrap'

const GET_TRIVIA_DATA = gql`
  {
    game {
      question
      correct
      incorrect
    }
  }
`
// need to move currentRound and render of Round into Round component
// so can increase increase the current round if want to play again

// if current round === 0, then show button "let's play! which will render <Round>"
// if current round > 0 (but less than total), then show button "play another round",
// which will increase the current round count and then render <Round>
// if current round > length of rounds array -1, then show Alert "you've played all of the rounds!"

// set up Routes so can have 'Home' 'Play' and 'About' pages
// on Home will have quick intro and big link to 'Play'
// hamburger menu UR to toggle between
// make Navbar

const Game = props => {
  const [currentRound, setCurrentRound] = useState(0)
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
      {showRound && getRounds[0] ? (
        <Round questions={getRounds[0]} idx={0} rounds={getRounds} />
      ) : (
        ''
      )}
    </Container>
  )
}

export default graphql(GET_TRIVIA_DATA)(Game)
