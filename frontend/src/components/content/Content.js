import { Box } from '@mui/system'
import useDrawer from 'hooks/useDrawer';

const Content = ({children}) => {

    const { drawerOpen, drawerWidth } = useDrawer()

    return (
        <Box
            sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            justifyItems: 'end',
            backgroundColor: 'rgba(22,28,36,1)',
            }}
        >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                width: drawerOpen ? `calc(100% - ${drawerWidth}px)` : '100%',
                minHeight: '100vh',
                alignContent: 'center',
                textAlign: 'center',
                backgroundColor: 'rgb(22,28,36)',
                '@media screen and (max-width: 768px)': {
                    width: '100%'
                }
              }}
            >
                {children}
            </Box>
        </Box>
    )
}

export default Content
