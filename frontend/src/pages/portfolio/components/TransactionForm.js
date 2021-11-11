import { TextField, InputAdornment, IconButton, Button, Switch } from "@mui/material"
import { Box } from "@mui/system"
import DateField from "components/DateField"
import FormHeader from "components/form/FormHeader"
import NumberFormat from 'react-number-format'
import { SiBitcoinsv } from 'react-icons/si'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import GlobalContext from "state/GlobalContext"
import { useContext } from 'react'
import { updateForm } from "state/transactionForm/transactionFormActions"

const TransactionForm = () => {

    const { state, dispatch } = useContext(GlobalContext)

    const handleChange = (e, name) => {
        dispatch(updateForm({
            name: name,
            value: e.floatValue
        }))
    }

    return (
        <Box component='form'  sx={wrapper}>
            <FormHeader heading={'Add Transaction'} />
            <DateField 
                label='Date'
            />
            <Box sx={innerFlexBox}>
                <NumberFormat
                    label='From: Dollars (usd)'
                    customInput={TextField}
                    thousandSeparator={true}
                    InputProps={{
                        startAdornment: (<InputAdornment position='start'>
                            $
                        </InputAdornment>),
                    }}
                />
                <Box sx={priceRow}>
                <IconButton><CompareArrowsIcon /></IconButton>
                <Box>
                <NumberFormat
                    label='Exchange Rate (usd)'
                    customInput={TextField}
                    thousandSeparator={true}
                    InputProps={{
                        startAdornment: (<InputAdornment position='start'>
                            1BTC = $
                        </InputAdornment>),
                    }}
                    onValueChange={(e) => handleChange(e, 'price')}
                />
                <Switch size='small' /> Use Historical Price
                </Box>
                </Box>
                <NumberFormat
                    label='To: Bitcoin'
                    customInput={TextField}
                    InputProps={{
                        startAdornment: (<InputAdornment position='start'>
                            <SiBitcoinsv />
                        </InputAdornment>),
                    }}
                />
            </Box>
            <Button variant='contained'>Add Transaction</Button>
        </Box>
    )
}

export default TransactionForm

const wrapper = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    padding: '1rem'
}

const innerFlexBox = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
}

const priceRow = {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    alignItems: 'center',
    gap: '1rem',

    '& svg': {
        height: '36px',
        width: '36px',
        transform: 'rotate(90deg)',
    }
}