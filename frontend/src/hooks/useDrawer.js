import { useContext } from 'react'
import { toggleDrawer } from 'state/app/appActions'
import GlobalContext from 'state/GlobalContext'

const useDrawer = () => {

    const { state, dispatch } = useContext(GlobalContext)

    const { drawerOpen, drawerWidth } = state.app

    const handleDrawerClose = () => {
        dispatch(toggleDrawer(false))
    }

    const handleDrawerOpen = () => {
        dispatch(toggleDrawer(true))
    }

    const handleDrawerToggle = () => {
        dispatch(toggleDrawer())
    }


    return { drawerOpen, drawerWidth, handleDrawerClose, handleDrawerOpen, handleDrawerToggle }
}

export default useDrawer
