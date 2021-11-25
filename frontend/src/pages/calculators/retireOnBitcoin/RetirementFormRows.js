import React from 'react'
import { Box } from '@mui/system'
import { Typography, Button, TextField } from '@mui/material'
import NumberFormat from 'react-number-format'
import ArrowRow from './ArrowRow'
import AddIcon from '@mui/icons-material/Add';

const RetirementFormRows = () => {
    return (
        <Box sx={boxStyle}>
            <Typography variant='body-2' sx={{color: '#fff'}}>Starting Year:</Typography>
            <Box sx={{display: 'grid', gridAutoFlow: 'column', gap: '1rem', marginTop: '1rem'}}>
                <NumberFormat
                    label='End of Year'
                    customInput={TextField}
                    value={2021}
                />
                <NumberFormat
                    label='Bitcoin Annual Growth Rate'
                    customInput={TextField}
                    value={58}
                    suffix='%'
                />
                <NumberFormat
                    label='Inflation Rate'
                    customInput={TextField}
                    suffix='%'
                    value={6}
                />
                <NumberFormat
                    label='Bitcoin Price'
                    customInput={TextField}
                    value={125000}
                    prefix='$'
                    thousandSeparator={true}
                />
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr', justifyContent: 'center', margin: '.75rem 0'}}>
                <Button size='small' startIcon={<AddIcon />} sx={{border: '1px dotted rgb(145,158,171)'}}> Add Row </Button>
            </Box>
            <ArrowRow />
            <Typography variant='body-2' sx={{color: '#fff'}}>Year of Retirement:</Typography>
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '1rem'}}>
                <NumberFormat
                    label='End of Year'
                    customInput={TextField}
                    value={2056}
                />
                <NumberFormat
                    label='Bitcoin Annual Growth Rate'
                    customInput={TextField}
                    value={58}
                    suffix='%'
                />
                <NumberFormat
                    label='Annual Inflation Rate'
                    customInput={TextField}
                    suffix='%'
                    value={6}
                />
                <NumberFormat
                    label='Bitcoin Price Estimate'
                    customInput={TextField}
                    value={125000}
                    prefix='$'
                    thousandSeparator={true}
                />
            </Box>
            <ArrowRow />
            </Box>
    )
}

export default RetirementFormRows

const boxStyle = {
    backgroundColor: '#212B36',
    boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) 0px 16px 32px -4px',
    borderRadius: '1rem',
    padding: '2rem',
    color: '#fff',
}