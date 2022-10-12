const { input } = require('./input')

const filterUntilOneLeft = (array, value, i) => {
  if (array.length > 1) {
    return array.filter(element => {
      return element[i] === value
    })
  }
  return array
}

const bitCount = {
  oxygenGenerator: [],
  CO2Scrubber: []
}

for (let i = 0; i < input[0].length; i += 1) {
  bitCount.oxygenGenerator.push({
    '1': 0,
    '0': 0
  })
  bitCount.CO2Scrubber.push({
    '1': 0,
    '0': 0
  })
}

let oxygenGeneratorRate = input
let CO2ScrubberRate = input

for (let i = 0; i < input[0].length; i += 1) {
  oxygenGeneratorRate.forEach(element => {
    bitCount.oxygenGenerator[i][element[i]] += 1
  })
  CO2ScrubberRate.forEach(element => {
    bitCount.CO2Scrubber[i][element[i]] += 1
  })
  oxygenGeneratorPosition = bitCount.oxygenGenerator[i]
  CO2ScrubberPosition = bitCount.CO2Scrubber[i]

  if (oxygenGeneratorPosition['1'] > oxygenGeneratorPosition['0']) {
    oxygenGeneratorRate = filterUntilOneLeft(oxygenGeneratorRate, '1', i)
  } else if (oxygenGeneratorPosition['0'] > oxygenGeneratorPosition['1']) {
    oxygenGeneratorRate = filterUntilOneLeft(oxygenGeneratorRate, '0', i)
  } else {
    oxygenGeneratorRate = filterUntilOneLeft(oxygenGeneratorRate, '1', i)
  }

  if (CO2ScrubberPosition['1'] > CO2ScrubberPosition['0']) {
    CO2ScrubberRate = filterUntilOneLeft(CO2ScrubberRate, '0', i)
  } else if (CO2ScrubberPosition['0'] > CO2ScrubberPosition['1']) {
    CO2ScrubberRate = filterUntilOneLeft(CO2ScrubberRate, '1', i)
  } else {
    CO2ScrubberRate = filterUntilOneLeft(CO2ScrubberRate, '0', i)
  }
  
  if (oxygenGeneratorRate.length === CO2ScrubberRate.length === 1) {
    i = input[0].length
  }
}

const oxygenGeneratorDecimal = parseInt(oxygenGeneratorRate.join(''), 2)
const CO2ScrubberDecimal = parseInt(CO2ScrubberRate.join(''), 2)

console.log('Life support rating of the submarine:', oxygenGeneratorDecimal * CO2ScrubberDecimal)