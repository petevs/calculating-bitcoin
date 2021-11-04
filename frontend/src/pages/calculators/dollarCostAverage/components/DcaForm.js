import React from 'react'
import moment from 'moment'
import useForm from 'hooks/useForm'
import DateField from 'components/DateField'
import { TextField } from '@mui/material'

const DcaForm = () => {

    const initialValues = {
        startDate: moment('01/01/2021'),
        endDate: moment(),
        purchaseAmount: 0,
    }

    const { values, handleFormChange, handleDateChange } = useForm(initialValues)

    return (
        <div>
            <DateField
                label='Start Date'
                name='startDate'
                minDate={moment(1367107200000)}
                maxDate={moment()}
                value={values.startDate}
                handleChange={(e) => handleDateChange(e, 'startDate')}
            />
            <TextField
                name='purchaseAmount'
                value={values.purchaseAmount}
                onChange={handleFormChange}
            />
        </div>
    )
}

export default DcaForm
