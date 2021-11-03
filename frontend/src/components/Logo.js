import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { SiBitcoinsv } from 'react-icons/si'

const Logo = () => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '.5rem',
                justifyItems: 'start',
                alignContent: 'center',
                alignItems: 'center',
                letterSpacing: '-.5px',
                color: 'white',
                svg: {
                    color: 'orange'
                }
            }}
        >
            <SiBitcoinsv />
            <Typography variant='body1'>Calculating Bitcoin</Typography>
        </Box>
    )
}

export default Logo
