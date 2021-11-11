import { TextField } from "@mui/material"
import { Box } from "@mui/system"
import DateField from "components/DateField"
import FormHeader from "components/form/FormHeader"

const TransactionForm = () => {



    return (
        <Box component='form'  sx={wrapper}>
            <FormHeader heading={'Add Transaction'} />
            <DateField 
                label='Date'
            
            />
        </Box>
    )
}

export default TransactionForm

const wrapper = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem'
}