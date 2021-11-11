export const UPDATE_FORM = 'UPDATE_FORM'

export const initialTransactionForm = {
    type: 'sell',
    date: '',
    dollarAmount: 0,
    price: 0,
    bitcoin: 0,
    useHistoricalPrice: true,
    lastFocused: '',
    secondLastFocused: ''
}





export const transactionFormReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_FORM:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        default:
            return state
    }
}