import { TextField, InputAdornment, IconButton, Button, Switch, Divider, FormControlLabel } from "@mui/material"
import { Box } from "@mui/system"
import DateField from "components/DateField"
import FormHeader from "components/form/FormHeader"
import NumberFormat from 'react-number-format'
import { SiBitcoinsv } from 'react-icons/si'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useReducer, useContext, useEffect } from 'react'
import { updateBitcoin, updateDollarAmount, updateFocus, updateForm, updatePrice, toggleTransactionType, toggleUseHistoricalPrice, updateDate } from "state/transactionForm/transactionFormActions"
import moment from "moment"
import { initialTransactionForm, transactionFormReducer } from "state/transactionForm/transactionFormReducer"
import GlobalContext from "state/GlobalContext"
import useFirebase from 'hooks/useFirebase'
import useModal from 'hooks/useModal'

const TransactionForm = (props) => {

    const { state } = useContext(GlobalContext)

    console.log(props)

    const initialValues = {
        ...initialTransactionForm,
        id: props.id || Date.now(),
        historicalPrices: state.marketData.historicalData,
        date: moment(props.date) || initialTransactionForm.date,
        dollarAmount: Math.round(props.dollarAmount) || initialTransactionForm.dollarAmount,
        useHistoricalPrice: props.useHistoricalPrice || initialTransactionForm.useHistoricalPrice,
        type: props.type || initialTransactionForm.type,
        price: props.price || initialTransactionForm.type,
        bitcoin: props.bitcoin || initialTransactionForm.bitcoin
    }
    
    const [reducerState, dispatch] = useReducer(transactionFormReducer, initialValues)
    const { addTransaction } = useFirebase()
    const { handleModalClose } = useModal()


    const handleSubmit = (e) => {
        e.preventDefault()
        const values = {
            id: reducerState.id,
            date: reducerState.date.format('YYYY-MM-DD'),
            dollarAmount: reducerState.dollarAmount,
            useHistoricalPrice: reducerState.useHistoricalPrice,
            price: reducerState.price,
            type: reducerState.type,
            bitcoin: reducerState.bitcoin
        }
        addTransaction(props.portfolioId, values)
        handleModalClose()
    }

    console.log(reducerState)

    const handleFocus = (name) => {
        dispatch(updateFocus(name))
    }

    useEffect(() => {
        if(!props.date){
            dispatch(updateDate(moment()))
        }
    },[props.date])

    return (
        <Box component='form'  onSubmit={handleSubmit} sx={wrapper}>
            <FormHeader heading={props.formType === 'edit' ? 'Edit Transaction' : 'Add Transaction'} />
            <DateField 
                label='Date'
                value={reducerState.date || moment()}
                onChange={(value) => dispatch(updateDate(value))}
                minDate={moment('2013-05-01')}
            />
            <NumberFormat
                label='Price'
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
            <FormControlLabel 
                sx={historicalSwitch} 
                control={
                    <Switch 
                        size='small'
                        checked={reducerState.useHistoricalPrice}
                        onChange={() => dispatch(toggleUseHistoricalPrice())} 
                    />
                } 
                label='Use historical price' 
            />

                <Box>
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
                        <Box sx={icon}>
                            <IconButton size='small' onClick={() => dispatch(toggleTransactionType())}>              
                            <CompareArrowsIcon />
                            </IconButton>
                            <Divider />
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
                </Box>
            <Button variant='contained' size='large' type='submit'>{props.formType === 'edit' ? 'Save Changes' : 'Add Transaction'}</Button>
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

const icon = {
    
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    alignItems: 'center',
    gap: '1rem',

    '& button': {
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '50%',
    },

    '& svg': {
        height: '24px',
        width: '24px',
        transform: 'rotate(90deg)',
    }
}

const historicalSwitch = {
    '& .MuiTypography-root': {
            fontSize: '.875rem',
            color: 'rgba(255, 255, 255, 0.7)'
        },
    marginLeft: 0, 
    marginRight: 0, 
    justifyContent: 'end'
}