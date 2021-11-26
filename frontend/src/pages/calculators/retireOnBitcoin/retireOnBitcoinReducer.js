import { inputUnstyledClasses } from "@mui/core"

const UPDATE_VALUE = 'UPDATE_VALUE'
const TOGGLE_CALCULATION_METHOD = 'TOGGLE_CALCULATION_METHOD'


//ACTIONS
export const updateValue = (data) => {
    return { type: UPDATE_VALUE, payload: data }
}

export const toggleCalculationMethod = (data) => {
    return { type: TOGGLE_CALCULATION_METHOD, payload: data}
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

const cagr = (vFinal, vBegin, time) => {
    return ((vFinal / vBegin)**(1/time)) - 1
}

const toPercent = (x) => { return x / 100}

//INITIAL STATE
export const initialRetirement = {
    currentYear: 2021,
    currentAge: 30,
    retirementAge: 55,
    ageOfDeath: 100,
    currentBitcoinHoldings: 0,
    bitcoinGrowthRateUntilRetirement: 25,
    bitcoinYearlyGrowthRate: 7,
    bitcoinPriceAtRetirement: 1000000,
    inflationUntilRetirement: 5,
    inflationAfterRetirement: 2,
    requiredYearlyIncome: 150000,
    currentPriceOfBitcoin: 1,
    calculationMethod: 'priceTarget',
    yearsOfGrowth: function() {
        return this.retirementAge - this.currentAge
    },
    yearsOfConsumption: function() {
        return this.ageOfDeath - this.retirementAge
    },
    yearOfRetirement: function () {
        return this.currentYear + this.yearsOfGrowth()
    },
    yearOfDeath: function(){
        return this.yearOfRetirement() + this.yearsOfConsumption()
    },
    requiredIncomeAtRetirement: function (){
        return fv(this.requiredYearlyIncome, toPercent(this.inflationUntilRetirement), this.yearsOfGrowth())
    },
    realGrowthRate: function(){
        return (this.bitcoinGrowthRateUntilRetirement - this.inflationUntilRetirement) / 100
    },
    realGrowthRateRetirement: function(){
        return (this.bitcoinYearlyGrowthRate - this.inflationAfterRetirement) / 100
    },
    presentValueAtRetirement: function(){
        const pmt = this.requiredIncomeAtRetirement()
        const i = this.realGrowthRateRetirement()
        const n = this.yearsOfConsumption()

        return pvAnnuity(pmt, i , n)
    },
    presentValueNow: function(){
        const fv = this.presentValueAtRetirement()
        const i = this.realGrowthRate()
        const n = this.yearsOfGrowth()
        
        return pv(fv, i, n)
    
    },
    bitcoinPrice: function() {
        return fv(this.currentPriceOfBitcoin, (this.bitcoinGrowthRateUntilRetirement / 100), this.yearsOfGrowth())
    }, 
    bitcoinRetireToday: function(){
        return this.presentValueAtRetirement() / this.bitcoinPriceAtRetirement
    },
    bitcoinRetireTodayUsingGR: function(){
        return this.presentValueAtRetirement() / this.bitcoinPrice()
    },
    currentInvestmentRequired: function(){
        if(this.calculationMethod === 'priceTarget'){
            return this.bitcoinRetireToday() * this.currentPriceOfBitcoin
        }
        return this.bitcoinRetireTodayUsingGR() * this.currentPriceOfBitcoin
    },
    resultsTable: function (){
        let results = [
            {
                id: 0,
                age: this.currentAge,
                year: this.currentYear,
                bitcoinPrice: this.currentPriceOfBitcoin,
                bitcoinGrowthRate: this.bitcoinGrowthRateUntilRetirement / 100,
                nextYearBitcoinPrice: function(){
                    return this.bitcoinPrice * (1 + this.bitcoinGrowthRate)
                },
                requiredIncomeAtRetirement: this.requiredYearlyIncome,
                inflationRate: this.inflationUntilRetirement / 100,
                inflationAdjustedIncome: this.requiredYearlyIncome,
                nextYearInflationAdjustedIncome: function (){
                        return this.inflationAdjustedIncome * (1 + this.inflationRate)
                }
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
                inflationAdjustedIncome: current.nextYearInflationAdjustedIncome()
            }

            results.push(row)
        }

        return results
    }
}




export const retirementReducer = (state = initialRetirement, action) => {
    switch(action.type) {
        case UPDATE_VALUE:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case TOGGLE_CALCULATION_METHOD:
            if(state.calculationMethod === 'priceTarget'){
                return {
                    ...state,
                    calculationMethod:'growthRate'
                }
            }
            return {
                ...state,
                calculationMethod: 'priceTarget'
            }
        default:
            return state
    }
}