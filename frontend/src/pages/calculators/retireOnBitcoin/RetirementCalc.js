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
        <>
        <Drawer
            anchor={'right'}
            open={true}
            variant={'persistent'}
            sx={{
                '& .MuiDrawer-paper': {
                    width: '300px',
                    top: '75px',
                    right: '10px',
                    backgroundColor: 'rgb(33, 43, 54)',
                    borderRadius: '8px',
                    backgroundImage: 'none',
                    color: 'rgb(145,158,171)',
                    borderRight: '1px solid rgba(145, 158, 171, 0.24)',
                    boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 4px 0px, rgb(0 0 0 / 24%) 0px 24px 48px 0px',
                    height: 'calc(100% - 175px)'
                }
                }}
                BackdropProps={{ invisible: true }}
        >

            <Typography sx={{fontSize: '1rem', fontWeight: '700', color: '#fff', padding: '1rem', borderBottom: '1px solid rgba(145, 158, 171, 0.24)'}}>Edit Details</Typography>
            <RetirementForm state={reducerState} dispatch={dispatch} updateValue={updateValue}/>
        </Drawer>
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
        </>
    )
}

export default RetirementCalc

