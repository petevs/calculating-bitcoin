import { UPDATE_FORM } from "./transactionFormReducer"

export const updateForm = (data) => {
    return { type: UPDATE_FORM, payload: data}
}