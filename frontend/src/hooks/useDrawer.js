import { useContext } from 'react'
import { toggleDrawer } from 'state/actions/appActions'
import GlobalContext from 'state/contexts/GlobalContext'

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
