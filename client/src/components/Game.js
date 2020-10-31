import React from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
import { util_create_rounds } from '../utilFcns'
import Round from './Round'
import { Container, Form } from 'react-bootstrap'

const GET_TRIVIA_DATA = gql`
  {
    game {
      question
      correct
      incorrect
    }
  }
`

const Game = props => {
  const gameData = props.data.game
  const rounds = !gameData ? '' : util_create_rounds(gameData)
  return (
    <Container>
      <h1>Trivia Rounds</h1>
      {rounds[0] ? (
        rounds.map((round, idx) => {
          return <Round questions={round} idx={idx} />
        })
      ) : (
        <div>no rounds yet</div>
      )}
    </Container>
  )
}

export default graphql(GET_TRIVIA_DATA)(Game)
