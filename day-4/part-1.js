const { boardsInput, randomOrder } = require('./input')

const boardsGame = boardsInput.split('\n\n')

let boards = []

for (let i = 0; i < boardsGame.length; i += 1) {
  const board = []
  const lines = boardsGame[i].split('\n')
  lines.forEach(line => {
    const splittedLines = []
    line.split(' ').forEach(element => {
      if (element !== '') splittedLines.push(parseInt(element, 10))
    })
    board.push(splittedLines)
  });
  boards.push(board)
}

let line = []
let lastNumber
let board

for (i = 0; i < randomOrder.length; i += 1) {
  for (let iBoard = 0; iBoard < boards.length; iBoard += 1) {
    board = boards[iBoard]
    const lines = board.map(lineIt => {
      line = lineIt.map(elem => {
        if (randomOrder[i] === elem) {
          return 'x'
        }
        return elem
      })
      if (line.every(elem => elem === 'x')) {
        lastNumber = randomOrder[i]
        i = randomOrder.length
        iBoard = boards.length
      }
      return line
    })
    if(!lastNumber) {
      for (let iColumn = 0; iColumn < 5; iColumn += 1) {
        let completedColumn = true
        for (let iRow = 0; iRow < 5; iRow += 1) {
          if (lines[iRow][iColumn] !== 'x') {
            completedColumn = false
          }
        }

        if (completedColumn) {
          lastNumber = randomOrder[i]
          iColumn = 5
          iRow = 5
          i = randomOrder.length
          iBoard = boards.length
        }
      }
    }
    board = lines
    boards[iBoard] = lines
  }
}

let sum = 0
board.forEach(line => {
  sum += line.reduce((total, current) => {
    if (current !== 'x') {
      return total + current
    } else {
      return total
    }
  }, 0)
})

console.log(sum * lastNumber)