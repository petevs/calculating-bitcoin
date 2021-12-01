class RetirementInputs {
    constructor(inputs) {
        this.currentYear = inputs.currentYear
        this.currentAge = inputs.currentAge
        this.retirementAge = inputs.retirementAge
        this.ageOfDeath = inputs.ageOfDeath
        this.currentBitcoinHoldings = inputs.currentBitcoinHoldings
        this.bitcoinGrowthRateUntilRetirement = inputs.bitcoinGrowthRateUntilRetirement
        this.bitcoinYearlyGrowthRate = inputs.bitcoinYearlyGrowthRate
        this.bitcoinPriceAtRetirement = inputs.bitcoinPriceAtRetirement
        this.inflationUntilRetirement = inputs.inflationUntilRetirement
        this.inflationAfterRetirement = inputs.inflationAfterRetirement
        this.requiredYearlyIncome = inputs.requiredYearlyIncome
        this.currentPriceOfBitcoin = inputs.currentPriceOfBitcoin
        this.calculationMethod = inputs.calculationMethod
    }
}


//HELPERS
const pvAnnuity = (pmt, i, n) => {
    return pmt * ((1 - ((1 + i)** (n * -1))) / i)
}

const pv = (fv, i, n) => {
    return fv / ((1 + i) ** n)
}

const fv = (pv, i, n) => {
    return pv * ((1 + i) ** n)
}

// const cagr = (vFinal, vBegin, time) => {
//     return ((vFinal / vBegin)**(1/time)) - 1
// }

const toPercent = (x) => { return x / 100}

class RetirementCalculation extends RetirementInputs {

    yearsOfGrowth() {
      return this.retirementAge - this.currentAge
    }
  
    yearsOfConsumption() {
        return this.ageOfDeath - this.retirementAge
    }
      yearOfRetirement() {
          return this.currentYear + this.yearsOfGrowth()
      }
      yearOfDeath(){
        return this.yearOfRetirement() + this.yearsOfConsumption()
      }
      requiredIncomeAtRetirement(){
        return fv(this.requiredYearlyIncome, toPercent(this.inflationUntilRetirement), this.yearsOfGrowth())
      }
      realGrowthRate(){
        return (this.bitcoinGrowthRateUntilRetirement - this.inflationUntilRetirement) / 100
      }
      realGrowthRateRetirement(){
        return (this.bitcoinYearlyGrowthRate - this.inflationAfterRetirement) / 100
      }
      presentValueAtRetirement(){
          const pmt = this.requiredIncomeAtRetirement()
          const i = this.realGrowthRateRetirement()
          const n = this.yearsOfConsumption()
  
          return pvAnnuity(pmt, i , n)
      }
      presentValueNow() {
          const fv = this.presentValueAtRetirement()
          const i = this.realGrowthRate()
          const n = this.yearsOfGrowth()
          
          return pv(fv, i, n)
      
      }
      bitcoinPrice() {
          return fv(this.currentPriceOfBitcoin, (this.bitcoinGrowthRateUntilRetirement / 100), this.yearsOfGrowth())
      }
  
      bitcoinRetireToday (){
          return this.presentValueAtRetirement() / this.bitcoinPriceAtRetirement
      }
  
      bitcoinRetireTodayUsingGR() {
          return this.presentValueAtRetirement() / this.bitcoinPrice()
      }
  
      currentInvestmentRequired (){
          if(this.calculationMethod === 'priceTarget'){
              return this.bitcoinRetireToday() * this.currentPriceOfBitcoin
          }
          return this.bitcoinRetireTodayUsingGR() * this.currentPriceOfBitcoin
      }
  
      bitcoinSoldYearOneRetire() {
          const price = this.calculationMethod === 'priceTarget' ? this.bitcoinPriceAtRetirement : this.bitcoinPrice()
  
          return this.requiredIncomeAtRetirement() / price
      }
  
      resultsTable(){
  
          const startingBitcoinBalance = this.calculationMethod === 'priceTarget' 
          ? this.bitcoinRetireToday() 
          : this.bitcoinRetireTodayUsingGR()
  
          let results = [
              {
                  id: 0,
                  age: this.retirementAge,
                  year: this.currentYear + this.yearsOfGrowth(),
                  bitcoinPrice: this.calculationMethod === 'priceTarget' ? this.bitcoinPriceAtRetirement : this.bitcoinPrice(),
                  bitcoinGrowthRate: this.bitcoinGrowthRateUntilRetirement / 100,
                  nextYearBitcoinPrice: function(){
                      return this.bitcoinPrice * (1 + this.bitcoinGrowthRate)
                  },
                  requiredIncomeAtRetirement: this.requiredYearlyIncome,
                  inflationRate: this.inflationUntilRetirement / 100,
                  inflationAdjustedIncome: this.requiredIncomeAtRetirement(),
                  nextYearInflationAdjustedIncome: function (){
                          return this.inflationAdjustedIncome * (1 + this.inflationRate)
                  },
                  bitcoinBalance: startingBitcoinBalance,
                  getPortfolioValue: function(){
                      return this.bitcoinBalance * this.bitcoinPrice
                  },
                  portfolioValue: this.presentValueAtRetirement(),
                  bitcoinSold: this.bitcoinSoldYearOneRetire(),
                  calculateBitcoinSold: function() {
                      return this.inflationAdjustedIncome / this.bitcoinPrice
                  },
                  endingBitcoinBalance: startingBitcoinBalance - this.bitcoinSoldYearOneRetire()
              }
          ]
  
          for ( let i = 0; results[i].age <= this.ageOfDeath; i++){
  
              const current = results[i]
  
              const row = {
                  ...results[i],
                  id: current.id + 1,
                  age: current.age + 1,
                  year: current.year + 1,
                  bitcoinPrice: current.nextYearBitcoinPrice(),
                  bitcoinGrowthRate: current.age < this.retirementAge ? current.bitcoinGrowthRate : (this.bitcoinYearlyGrowthRate / 100),
                  inflationRate: current.age < this.retirementAge ? current.inflationRate : (this.inflationAfterRetirement / 100),
                  inflationAdjustedIncome: current.nextYearInflationAdjustedIncome(),
                  portfolioValue: current.getPortfolioValue(),
                  bitcoinSold: current.calculateBitcoinSold(),
                  bitcoinBalance: current.endingBitcoinBalance,
                  endingBitcoinBalance: current.endingBitcoinBalance - current.calculateBitcoinSold()
              }
  
              results.push(row)
          }
  
          return results
    }
}


export const calculateRetirement = (inputs) => {
    const calculation = new RetirementCalculation(inputs)

    const results = {
      portfolioValueAtRetirement: calculation.presentValueAtRetirement(),
      calculatedBitcoinPriceAtRetirement: calculation.bitcoinPrice(),
      bitcoinPriceAtRetirement: calculation.bitcoinPriceAtRetirement,
      paymentSchedule: calculation.resultsTable(),
      bitcoinRequiredUsingPriceTarget: calculation.bitcoinRetireToday(),
      bitcoinRequiredUsingGrowthRate: calculation.bitcoinRetireTodayUsingGR(),
      currentInvestmentRequired: calculation.currentInvestmentRequired()
    }


    return results
}