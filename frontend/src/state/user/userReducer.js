export const SET_USER = "SET_USER";

export const initialUserState = {
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
        avatarURL: action.payload.avatarURL,
        currency: action.payload.currency,
        displayName: action.payload.displayName,
        email: action.payload.email,
      };
    default:
      return state;
  }
};
