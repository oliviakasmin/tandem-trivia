const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
module.exports = app
const { graphqlHTTP } = require('express-graphql')
let cors = require('cors')
const {
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLObjectType,
} = require('graphql')

app.use(cors())

// connect to mongodb database
let mongoose = require('mongoose')
const URI = require('./config')

const TriviaModel = mongoose.model('trivia', {
  question: String,
  incorrect: [String],
  correct: String,
})

mongoose.connect(process.env.MONGODB_URI || URI)

mongoose
  .connect(process.env.MONGODB_URI || URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch(error => console.log(error))

mongoose.connection.on('error', err => {
  console.error(
    `something is not working with the mongoose db connection :( ${err.message})`
  )
})

mongoose.connection.on('connected', () => {
  console.log('Mongoose connection is running boo ya')
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection is disconnected')
})

const TriviaType = new GraphQLObjectType({
  name: 'trivia',
  fields: {
    question: { type: GraphQLString },
    incorrect: { type: GraphQLList(GraphQLString) },
    correct: { type: GraphQLString },
  },
})

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      trivia: {
        type: TriviaType,
        resolve: async () => {
          const data = await TriviaModel.find({})
          console.log(data)
          return data
        },
      },
    },
  }),
})

app.use('/trivia', graphqlHTTP({ schema, graphiql: true }))

// Bootstrap server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`)
})
