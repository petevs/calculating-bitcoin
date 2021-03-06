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
                minHeight: 'calc(100vh - 64px)',
                alignContent: 'start',
                justifyItems: 'center',
                marginTop: '64px',
                padding: '2rem',
                backgroundColor: 'rgb(22,28,36)',
                '@media screen and (max-width: 768px)': {
                    width: '100%',
                    padding: '2rem 0',
                }
              }}
            >
                {children}
            </Box>
        </Box>
    )
}

export default Content
