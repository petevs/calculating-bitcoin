import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import React from 'react'
import NumberFormat from 'react-number-format'

const Scorecard = (props) => {
    return (
        <Box sx={wrapper}>
            <Typography variant='h3' sx={title}>{props.title}</Typography>
            <NumberFormat
                value={props.value}
                displayType='text'
                {...props.numberFormat}
            />
        </Box>
    )
}

export default Scorecard

const wrapper = {
    display: 'grid',
    backgroundColor: 'rgb(33, 43, 54)',
    padding: '1rem',
    borderRadius: '6px',
    boxShadow: '0 0 0 1px rgba(63, 63, 68, 0.05)',

    '& span': {
        fontSize: '1.5rem',
        color: '#fff',
        fontWeight: '600'
    }
}

const title = {
    fontSize: '.75rem',
    color: '#fff',
    fontWeight: '500',
    textTransform: 'uppercase'
}