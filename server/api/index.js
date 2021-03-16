const router = require('express').Router()
const questions = require('../controllers/trivia')

router.route('/').get(questions.findAll)
router.route('/new').post(questions.addNew)

module.exports = router
