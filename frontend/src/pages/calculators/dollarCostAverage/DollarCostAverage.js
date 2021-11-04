import { DesktopDatePicker } from '@mui/lab'
import { TextField } from '@mui/material'
import DateField from 'components/DateField'
import moment from 'moment'
import { useState } from 'react'
import DcaForm from './components/DcaForm'

const DollarCostAverage = () => {

    const [startDate, setStartDate] = useState(moment())

    const handleChange = (event, value) => {
        console.log(event)
        setStartDate(value)
    }

    return (
        <div>
            <DcaForm />
        </div>
    )
}

export default DollarCostAverage
