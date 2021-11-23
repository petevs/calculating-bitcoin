import { Box } from '@mui/system'
import { useReducer } from 'react'
import FormHeader from 'components/form/FormHeader'
import NumberFormat from 'react-number-format'
import { TextField, MenuItem, Button, FormControlLabel, Switch, InputAdornment } from '@mui/material'
import DateField from 'components/DateField'

const RecurringTransactionForm = () => {
    return (
        <Box component='form' sx={wrapper}>
            <FormHeader heading='Add Recurring Transaction' />
            <DateField
                label='Start Date'
            />
            <FormControlLabel
                sx={switchStyle}
                control={
                    <Switch
                        size='small'
                        checked={false}
                    />
                }
                label='Set End Date'
            />
            <DateField
                label='End Date'
            />
            <NumberFormat
                label='Purchase Amount' 
                customInput={TextField}
                thousandSeparator={true}
                decimalScale={2}
                InputProps={{
                    startAdornment: (<InputAdornment position='start'>
                        $
                    </InputAdornment>),
                }}
            />
            <TextField
                label='Frequency'
                select
            >
                <MenuItem>Daily</MenuItem>
                <MenuItem>Weekly</MenuItem>
                <MenuItem>Monthly</MenuItem>
            </TextField>
            <Button variant='contained'>Add Recurring Transaction</Button>        
            </Box>
    )
}

export default RecurringTransactionForm

const wrapper = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    padding: '1rem'
}

const switchStyle = {
    '& .MuiTypography-root': {
        fontSize: '.875rem',
        color: 'rgba(255, 255, 255, 0.7)'
    },
    marginLeft: 0, 
    marginRight: 0, 
    justifyContent: 'end'
}