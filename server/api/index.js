const router = require('express').Router()
const questions = require('../controllers/trivia')

router.route('/').get(questions.findAll)

module.exports = router
