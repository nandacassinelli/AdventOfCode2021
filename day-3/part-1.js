const { input } = require('./input')

const result = []

for(let i = 0; i < input[0].length; i += 1) {
  result.push({
    '1': 0,
    '0': 0
  })
}

const gammaRate = []
const epsilonRate = []


input.forEach(element => {
  for (let i = 0; i < element.length; i += 1) {
    result[i][element[i]] += 1
  }
})

result.forEach(position => {
  if (position['1'] > position['0']) {
    gammaRate.push('1')
    epsilonRate.push('0')
  } else {
    gammaRate.push('0')
    epsilonRate.push('1')
  }
})

const gammaRateDecimal = parseInt(gammaRate.join(''), 2)
const epsilonRateDecimal = parseInt(epsilonRate.join(''), 2)

console.log(gammaRateDecimal * epsilonRateDecimal)