const { input } = require('./input')

let increasesCount = 0
let sumBefore = input[2] + input[1] + input[0]
let sumNext = input[2] + input[1] + input[0]

for (let i = 2; i < input.length; i += 1) {
  sumBefore = sumNext
  sumNext = input[i - 2] + input[i - 1] + input[i]
  if (sumNext - sumBefore > 0) increasesCount += 1
}

console.log(increasesCount)