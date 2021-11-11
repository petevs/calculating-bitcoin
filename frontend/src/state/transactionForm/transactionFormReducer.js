import moment from "moment"

export const UPDATE_FORM = 'UPDATE_FORM'
export const UPDATE_FOCUS = 'UPDATE_FOCUS'
export const UPDATE_PRICE = 'UPDATE_PRICE'
export const UPDATE_BITCOIN = 'UPDATE_BITCOIN'
export const UPDATE_DOLLAR_AMOUNT = 'UPDATE_DOLLAR_AMOUNT'

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

export const transactionFormReducer = (state, action) => {

    const { lastFocused} = state

    switch(action.type) {
        case UPDATE_FORM:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case UPDATE_PRICE:
            if(lastFocused.includes('dollarAmount')) {
                return {
                    ...state,
                    price: action.payload,
                    bitcoin: state.dollarAmount / action.payload
                }
            }
            if(lastFocused.includes('bitcoin')) {

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
        case UPDATE_BITCOIN:
            if(lastFocused.includes('price')) {
                return {
                    ...state,
                    dollarAmount: state.price * action.payload,
                    bitcoin: action.payload
                }
            }
            if(lastFocused.includes('dollarAmount')){
                return {
                    ...state,
                    price: state.dollarAmount / action.payload,
                    bitcoin: action.payload
                }
            }
            return {
                ...state,
                bitcoin: action.payload
            }
        case UPDATE_DOLLAR_AMOUNT:
            if(lastFocused.includes('price')){
                return {
                    ...state,
                    bitcoin: action.payload / state.price,
                    dollarAmount: action.payload
                }
            }
            if(lastFocused.includes('bitcoin')){
                return {
                    ...state,
                    price: action.payload / state.bitcoin
                }
            }
            return {
                ...state,
                dollarAmount: action.payload,
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