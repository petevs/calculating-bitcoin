import Page from 'components/Page'
import PageHeader from 'components/PageHeader'
import RetirementForm from './RetirementForm'
import { useReducer, useContext } from 'react'
import { retirementReducer, initialRetirement, updateValue } from './retireOnBitcoinReducer'
import RetirementSummary from './RetirementSummary'
import GlobalContext from 'state/GlobalContext'

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
            <RetirementForm state={reducerState} dispatch={dispatch} updateValue={updateValue}/>
            <RetirementSummary state={reducerState} />
        </Page>
    )
}

export default RetirementCalc
