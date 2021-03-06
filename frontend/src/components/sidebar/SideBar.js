import { Drawer, IconButton, useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import useDrawer from 'hooks/useDrawer';
import SideBarMenu from './components/SideBarMenu';

const SideBar = ({children}) => {

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
                    top: '64px',
                    backgroundColor: mobile ? 'rgba(22,28,36,1)' : 'transparent',
                    backgroundImage: 'none',
                    color: 'rgb(145,158,171)',
                    borderRight: '1px solid rgba(145, 158, 171, 0.24)',
                }
                }}
                BackdropProps={{ invisible: !mobile ? true : false}}
                open={drawerOpen}
                onClose={handleDrawerClose}
            >
                {children}
                <SideBarMenu />
            </Drawer> 
        </>
    )
}

export default SideBar
