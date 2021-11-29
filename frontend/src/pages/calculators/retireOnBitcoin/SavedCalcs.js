import React from 'react'
import { TextField, MenuItem } from '@mui/material'

const SavedCalcs = () => {
    return (
        <TextField
            select
            size='small'
        >
            <MenuItem>Saved Calculations</MenuItem>
        </TextField>
    )
}

export default SavedCalcs
