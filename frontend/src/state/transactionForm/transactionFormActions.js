import { UPDATE_FORM, UPDATE_FOCUS, UPDATE_PRICE, UPDATE_BITCOIN, UPDATE_DOLLAR_AMOUNT, TOGGLE_TRANSACTION_TYPE } from "./transactionFormReducer"

export const updateForm = (data) => {
    return { type: UPDATE_FORM, payload: data}
}

export const updateFocus = (data) => {
    return { type: UPDATE_FOCUS, payload: data}
}

export const updatePrice = (data) => {
    return { type: UPDATE_PRICE, payload: data}
}

export const updateBitcoin = (data) => {
    return { type: UPDATE_BITCOIN, payload: data}
}

export const updateDollarAmount = (data) => {
    return { type: UPDATE_DOLLAR_AMOUNT, payload: data}
}

export const toggleTransactionType = (data) => {
    return { type: TOGGLE_TRANSACTION_TYPE, payload: data}
}