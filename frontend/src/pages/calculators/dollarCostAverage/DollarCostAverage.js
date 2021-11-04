import { DesktopDatePicker } from '@mui/lab'
import { TextField } from '@mui/material'
import DateField from 'components/DateField'
import moment from 'moment'
import { useContext } from 'react'
import GlobalContext from 'state/contexts/GlobalContext'
import DcaForm from './components/DcaForm'

const DollarCostAverage = () => {

    const { state } = useContext(GlobalContext)


    console.log(state)
    return (
        <div>
            <DcaForm />
        </div>
    )
}

export default DollarCostAverage
