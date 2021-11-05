import { Box } from '@mui/system'
import React from 'react'

const InnerContentBox = ({children}) => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'mimax(250px, 1200px)',
                backgroundColor: 'red',
            }}
        >
            {children}
        </Box>
    )
}

export default InnerContentBox
