import { TextField, InputAdornment, IconButton, Button, Switch } from "@mui/material"
import { Box } from "@mui/system"
import DateField from "components/DateField"
import FormHeader from "components/form/FormHeader"
import NumberFormat from 'react-number-format'
import { SiBitcoinsv } from 'react-icons/si'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useReducer, useContext } from 'react'
import { updateBitcoin, updateDollarAmount, updateFocus, updateForm, updatePrice, toggleTransactionType } from "state/transactionForm/transactionFormActions"
import moment from "moment"
import { initialTransactionForm, transactionFormReducer } from "state/transactionForm/transactionFormReducer"
import GlobalContext from "state/GlobalContext"

const TransactionForm = () => {
    
    const [reducerState, dispatch] = useReducer(transactionFormReducer, initialTransactionForm)
    const { state } = useContext(GlobalContext)

    console.log(reducerState.historicalPrice(state.marketData.historicalData))

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
                value={reducerState.date || moment()}
                onChange={handleDateChange}
            />
            <Box sx={{...innerFlexBox, flexDirection: reducerState.type === 'buy' ? 'column' : 'column-reverse'}}>
                <NumberFormat
                    label={reducerState.type === 'buy' ? 'From: Dollars' : 'To: Dollars'}
                    customInput={TextField}
                    thousandSeparator={true}
                    InputProps={{
                        startAdornment: (<InputAdornment position='start'>
                            $
                        </InputAdornment>),
                    }}
                    value={reducerState.dollarAmount}
                    onValueChange={(e) => dispatch(updateDollarAmount(e.floatValue))}
                    onFocus={() => handleFocus('dollarAmount')}
                    decimalScale={2}
                />
                <Box sx={priceRow}>
                <IconButton onClick={() => dispatch(toggleTransactionType())}><CompareArrowsIcon /></IconButton>
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
                    value={reducerState.price}
                    onValueChange={(e) => dispatch(updatePrice(e.floatValue))}
                    onFocus={() => handleFocus('price')}
                    decimalScale={2}
                />
                <Switch size='small' /> Use Historical Price
                </Box>
                </Box>
                <NumberFormat
                    label={reducerState.type === 'buy' ? 'To: Bitcoin' : 'From: Bitcoin'}
                    customInput={TextField}
                    InputProps={{
                        startAdornment: (<InputAdornment position='start'>
                            <SiBitcoinsv />
                        </InputAdornment>),
                    }}
                    value={reducerState.bitcoin}
                    onValueChange={(e) => dispatch(updateBitcoin(e.floatValue))}
                    onFocus={() => handleFocus('bitcoin')}
                    decimalScale={8}
                    fixedDecimalScale={8}
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