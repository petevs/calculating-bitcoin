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

const fv = (pv, i, n) => {
    return pv * ((1 + i) ** n)
}

const cagr = (vFinal, vBegin, time) => {
    return ((vFinal / vBegin)**(1/time)) - 1
}

const toPercent = (x) => { return x / 100}


export const initialRetirement = {
    currentYear: 2021,
    currentAge: 20,
    retirementAge: 55,
    ageOfDeath: 100,
    currentBitcoinHoldings: 0,
    bitcoinGrowthRateUntilRetirement: 58,
    bitcoinYearlyGrowthRate: 20,
    bitcoinPriceAtRetirement: 0,
    inflationUntilRetirement: 10,
    inflationAfterRetirement: 5,
    requiredYearlyIncome: 100000,
    currentPriceOfBitcoin: 1,
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
        return fv(this.requiredYearlyIncome, toPercent(this.inflationAfterRetirement), this.yearsOfGrowth())
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