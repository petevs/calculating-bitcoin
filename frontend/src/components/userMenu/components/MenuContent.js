import React from 'react'
import useAuth from 'hooks/useAuth'

const MenuContent = () => {

    const { userState } = useAuth()

    const renderSwitch = () => {
        switch(userState()) {
            case 'LoggedinGuest':
                return 'do not know him but he is logged in'
            case 'Loggedin':
                return 'this dude is logged in'
            case 'NotLoggedin':
                return <p>he there diddly dan</p>
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
