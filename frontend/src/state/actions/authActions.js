import { SET_PENDING, SET_USER } from "state/reducers/authReducer";

export const setUser = (data) => {
  return { type: SET_USER, payload: data };
};


export const setPending = (data) => {
    return { type: SET_PENDING, payload: data };
  };
  