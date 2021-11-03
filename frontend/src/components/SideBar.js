import { Drawer, IconButton } from '@mui/material'
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

    const drawerWidth = 240

    return (
        <>
            <IconButton
                onClick={toggleDrawer}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
                open={open}
                onClose={handleDrawerClose}
            >
                Hi
            </Drawer> 
        </>
    )
}

export default SideBar
