const { input } = require('./input')

let increasesCount = 0

for(let i = 1; i < input.length; i+= 1) {
  if (input[i] - input[i - 1] > 0) increasesCount += 1
}

console.log(increasesCount)