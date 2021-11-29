import Page from 'components/Page'
import PageHeader from 'components/PageHeader'
import RetirementForm from './RetirementForm'
import { useReducer, useContext } from 'react'
import { retirementReducer, initialRetirement, updateValue } from './retireOnBitcoinReducer'
import RetirementSummary from './RetirementSummary'
import GlobalContext from 'state/GlobalContext'
import { Box } from '@mui/system'
import RetirementPaymentSchedule from './RetirementPaymentSchedule'
import RetirementCalcTabs from './RetirementCalcTabs'
import RetirementChart from './RetirementChart'
import SavedCalcs from './SavedCalcs'
import InputSlider from './InputSlider'
import { Drawer, Typography } from '@mui/material'
import RetirementDrawer from './RetirementDrawer'
import CalculatorHeader from './CalculatorHeader'
import { useState } from 'react'

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


    return (
        <>
        <RetirementDrawer state={reducerState} dispatch={dispatch} updateValue={updateValue} open={open} toggleDrawer={toggleDrawer} />
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem'}}>
            <CalculatorHeader title='Retire on Bitcoin Calculator' open={open} toggleDrawer={toggleDrawer} />
            <RetirementSummary state={reducerState} />
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr', alignItems: 'start'}}>
                <RetirementChart data={reducerState.resultsTable()} />
            </Box>
            <RetirementCalcTabs
                tabs={[
                    {
                        key: 1, 
                        title: 'Retirement Payment Schedule', 
                        content: <RetirementPaymentSchedule 
                                    rows={reducerState.resultsTable()} 
                                />
                    },
                    {
                        key: 2,
                        title: 'Inflation Adjusted Income Schedule',
                        content: 'hi'
                    }
                ]}
            />

        </Page>
        </>
    )
}

export default RetirementCalc

