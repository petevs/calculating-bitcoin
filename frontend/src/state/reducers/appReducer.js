export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const SET_MODAL_CONTENT = 'SET_MODAL_CONTENT'

export const initialAppState = {
    drawerOpen: true,
    drawerWidth: 300,
    modalOpen: false,
    modalContent: null,
}

export const appReducer = (state, action) => {
    switch(action.type) {
    case TOGGLE_DRAWER:
        return {
            ...state,
            drawerOpen: action.payload || !state.drawerOpen
        }
    case TOGGLE_MODAL:
        return {
            ...state,
            modalOpen: action.payload || !state.modalOpen,
        }
    case SET_MODAL_CONTENT:
        return {
            ...state,
            modalContent: action.payload || null
        }
    default:
        return state
    }
}