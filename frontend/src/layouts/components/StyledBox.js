import { Box } from '@mui/system'
import React from 'react'

const StyledBox = (props) => {
    return (
        <Box
            sx={{
                backgroundColor: 'rgb(33, 43, 54)',
                color: 'rgba(255, 255, 255)',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                backgroundImage: 'none',
                boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) 0px 16px 32px -4px',
                borderRadius: '16px',
                padding: '2rem',
                ...props.sx
            }}
        >
            {props.children}
        </Box>
    )
}

export default StyledBox
