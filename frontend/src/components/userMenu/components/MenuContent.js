import React from 'react'
import useAuth from 'hooks/useAuth'
import LoggedinMenu from './LoggedinMenu'
import NotLoggedinMenu from './NotLoggedinMenu'
import LoggedInGuestMenu from './LoggedInGuestMenu'

const MenuContent = () => {

    const { userState } = useAuth()

    const renderSwitch = () => {
        switch(userState()) {
            case 'LoggedinGuest':
                return <LoggedInGuestMenu />
            case 'Loggedin':
                return <LoggedinMenu />
            case 'NotLoggedin':
                return <NotLoggedinMenu />
            default:
                return 'not logged in'
        }
    }

    return (
        <>
            {renderSwitch()}
        </>
    )
}

export default MenuContent
