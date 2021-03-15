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
}
