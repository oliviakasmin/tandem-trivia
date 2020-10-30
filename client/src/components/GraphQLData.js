import React from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
const GET_TRIVIA_DATA = gql`
  {
    game {
      question
      correct
      incorrect
    }
  }
`
const GraphQLData = props => {
  return (
    <div>
      <h3>List of Questions</h3>
      <div>
        {props.data?.game?.map(round => (
          <div>
            <p>Question: {round.question}</p>
            <ul>
              <li>correct answer: {round.correct}</li>
              <li>
                incorrect answers:
                {round.incorrect.map(answer => (
                  <div>{answer}</div>
                ))}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default graphql(GET_TRIVIA_DATA)(GraphQLData)
