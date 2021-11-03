import { useContext } from 'react'
import { toggleDrawer } from 'state/actions/appActions'
import GlobalContext from 'state/contexts/GlobalContext'

const useDrawer = () => {

    const { state, dispatch } = useContext(GlobalContext)

    const { drawerOpen } = state.app

    const handleDrawerClose = () => {
        dispatch(toggleDrawer(false))
    }

    const handleDrawerOpen = () => {
        dispatch(toggleDrawer(true))
    }


    return { drawerOpen, handleDrawerClose, handleDrawerOpen }
}

export default useDrawer
