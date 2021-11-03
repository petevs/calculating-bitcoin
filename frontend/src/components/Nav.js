import React from 'react'
import { Box, AppBar } from '@mui/material/';

const Nav = () => {
    return (
            <AppBar
                sx={{
                    backgroundColor: 'secondary'
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        justifyItems: 'center'
                    }}
                >
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>

                </Box>
            </AppBar>
    )
}

export default Nav
