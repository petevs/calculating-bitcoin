import { Drawer, IconButton, useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import useDrawer from 'hooks/useDrawer';

const SideBar = () => {

    const { drawerOpen, handleDrawerClose, handleDrawerToggle } = useDrawer()

    const mobile = useMediaQuery('(max-width: 768px)')
    const drawerWidth = 240

    return (
        <>
                <IconButton
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon />
                </IconButton>
            <Drawer
                variant={'temporary'}
                sx={{
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    top: '64px',
                    backgroundColor: 'rgb(22, 28, 36)',
                    color: 'rgb(145,158,171)'
                }
                }}
                BackdropProps={{ invisible: !mobile ? true : false}}
                open={drawerOpen}
                onClose={handleDrawerClose}
            >
                Dollar Cost Average
            </Drawer> 
        </>
    )
}

export default SideBar
