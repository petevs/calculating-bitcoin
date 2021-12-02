import { MenuItem, TextField } from "@mui/material"
import { Box } from "@mui/system"

const SummarySelect = (props) => {

    return (
        <Box sx={selectStyle}>
        <TextField
            select
            value={props.performanceType}
            onChange={props.handlePerformanceChange}
            size='small'
            sx={{width: '250px', '@media (max-width: 768px)': { width: '100%'}}}
        >
            <MenuItem value='Total Performance'>Total Performance</MenuItem>
            <MenuItem value='Unrealized Performance'>Unrealized Performance</MenuItem>
            <MenuItem value='Realized Performance'>Realized Performance</MenuItem>
        </TextField>
        </Box>
    )
}

export default SummarySelect


const selectStyle = {
    display: 'grid', 
    justifyItems: 'end', 
    padding: '0 0 1rem 0',
}