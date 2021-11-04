import { Avatar, Divider, IconButton, Menu, MenuItem, Button } from '@mui/material'
import { useState } from 'react'
import useAuth from 'hooks/useAuth'
import { Link } from 'react-router-dom'

const AvatarMenu = () => {

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const { loggedIn, isGuest, signout, forgetGuest } = useAuth()

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
                    '& .MuiPaper-root': {
                        minWidth: '200px'
                    }
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

                { loggedIn && isGuest &&
                    <MenuItem
                        component={Link}
                        to='/login'
                    >
                        Log in
                    </MenuItem>
                }



                <Divider />
                    {
                    loggedIn && !isGuest &&
                    <Button 
                        sx={{width: '100%'}}
                        onClick={() => signout()}
                    >
                        Sign Out
                    </Button>
                    }

                    {
                        isGuest &&
                        <Button 
                            sx={{width: '100%'}}
                            onClick={() => forgetGuest()}
                        >
                            Forget Me
                        </Button>
                    }
            </Menu>
        </>
    )
}

export default AvatarMenu
