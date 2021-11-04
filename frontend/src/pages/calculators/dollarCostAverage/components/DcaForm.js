import React from 'react'
import moment from 'moment'
import useForm from 'hooks/useForm'
import DateField from 'components/DateField'
import { TextField, InputAdornment, Typography } from '@mui/material'

const DcaForm = () => {

    const initialValues = {
        startDate: moment('01/01/2021'),
        endDate: moment(),
        purchaseAmount: 0,
    }

    const { values, handleFormChange, handleDateChange } = useForm(initialValues)

    return (
        <div>
            <Typography variant='h4'>Dollar Cost Average</Typography>
            <DateField
                label='Start Date'
                name='startDate'
                minDate={moment(1367107200000)}
                maxDate={moment()}
                value={values.startDate}
                handleChange={(e) => handleDateChange(e, 'startDate')}
            />
            <TextField
                label='Purchase Amount'
                name='purchaseAmount'
                value={values.purchaseAmount}
                onChange={handleFormChange}
                InputProps={{
                    startAdornment: (<InputAdornment position='start'>$</InputAdornment>),
                }}
                inputProps={{inputMode: 'numeric'}}
            />
        </div>
    )
}

export default DcaForm
