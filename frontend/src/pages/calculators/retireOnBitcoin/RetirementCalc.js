import Page from 'components/Page'
import { useReducer, useContext, useEffect } from 'react'
import { retirementReducer, initialRetirement, updateValue, updateStatus, updateResults, cancelChanges } from './retireOnBitcoinReducer'
import RetirementSummary from './RetirementSummary'
import GlobalContext from 'state/GlobalContext'
import { Box } from '@mui/system'
import RetirementPaymentSchedule from './RetirementPaymentSchedule'
import RetirementCalcTabs from './RetirementCalcTabs'
import RetirementChart from './RetirementChart'
import RetirementDrawer from './RetirementDrawer'
import CalculatorHeader from './CalculatorHeader'
import { useState } from 'react'
import Loading from 'components/Loading';
import { calculateRetirement } from './calculateRetirement'

const RetirementCalc = () => {

    const { state } = useContext(GlobalContext)
    const {current_price: price } = state.marketData.marketData
    const { currency } = state.user

    const initialValues = {
        ...initialRetirement,
        currentPriceOfBitcoin: price[currency]
    }


    const [reducerState, dispatch] = useReducer(retirementReducer, initialValues)


    const [open, setOpen] = useState(true)

    const toggleDrawer = () => {
        setOpen(!open)
    }

    const updateCalculation = () => {
        dispatch(updateStatus('calculating'))
        const results = calculateRetirement(reducerState)
        dispatch(updateResults(results))
    }


    useEffect(() => {
        updateCalculation()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    console.log(reducerState)

    const Content = () => {
        switch(reducerState.status) {
            case 'calculating':
                return <Loading />
            case 'done':
                return ( 
                <>
                    <RetirementSummary state={reducerState} />
                    <Box sx={{display: 'grid', gridTemplateColumns: '1fr', alignItems: 'start'}}>
                        <RetirementChart data={reducerState.results.paymentSchedule} />
                    </Box>
                    <RetirementCalcTabs
                        tabs={[
                            {
                                key: 1, 
                                title: 'Retirement Payment Schedule', 
                                content: <RetirementPaymentSchedule 
                                            rows={reducerState.results.paymentSchedule} 
                                        />
                            },
                        ]}
                    />
                </>
            )
            default:
                return <>Enter Your Details...</>
        } 
    }


    return (
        <>
        <RetirementDrawer 
            state={reducerState} 
            dispatch={dispatch} 
            updateValue={updateValue}
            updateCalculation={updateCalculation}
            cancelChanges={cancelChanges}
            open={open} 
            toggleDrawer={toggleDrawer} 
        />
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem'}}>
            <CalculatorHeader title='Retire on Bitcoin Calculator' open={open} toggleDrawer={toggleDrawer} />
            <Content />
        </Page>
        </>
    )
}

export default RetirementCalc

