import { TOGGLE_DRAWER, TOGGLE_MODAL } from "state/reducers/appReducer";

export const toggleDrawer = (data) => {
    return { type: TOGGLE_DRAWER, payload: data}
}

export const toggleModal = (data) => {
    return { type: TOGGLE_MODAL, payload: data}
}