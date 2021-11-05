import { Typography } from '@mui/material'
import React from 'react'

const PageTitle = ({children}) => {
    return (
        <Typography variant='h4' sx={{color: '#fff'}}>
            {children}
        </Typography>
    )
}

export default PageTitle
