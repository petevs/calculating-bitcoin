import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import NumberFormat from 'react-number-format'

const TickerBox = (props) => {

    return (
        <Box sx={style}>
            <Typography variant='h6'>{props.title}</Typography>
            <NumberFormat
                displayType='text'
                value={props.value}
                {...props.numberFormat}
            />
        </Box>
    )
}

export default TickerBox


const style = {
    display: 'grid',
    gridTemplateColumns: 'auto',
    textAlign: 'center',
    gap: '.05rem',
    '& h6': {
        textTransform: 'uppercase',
        fontWeight: '400',
        fontSize: '.6rem',
        marginBottom: '-.25rem'
    }
}