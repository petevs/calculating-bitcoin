import { Box } from '@mui/system'
import React from 'react'

const InputBox = ({children}) => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '.5rem'
            }}
        >
            {children}
        </Box>
    )
}

export default InputBox
