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
    bitcoinGrowthRateUntilRetirement: 58,
    bitcoinYearlyGrowthRate: 7,
    bitcoinPriceAtRetirement: 0,
    inflationUntilRetirement: 10,
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
        return (this.bitcoinGrowthRateUntilRetirement - this.inflationAfterRetirement) / 100
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
    bitcoinRetireToday: function(){
        return this.presentValueAtRetirement() / this.bitcoinPriceAtRetirement
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