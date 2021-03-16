const TriviaModel = require('../models/')

module.exports = {
  // this works
  findAll: async (req, res, next) => {
    try {
      const questions = await TriviaModel.find()
      res.json(questions)
    } catch (err) {
      next(err)
    }
  },
  // this doesn't work
  addNew: async (req, res, next) => {
    try {
      const newQuestion = new TriviaModel(req.body)
      await newQuestion.save()
      res.json(newQuestion)
    } catch (err) {
      next(err)
    }
  },
}
