import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { SiBitcoinsv } from 'react-icons/si'
import {Link} from 'react-router-dom'

const Logo = () => {
    return (
        <Box
            component={Link}
            style={{textDecoration: 'none', color: 'inherit'}}
            to='/'
            sx={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '.5rem',
                justifyItems: 'start',
                alignContent: 'center',
                alignItems: 'center',
                letterSpacing: '-.5px',
                svg: {
                    color: 'orange',
                    width: '24px',
                    height: '24px'
                }
            }}
        >
            <SiBitcoinsv />
            <Typography variant='h6' sx={logoStyle}>Calculating Bitcoin</Typography>
        </Box>
    )
}

export default Logo


const logoStyle = {
    '@media (max-width: 640px)': {
        fontSize: '1.1rem'
    }
}