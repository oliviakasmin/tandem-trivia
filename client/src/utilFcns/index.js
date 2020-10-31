// returns a function of unique randomized numbers
const util_randomNums = max => {
  let randomNumbers = []
  while (randomNumbers.length < max) {
    let num = Math.floor(Math.random() * Math.floor(max))
    if (!randomNumbers.includes(num)) {
      randomNumbers.push(num)
    }
  }
  return randomNumbers
}

// shuffle our answers so they appear in a random order
const util_answers_shuffle = answers => {
  let randomNumbers = util_randomNums(answers.length)
  const answersArr = randomNumbers.map(idx => answers[idx])
  return answersArr
}

const util_answers = (correct, incorrect) => {
  const incorrectObjs = incorrect.map(answer => ({
    answerText: answer,
    isCorrect: false,
  }))
  const allAnswers = [
    { answerText: correct, isCorrect: true },
    ...incorrectObjs,
  ]
  return util_answers_shuffle(allAnswers)
}

// create rounds by assigning 10 randomly chosen questions to each round
// return an array that contains arrays of 10 questions
const util_create_rounds = questionsData => {
  const rounds = Math.floor(questionsData.length / 10)
  let randomNumbers = util_randomNums(rounds * 10)
  const roundsArr = randomNumbers.map(idx => questionsData[idx])
  const allRounds = []
  while (roundsArr.length) {
    let round = roundsArr.splice(0, 10)
    allRounds.push(round)
  }
  return allRounds
}

module.exports = { util_create_rounds, util_answers_shuffle, util_answers }
