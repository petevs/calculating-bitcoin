import moment from "moment"

export const UPDATE_FORM = 'UPDATE_FORM'
export const UPDATE_FOCUS = 'UPDATE_FOCUS'
export const UPDATE_PRICE = 'UPDATE_PRICE'

export const initialTransactionForm = {
    type: 'sell',
    date: undefined,
    dollarAmount: 0,
    price: 0,
    bitcoin: 0,
    useHistoricalPrice: true,
    lastFocused: [],
    secondLastFocused: ''
}


const middleware = (currentState, incomingChange) => {

    const { lastFocused } = currentState

    if(lastFocused.includes('dollarAmount') && lastFocused.includes('price')) {

    }


}




export const transactionFormReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_FORM:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case UPDATE_PRICE:
            const { lastFocused} = state
            if(lastFocused.includes('dollarAmount') && lastFocused.includes('price')) {
                return {
                    ...state,
                    price: action.payload,
                    bitcoin: state.dollarAmount / action.payload
                }
            }
            if(lastFocused.includes('bitcoin') && lastFocused.includes('price')) {

                return {
                    ...state,
                    price: action.payload,
                    dollarAmount: state.bitcoin * action.payload
    
                }
            }
            return {
                ...state,
                price: action.payload
            }
        case UPDATE_FOCUS:
            if(state.lastFocused.length > 1){
                state.lastFocused.shift()
            }

            return {
                ...state,
                lastFocused: [...state.lastFocused, action.payload]
            }
        default:
            return state
    }
}