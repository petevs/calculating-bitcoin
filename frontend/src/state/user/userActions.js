import { SET_USER, UPDATE_CURRENCY } from "./userReducer";

export const setUser = (data) => {
    return { type: SET_USER, payload: data };
  };

export const updateCurrency = (data) => {
  return { type: UPDATE_CURRENCY, payload: data}
}