import { Box } from '@mui/system'
import React from 'react'
import NumberFormat from 'react-number-format'

const Scorecard = (props) => {
    return (
        <Box>
            <NumberFormat
                value={props.value}
            />
        </Box>
    )
}

export default Scorecard
