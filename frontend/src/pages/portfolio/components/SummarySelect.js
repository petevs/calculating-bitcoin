import { MenuItem, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from 'react'

const SummarySelect = () => {

    const [performanceType, setPerformanceType ] = useState('Unrealize Performance')

    const handleChange = (e) => {
        setPerformanceType(e.target.value)
    }

    return (
        <Box sx={{display: 'grid', justifyItems: 'end', padding: '0 0 1rem 0'}}>
        <TextField
            select
            value={performanceType}
            onChange={handleChange}
            size='small'
            sx={{width: '250px'}}
        >
            <MenuItem value='Unrealize Performance'>Unrealized Performance</MenuItem>
            <MenuItem value='Realized Performance'>Realized Performance</MenuItem>
        </TextField>
        </Box>
    )
}

export default SummarySelect
