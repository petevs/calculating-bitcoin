export const SET_AUTH = "SET_AUTH";
export const SET_PENDING = "SET_PENDING"

export const initialAuthState = {
  pending: true,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        uid: action.payload.uid,
        isAnonymous: action.payload.isAnonymous,
      };
    case SET_PENDING:
      return {
        ...state,
        pending: action.payload
      }
    default:
      return state;
  }
};
