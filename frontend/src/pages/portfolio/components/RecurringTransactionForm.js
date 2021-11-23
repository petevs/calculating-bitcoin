import { Box } from '@mui/system'
import { useReducer } from 'react'
import FormHeader from 'components/form/FormHeader'
import NumberFormat from 'react-number-format'
import { TextField, MenuItem, Button, FormControlLabel, Switch, InputAdornment } from '@mui/material'
import DateField from 'components/DateField'
import { initialRecurringTransaction, recurringTransactionReducer, toggleUseEndDate, updateValue } from 'state/recurringTransactionForm/recurringTransactionReducer'
import useModal from 'hooks/useModal'

const RecurringTransactionForm = (props) => {


    const initialValues = {
        ...initialRecurringTransaction
    }


    const [reducerState, dispatch ] = useReducer(recurringTransactionReducer, initialValues)
    const { handleModalClose } = useModal()

    const handleDateChange = (value, name) => {

        const payload = {
            name: name,
            value: value
        }
        return dispatch(updateValue(payload))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(reducerState)
        handleModalClose()
    }

    return (
        <Box component='form' sx={wrapper} onSubmit={handleSubmit}>
            <FormHeader heading='Add Recurring Transaction' />
            <DateField
                label='Start Date'
                value={reducerState.startDate}
                onChange={(value) => handleDateChange(value, 'startDate')}
            />
            <FormControlLabel
                sx={switchStyle}
                control={
                    <Switch
                        size='small'
                        checked={reducerState.useEndDate}
                        onChange={() => dispatch(toggleUseEndDate())}
                    />
                }
                label='Set End Date'
            />
            {
                reducerState.useEndDate &&
                <DateField
                    label='End Date'
                    value={reducerState.endDate}
                    onChange={(value) => handleDateChange(value, 'endDate')}
                    params={
                        {disableFuture: false}
                    }
                />
            }
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
                inputProps={{
                    type: 'numeric'
                }}
                value={reducerState.purchaseAmount}
                onValueChange={(e) => dispatch(
                    updateValue({
                        name: 'purchaseAmount', 
                        value: e.floatValue
                    })
                    )}
            />
            <TextField
                label='Frequency'
                select
                value={reducerState.frequency}
                onChange={(e) => dispatch(
                    updateValue({
                        name: 'frequency', 
                        value: e.target.value
                    })
                    )}
            >
                <MenuItem value={'daily'}>Daily</MenuItem>
                <MenuItem value={'weekly'}>Weekly</MenuItem>
                <MenuItem value={'monthly'}>Monthly</MenuItem>
            </TextField>
            <Button variant='contained' size='large' type='submit'>Add Recurring Transaction</Button>        
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