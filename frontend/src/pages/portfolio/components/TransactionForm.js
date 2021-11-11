import { TextField, InputAdornment, IconButton, Button, Switch } from "@mui/material"
import { Box } from "@mui/system"
import DateField from "components/DateField"
import FormHeader from "components/form/FormHeader"
import NumberFormat from 'react-number-format'
import { SiBitcoinsv } from 'react-icons/si'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import GlobalContext from "state/GlobalContext"
import { useReducer } from 'react'
import { updateBitcoin, updateDollarAmount, updateFocus, updateForm, updatePrice } from "state/transactionForm/transactionFormActions"
import moment from "moment"
import { initialTransactionForm, transactionFormReducer } from "state/transactionForm/transactionFormReducer"

const TransactionForm = () => {
    
    const [state, dispatch] = useReducer(transactionFormReducer, initialTransactionForm)
    
    const { 
        date,
        dollarAmount,
        price,
        bitcoin,
        useHistoricalPrice,
    } = state


    console.log(state)

    const handleFocus = (name) => {
        dispatch(updateFocus(name))
    }

    const handleDateChange = (value) => {
        dispatch(updateForm({
            name: 'date',
            value: value
        }))
    }

    return (
        <Box component='form'  sx={wrapper}>
            <FormHeader heading={'Add Transaction'} />
            <DateField 
                label='Date'
                value={date || moment()}
                onChange={handleDateChange}
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
                    value={dollarAmount}
                    onValueChange={(e) => dispatch(updateDollarAmount(e.floatValue))}
                    onFocus={() => handleFocus('dollarAmount')}
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
                    value={price}
                    onValueChange={(e) => dispatch(updatePrice(e.floatValue))}
                    onFocus={() => handleFocus('price')}
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
                    value={bitcoin}
                    onValueChange={(e) => dispatch(updateBitcoin(e.floatValue))}
                    onFocus={() => handleFocus('bitcoin')}
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