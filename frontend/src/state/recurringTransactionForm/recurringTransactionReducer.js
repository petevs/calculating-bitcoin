import moment from 'moment'

const UPDATE_VALUE = 'UPDATE_VALUE'
const TOGGLE_USE_END_DATE = 'TOGGLE_END_DATE'

export const updateValue= (data) => {
    return { type: UPDATE_VALUE, payload: data}
}

export const toggleUseEndDate = (data) => {
    return { type: TOGGLE_USE_END_DATE, payload: data}
}

export const initialRecurringTransaction = {
    id: Date.now(),
    startDate: moment(),
    useEndDate: false,
    endDate: moment(),
    purchaseAmount: 0,
    frequency: 'daily'
}


export const recurringTransactionReducer = (state = initialRecurringTransaction, action) => {
    switch(action.type) {
        case UPDATE_VALUE:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case TOGGLE_USE_END_DATE:
            return {
                ...state,
                useEndDate: !state.useEndDate
            }
        default:
            return state
    }
}