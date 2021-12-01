const UPDATE_VALUE = 'UPDATE_VALUE'
const TOGGLE_CALCULATION_METHOD = 'TOGGLE_CALCULATION_METHOD'
const UPDATE_RESULTS = 'UPDATE_RESULTS'
const UPDATE_STATUS = 'UPDATE_STATUS'
const CANCEL_CHANGES = 'CANCEL_CHANGES'


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

export const cancelChanges = (data) => {
    return { type: CANCEL_CHANGES, payload: data}
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
    editing: false,
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
    previousState: {}
}




export const retirementReducer = (state = initialRetirement, action) => {
    switch(action.type) {
        case UPDATE_VALUE:
            if(!state.editing){
                return {
                    ...state,
                    previousState: {...state},
                    [action.payload.name]: action.payload.value,
                    editing: true, 
                }
            }
            return {
                ...state,
                [action.payload.name]: action.payload.value,
                editing: true,
            }
        case CANCEL_CHANGES:
            return {
                ...state.previousState,
                previousState: {},
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
                status: 'done',
                editing: false
            }
        default:
            return state
    }
}