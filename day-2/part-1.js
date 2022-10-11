const { input } = require('./input')

const calculatePositions = {
  forward: (horizontalPosition, _, value) => {
    return [horizontalPosition + value, _]
  },
  up: (_, depthPosition, value) => {
    return [_, depthPosition - value]
  },
  down: (_, depthPosition, value) => {
    return [_, depthPosition + value]
  },
}

let horizontal = 0
let depth = 0

input.forEach(instruction => {
  const [direction, value] = instruction.split(' ')
  const result = calculatePositions[direction](horizontal, depth, parseInt(value, 10))
  horizontal = result[0]
  depth = result[1]
})

console.log(horizontal * depth)