export const SET_USER = "SET_USER";

export const initialAuthState = {
    avatarURL: '',
    currency: 'usd',
    displayName: '',
    email: '',
    uid: ''
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        uid: action.payload.uid,
        isAnonymous: action.payload.isAnonymous,
      };
    default:
      return state;
  }
};
