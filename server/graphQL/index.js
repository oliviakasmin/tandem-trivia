const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql')
const TriviaModel = require('../models')

const TriviaType = new GraphQLObjectType({
  name: 'trivia',
  fields: () => ({
    question: { type: GraphQLString },
    incorrect: { type: GraphQLList(GraphQLString) },
    correct: { type: GraphQLString },
  }),
})

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    game: {
      type: new GraphQLList(TriviaType),
      resolve: async () => {
        const data = await TriviaModel.find({})
        return data
      },
    },
  },
})

module.exports = RootQuery
