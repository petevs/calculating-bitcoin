import React from 'react'
import { Box, AppBar, IconButton, Avatar } from '@mui/material/';
import Logo from './Logo';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle'

const Nav = () => {
    return (
            <AppBar
                sx={{
                    backgroundColor: '#FFFFFF'
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'auto auto 1fr auto',
                        padding: '.5rem 1rem',
                        gap: '1rem'
                    }}
                >
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Logo />
                    <Box></Box>
                    <IconButton>
                        <Avatar
                            sx={{
                                height: '32px',
                                width: '32px'
                            }}
                        />
                    </IconButton>

                </Box>
            </AppBar>
    )
}

export default Nav
