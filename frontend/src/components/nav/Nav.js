import React from 'react'
import { Box, AppBar } from '@mui/material/';
import Logo from './components/Logo';
import SideBar from '../sidebar/SideBar';
import AvatarMenu from './components/AvatarMenu';
import UserMenu from 'components/userMenu/UserMenu';

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
                        gridTemplateColumns: 'auto auto auto 1fr auto',
                        padding: '.5rem',
                        gap: '.5rem 1rem',
                        alignItems: 'center',
                        backgroundColor: 'rgb(33, 43, 54)',
                        '@media (max-width: 768px)': {
                            gridTemplateColumns: 'auto auto 1fr auto',
                        }
                    }}
                >
                    <SideBar />
                    <Logo />
                    <Box></Box>
                    <UserMenu />
                </Box>
            </AppBar>
    )
}

export default Nav