const UPDATE_VALUE = 'UPDATE_VALUE'


export const updateValue = (data) => {
    return { type: UPDATE_VALUE, payload: data }
}

const pvAnnuity = (pmt, i, n) => {
    return pmt * ((1 - ((1 + i)** (n * -1))) / i)
}

const pv = (fv, i, n) => {
    return fv / ((1 + i) ** n)
}


export const initialRetirement = {
    currentAge: 20,
    retirementAge: 55,
    ageOfDeath: 100,
    currentBitcoinHoldings: 0,
    bitcoinYearlyGrowthRate: 20,
    annualInflationRate: 10,
    requiredYearlyIncome: 100000,
    currentPriceOfBitcoin: 1,
    yearsOfGrowth: function() {
        return this.retirementAge - this.currentAge
    },
    yearsOfConsumption: function() {
        return this.ageOfDeath - this.retirementAge
    },
    requiredIncomeAtRetirement: function (){
        return this.requiredYearlyIncome * ((1 + this.annualInflationRate / 100) ** this.yearsOfGrowth())
    },
    realGrowthRate: function(){
        return (this.bitcoinYearlyGrowthRate - this.annualInflationRate) / 100
    },
    presentValueAtRetirement: function(){
        const pmt = this.requiredYearlyIncome
        const i = this.realGrowthRate()
        const n = this.yearsOfConsumption()

        return pvAnnuity(pmt, i , n)
    },
    presentValueNow: function(){
        const fv = this.presentValueAtRetirement()
        const i = this.realGrowthRate()
        const n = this.yearsOfGrowth()
        
        return pv(fv, i, n)
    
    },
    bitcoinRequired: function(){
        return this.presentValueNow() / this.currentPriceOfBitcoin
    }
}




export const retirementReducer = (state = initialRetirement, action) => {
    switch(action.type) {
        case UPDATE_VALUE:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        default:
            return state
    }
}