import moment from "moment"

export const UPDATE_FORM = 'UPDATE_FORM'
export const UPDATE_FOCUS = 'UPDATE_FOCUS'
export const UPDATE_PRICE = 'UPDATE_PRICE'
export const UPDATE_BITCOIN = 'UPDATE_BITCOIN'
export const UPDATE_DOLLAR_AMOUNT = 'UPDATE_DOLLAR_AMOUNT'
export const TOGGLE_TRANSACTION_TYPE = 'TOGGLE_TRANSACTION_TYPE'
export const TOGGLE_USE_HISTORICAL_PRICE = 'TOGGLE_USE_HISTORICAL_PRICE'
export const UPDATE_DATE = 'UPDATE_DATE'

export const initialTransactionForm = {
    id: Date.now(),
    type: 'buy',
    date: moment(),
    dollarAmount: 0,
    historicalPrices: {},
    useHistoricalPrice: true,
    historicalPrice: function (inputDate){
        let date = this.date.format('YYYY-MM-DD')
        if(inputDate){
            date = inputDate.format('YYYY-MM-DD')
        }
        return this.historicalPrices[date]
    },
    price: 0,
    bitcoin: 0,
    lastFocused: [],
    secondLastFocused: ''
}

export const transactionFormReducer = (state = initialTransactionForm, action) => {

    const lastFocused = state.lastFocused
    const lastFocusedEmpty = lastFocused.length === 1

    switch(action.type) {
        case UPDATE_FORM:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case UPDATE_DATE:
            if(state.useHistoricalPrice && action.payload.isValid()){
                if(state.type === 'buy'){
                    return {
                        ...state,
                        date: action.payload,
                        price: state.historicalPrice(action.payload),
                        bitcoin: state.dollarAmount / state.historicalPrice(action.payload)
                    }
                }
                if(state.type === 'sell'){
                    return {
                        ...state,
                        date: action.payload,
                        price: state.historicalPrice(action.payload),
                        dollarAmount: state.dollarAmount * state.historicalPrice(action.payload)
                    }
                }
            }
            if(action.payload.isValid()){
                return {
                    ...state,
                    date: action.payload
                }
            }
            return state
        case UPDATE_PRICE:
            if(lastFocused.includes('dollarAmount')) {
                return {
                    ...state,
                    price: action.payload,
                    bitcoin: state.dollarAmount / action.payload,
                    useHistoricalPrice: false,
                }
            }
            if(lastFocused.includes('bitcoin')) {

                return {
                    ...state,
                    price: action.payload,
                    dollarAmount: state.bitcoin * action.payload,
                    useHistoricalPrice: false,
    
                }
            }
            return {
                ...state,
                price: action.payload
            }
        case UPDATE_BITCOIN:
            if(lastFocused.includes('price') || lastFocusedEmpty) {
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
            if(lastFocused.includes('price') || lastFocusedEmpty){
                return {
                    ...state,
                    bitcoin: action.payload / state.price,
                    dollarAmount: action.payload
                }
            }
            if(lastFocused.includes('bitcoin')){
                return {
                    ...state,
                    price: action.payload / state.bitcoin,
                    dollarAmount: action.payload
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
        case TOGGLE_TRANSACTION_TYPE:
            if(state.type === 'buy'){
                return {
                    ...state,
                    type: 'sell'
                }
            }
            return {
                ...state,
                type: 'buy'
            }
        case TOGGLE_USE_HISTORICAL_PRICE:
            if(state.useHistoricalPrice){
                return {
                    ...state,
                    useHistoricalPrice: false
                }
            }
            return {
                ...state,
                useHistoricalPrice: true,
                price: state.historicalPrice()
            }
        default:
            return state
    }

}