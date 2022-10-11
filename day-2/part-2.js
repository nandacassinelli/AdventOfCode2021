const { input } = require('./input')

const calculatePositions = {
  forward: (horizontalPosition, depthPosition, aimPosition, value) => {
    return [horizontalPosition + value, depthPosition + (aimPosition * value), aimPosition]
  },
  up: (_h, _d, aimPosition, value) => {
    return [_h, _d, aimPosition - value]
  },
  down: (_h, _d, aimPosition, value) => {
    return [_h, _d, aimPosition + value]
  },
}

let horizontal = 0
let depth = 0
let aim = 0

input.forEach(instruction => {
  const [direction, value] = instruction.split(' ')
  const result = calculatePositions[direction](horizontal, depth, aim, parseInt(value, 10))
  horizontal = result[0]
  depth = result[1]
  aim = result[2]
})

console.log(horizontal * depth)