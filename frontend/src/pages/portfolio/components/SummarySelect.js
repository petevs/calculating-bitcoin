import { MenuItem, TextField } from "@mui/material"
import { Box } from "@mui/system"

const SummarySelect = (props) => {

    return (
        <Box sx={{display: 'grid', justifyItems: 'end', padding: '0 0 1rem 0'}}>
        <TextField
            select
            value={props.performanceType}
            onChange={props.handlePerformanceChange}
            size='small'
            sx={{width: '250px'}}
        >
            <MenuItem value='Unrealized Performance'>Unrealized Performance</MenuItem>
            <MenuItem value='Realized Performance'>Realized Performance</MenuItem>
        </TextField>
        </Box>
    )
}

export default SummarySelect
