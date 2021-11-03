import { Drawer, IconButton, useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'

const SideBar = () => {

    const [open, setOpen] = useState(true)

    const handleDrawerClose = () => {
        setOpen(false)
    }

    const toggleDrawer = () => {
        setOpen(!open)
    }

    const mobile = useMediaQuery('(max-width: 768px)')
    const drawerWidth = 240

    return (
        <>
            {
                mobile &&
                <IconButton
                    onClick={toggleDrawer}
                >
                    <MenuIcon />
                </IconButton>
            }
            <Drawer
                variant={mobile ? 'temporary': 'permanent'}
                sx={{
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    top: '64px',
                    backgroundColor: 'rgb(22, 28, 36)',
                    color: 'rgb(145,158,171)'
                }
                }}
                open={open}
                onClose={handleDrawerClose}
            >
                Dollar Cost Average
            </Drawer> 
        </>
    )
}

export default SideBar
