import { FormControlLabel, Switch } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const PublicSwitch = () => {
    return (
        <Box sx={styles}>
            <FormControlLabel control={<Switch />} label='PUBLIC PORTFOLIO' />
        </Box>
    )
}

export default PublicSwitch

const styles = {
    gridColumn: '1 / span 2', 
    justifySelf: 'start', 
    color: '#fff'
}