export const SET_USER = "SET_USER";
export const SET_PENDING = "SET_PENDING"

export const initialAuthState = {
  pending: true
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        uid: action.payload.uid,
        email: action.payload.email,
        displayName: action.payload.displayName,
        isAnonymous: action.payload.isAnonymous,
        photoURL: action.payload.photoURL
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
