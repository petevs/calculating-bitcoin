import { Drawer, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'

const SideBar = () => {

    const [open, setOpen] = useState(true)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <>
            <IconButton
                onClick={handleDrawerOpen}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                open={open}
                onClose={handleDrawerClose}
            >
                Hi
            </Drawer> 
        </>
    )
}

export default SideBar
