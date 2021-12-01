const UPDATE_VALUE = 'UPDATE_VALUE'
const TOGGLE_CALCULATION_METHOD = 'TOGGLE_CALCULATION_METHOD'
const UPDATE_RESULTS = 'UPDATE_RESULTS'
const UPDATE_STATUS = 'UPDATE_STATUS'


//ACTIONS
export const updateValue = (data) => {
    return { type: UPDATE_VALUE, payload: data }
}

export const toggleCalculationMethod = (data) => {
    return { type: TOGGLE_CALCULATION_METHOD, payload: data}
}

export const updateStatus = (data) => {
    return { type: UPDATE_STATUS, payload: data}
}


export const updateResults = (data) => {
    return { type: UPDATE_RESULTS, payload: data }
}

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
    status: 'idle',
    results: {},
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
        case UPDATE_STATUS:
            return {
                ...state,
                status: action.payload
            }
        case UPDATE_RESULTS:
            return {
                ...state,
                results: {...action.payload},
                status: 'done'
            }
        default:
            return state
    }
}