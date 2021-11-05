import React from 'react'
import useMenu from 'hooks/useMenu'
import AvatarButton from './components/AvatarButton'
import MenuBox from './components/MenuBox'
import MenuContent from './components/MenuContent'

const UserMenu = () => {

    const { anchorEl, open, handleClick, handleClose} = useMenu()

    return (
        <>
            <AvatarButton handleClick={handleClick} />

            <MenuBox
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
            >
                <MenuContent />
            </MenuBox>
        </>
    )
}

export default UserMenu
