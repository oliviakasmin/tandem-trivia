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

export const util_answers = answers => {
  let randomNumbers = util_randomNums(answers.length)
  const answersArr = randomNumbers.map(idx => answers[idx])
  return answersArr
}

export const util_create_rounds = questionsData => {
  // figure out how many rounds we can play
  const rounds = Math.floor(questionsData.length / 10)
  let randomNumbers = util_randomNums(rounds * 10)
  // grab questions from questionsData by random indices generated above
  const roundsArr = randomNumbers.map(idx => questionsData[idx])
  // re-factor roundsArr into arrays of 10 questions
  const allRounds = []
  while (roundsArr.length) {
    let round = roundsArr.splice(0, 10)
    allRounds.push(round)
  }
  return allRounds
}

// util_create_rounds([
//   { test: 1 },
//   { test: 2 },
//   { test: 3 },
//   { test: 4 },
//   { test: 5 },
//   { test: 6 },
//   { test: 7 },
//   { test: 8 },
//   { test: 9 },
//   { test: 10 },
//   { test: 11 },
//   { test: 12 },
//   { test: 13 },
//   { test: 14 },
//   { test: 15 },
//   { test: 16 },
//   { test: 17 },
//   { test: 18 },
//   { test: 19 },
//   { test: 20 },
//   { test: 21 },
//   { test: 7 },
//   { test: 8 },
//   { test: 9 },
//   { test: 10 },
//   { test: 11 },
//   { test: 12 },
//   { test: 13 },
//   { test: 14 },
//   { test: 15 },
//   { test: 16 },
//   { test: 17 },
//   { test: 18 },
//   { test: 19 },
//   { test: 20 },
//   { test: 21 },
// ])
// module.exports = { util_create_rounds, util_answers }
