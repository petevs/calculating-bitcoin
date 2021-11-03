import React from 'react'
import { Box, AppBar } from '@mui/material/';
import Logo from './Logo';
import SideBar from './SideBar';
import AvatarMenu from './AvatarMenu';

const Nav = () => {
    return (
            <AppBar
                sx={{
                    zIndex: 9999,
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'auto auto 1fr auto',
                        padding: '.5rem',
                        gap: '.5rem 1rem',
                        alignItems: 'center'
                    }}
                >
                    <SideBar />
                    <Logo />
                    <Box></Box>
                    <AvatarMenu />
                </Box>
            </AppBar>
    )
}

export default Nav
