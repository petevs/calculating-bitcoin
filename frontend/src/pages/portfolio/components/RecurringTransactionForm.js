import { Box } from '@mui/system'
import { useReducer } from 'react'
import FormHeader from 'components/form/FormHeader'
import NumberFormat from 'react-number-format'
import { TextField, MenuItem, Button, FormControlLabel, Switch, InputAdornment } from '@mui/material'
import DateField from 'components/DateField'
import { initialRecurringTransaction, recurringTransactionReducer, toggleUseEndDate, updateValue } from 'state/recurringTransactionForm/recurringTransactionReducer'
import useModal from 'hooks/useModal'
import useFirebase from 'hooks/useFirebase'
import moment from 'moment'

const RecurringTransactionForm = (props) => {


    const initialValues = {
        id: props.id || initialRecurringTransaction.id,
        useEndDate: props.useEndDate || initialRecurringTransaction.useEndDate,
        startDate: moment(props.startDate) || initialRecurringTransaction.startDate,
        endDate: moment(props.endDate) || initialRecurringTransaction.endDate,
        purchaseAmount: props.purchaseAmount || initialRecurringTransaction.purchaseAmount,
        frequency: props.frequency || initialRecurringTransaction.frequency

    }


    const [reducerState, dispatch ] = useReducer(recurringTransactionReducer, initialValues)
    const { handleModalClose } = useModal()
    const { addRecurringTransaction } = useFirebase()

    const handleDateChange = (value, name) => {

        const payload = {
            name: name,
            value: value
        }
        return dispatch(updateValue(payload))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const values = {
            ...reducerState,
            startDate: reducerState.startDate.format('YYYY-MM-DD'),
            endDate: reducerState.endDate.format('YYYY-MM-DD')
        }
        addRecurringTransaction(props.portfolioId, values)
        handleModalClose()
    }

    return (
        <Box component='form' sx={wrapper} onSubmit={handleSubmit}>
            <FormHeader heading={props.formType === 'edit' ? 'Edit Recurring Transaction' : 'Add Recurring Transaction'} />
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
            <Button variant='contained' size='large' type='submit'>{props.formType === 'edit' ? 'Save Changes' : 'Add Recurring Transaction'}</Button>
            <Button variant='outlined' size='large' onClick={handleModalClose}>Cancel</Button>        
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