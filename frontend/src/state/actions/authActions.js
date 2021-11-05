import { SET_PENDING, SET_AUTH } from "state/reducers/authReducer";

export const setAuth = (data) => {
  return { type: SET_AUTH, payload: data };
};


export const setPending = (data) => {
    return { type: SET_PENDING, payload: data };
  };
  