import React from 'react'
import { Box } from '@mui/system'

const AccountPageWrapper = (props) => {
    return (
        <Box 
            sx={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '1rem',
            '@media (max-width:768px)': {
                gridTemplateColumns: '1fr'
            }
            }}
        >
            {props.children}
        </Box>
    )
}

export default AccountPageWrapper
