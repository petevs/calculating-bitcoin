import { UPDATE_FORM, UPDATE_FOCUS, UPDATE_PRICE } from "./transactionFormReducer"

export const updateForm = (data) => {
    return { type: UPDATE_FORM, payload: data}
}

export const updateFocus = (data) => {
    return { type: UPDATE_FOCUS, payload: data}
}

export const updatePrice = (data) => {
    return { type: UPDATE_PRICE, payload: data}
}