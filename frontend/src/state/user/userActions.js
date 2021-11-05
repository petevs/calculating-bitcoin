import { SET_USER } from "./userReducer";

export const setUser = (data) => {
    return { type: SET_USER, payload: data };
  };