let mongoose = require('mongoose')
const Schema = mongoose.Schema

const triviaSchema = new Schema({
  question: String,
  incorrect: [String],
  correct: String,
})

const TriviaModel = mongoose.model('trivia', triviaSchema)

module.exports = TriviaModel
