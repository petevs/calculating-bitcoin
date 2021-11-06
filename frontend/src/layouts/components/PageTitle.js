import { Typography } from '@mui/material'
import React from 'react'

const PageTitle = ({children}) => {
    return (
        <Typography variant='h5' sx={{color: '#fff', fontWeight: 700,}}>
            {children}
        </Typography>
    )
}

export default PageTitle
