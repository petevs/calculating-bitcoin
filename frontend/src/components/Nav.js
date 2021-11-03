import React from 'react'
import { Box, AppBar, IconButton, Avatar } from '@mui/material/';
import Logo from './Logo';
import SideBar from './SideBar';

const Nav = () => {
    return (
            <AppBar
                sx={{
                    backgroundColor: '#FFFFFF',
                    zIndex: 9999,
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
                    <SideBar />
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
