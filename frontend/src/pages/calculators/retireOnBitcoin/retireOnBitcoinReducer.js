const UPDATE_VALUE = 'UPDATE_VALUE'


export const updateValue = (data) => {
    return { type: UPDATE_VALUE, payload: data }
}

export const initialRetirement = {
    currentAge: 20,
    retirementAge: 55,
    ageOfDeath: 100,
    currentBitcoinHoldings: 0,
    bitcoinYearlyGrowthRate: 80,
    annualInflationRate: 5,
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
    numberOfRetirementPayments: function() {
        return this.yearsOfConsumption() * -1 
    },
    presentValueAtRetirement: function(){
        return this.requiredIncomeAtRetirement() * ((1 - (1 + this.realGrowthRate()) ** this.numberOfRetirementPayments()) / this.realGrowthRate()) * ( 1 + this.realGrowthRate())
    },
    presentValueNow: function(){
        return  this.presentValueAtRetirement()
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