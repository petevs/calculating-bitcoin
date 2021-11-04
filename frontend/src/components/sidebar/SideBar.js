import { Drawer, IconButton, useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import useDrawer from 'hooks/useDrawer';

const SideBar = () => {

    const { drawerOpen, drawerWidth, handleDrawerClose, handleDrawerToggle } = useDrawer()
    const mobile = useMediaQuery('(max-width: 768px)')

    return (
        <>
                <IconButton
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon />
                </IconButton>
            <Drawer
                variant={mobile ? 'temporary' : 'persistent'}
                sx={{
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    top: '68px',
                    backgroundColor: 'rgba(22,28,36,1)',
                    backgroundImage: 'none',
                    color: 'rgb(145,158,171)',
                    borderRight: '1px solid rgba(145, 158, 171, 0.24)',
                    padding: '1rem',
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
