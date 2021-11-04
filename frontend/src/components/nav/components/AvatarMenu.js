import { Avatar, IconButton, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'

const AvatarMenu = () => {

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <IconButton onClick={handleClick}>
                <Avatar
                    sx={{ width: 32, height: 32 }}
                />
            </IconButton>
            

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                sx={{
                    zIndex: 99999,
                }}
            >
                <MenuItem>
                    <Avatar 
                        sx={{
                            width: 24,
                            height: 24,
                            ml: -0.5,
                            mr: 2
                        }}
                    /> Profile
                </MenuItem>
            </Menu>
        </>
    )
}

export default AvatarMenu
