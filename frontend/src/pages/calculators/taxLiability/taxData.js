  export const taxRates = {

      alberta: {
          basicPersonalAmount: 19369,
          taxBrackets: [
            { from: 0, to: 131220, rate: .10},
            { from: 131220, to: 157464, rate: .12},
            { from: 157464, to: 209952, rate: .13},
            { from: 209952, to: 314928, rate: .14},
            { from: 314928, to: undefined, rate: .15},
          ]
      },
      britishColumbia: {
          basicPersonalAmount: 11302,
          taxBrackets: [
            { from: 0, to: 43070, rate: .0506},
            { from: 43070, to: 86141, rate: .077},
            { from: 157464, to: 98901, rate: .105},
            { from: 98901, to: 120094, rate: .1229},
            { from: 120094, to: 162832, rate: .1470},
            { from: 162832, to: 227091, rate: .1680},
            { from: 227091, to: undefined, rate: .2050},
          ]
      },
      federal: {
        basicPersonalAmount: 14398,
        taxBrackets: [
            { from: 0, to: 50197, rate: .15},
            { from: 50197, to: 100392, rate: .2050},
            { from: 100392, to: 155625, rate: .26},
            { from: 155625, to: 221708, rate: .2938},
            { from: 221708, to: undefined, rate: .33},
          ]
      }
  }