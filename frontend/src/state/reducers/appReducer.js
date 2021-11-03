export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'

export const initialAppState = {
    drawerOpen: true
}

export const appReducer = (state, action) => {
    switch(action.type) {
    case TOGGLE_DRAWER:
        return {
            ...state,
            drawerOpen: action.payload
        }
    default:
        return state
    }
}