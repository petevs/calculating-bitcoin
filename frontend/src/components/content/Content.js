import { Box } from '@mui/system'

const Content = ({children}) => {

    return (
        <Box
            sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            justifyItems: 'end'
            }}
        >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                width: 'calc(100% - 240px)',
                minHeight: '100vh',
                alignContent: 'center',
                textAlign: 'center',
                backgroundColor: 'red',
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
