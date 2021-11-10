import { DesktopDatePicker } from '@mui/lab'
import { TextField } from '@mui/material'
import DateField from 'components/DateField'
import moment from 'moment'
import { useContext } from 'react'
import GlobalContext from 'state/GlobalContext'
import DcaForm from './components/DcaForm'

const DollarCostAverage = () => {

    const { state } = useContext(GlobalContext)

    return (
        <div>
            <DcaForm />
        </div>
    )
}

export default DollarCostAverage
