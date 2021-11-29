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

const RetirementCalc = () => {

    const { state } = useContext(GlobalContext)
    const {current_price: price } = state.marketData.marketData
    const { currency } = state.user

    const initialValues = {
        ...initialRetirement,
        currentPriceOfBitcoin: price[currency]
    }


    const [reducerState, dispatch] = useReducer(retirementReducer, initialValues)

    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem'}}>
            <PageHeader title='Retire on Bitcoin Calculator' />
            <RetirementSummary state={reducerState} />
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr', alignItems: 'start'}}>
                <RetirementChart data={reducerState.resultsTable()} />
                {/* <RetirementForm state={reducerState} dispatch={dispatch} updateValue={updateValue}/> */}
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
    )
}

export default RetirementCalc