import React from 'react'
import { Box, AppBar } from '@mui/material/';
import Logo from './components/Logo';
import SideBar from '../sidebar/SideBar';
import UserMenu from 'components/userMenu/UserMenu';
import Prices from './components/Prices';
import { SiBox } from 'react-icons/si';

const Nav = () => {

    return (
            <Box
                position='fixed'
                sx={{
                    position: 'fixed',
                    zIndex: 9998,
                    color: '#fff',
                    width: '100%'
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
                    <Prices />
                    <UserMenu />
                </Box>
            </Box>
    )
}

export default Nav
