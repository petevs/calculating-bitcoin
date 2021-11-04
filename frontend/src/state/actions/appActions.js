import { TOGGLE_DRAWER, TOGGLE_MODAL, SET_MODAL_CONTENT } from "state/reducers/appReducer";

export const toggleDrawer = (data) => {
    return { type: TOGGLE_DRAWER, payload: data}
}

export const toggleModal = (data) => {
    return { type: TOGGLE_MODAL, payload: data}
}
export const setModalContent = (data) => {
    return { type: SET_MODAL_CONTENT, payload: data}
}