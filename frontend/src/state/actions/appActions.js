import { TOGGLE_DRAWER } from "state/reducers/appReducer";

export const toggleDrawer = (data) => {
    return { type: TOGGLE_DRAWER, payload: data}
}