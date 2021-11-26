import Page from 'components/Page'
import PageHeader from 'components/PageHeader'
import RetirementForm from './RetirementForm'
import { useReducer, useContext } from 'react'
import { retirementReducer, initialRetirement, updateValue } from './retireOnBitcoinReducer'
import RetirementSummary from './RetirementSummary'
import GlobalContext from 'state/GlobalContext'
import { Box } from '@mui/system'
import { columns } from './tableData'
import { DataGrid } from '@mui/x-data-grid'

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
            <Box sx={{display: 'grid', gridAutoFlow: 'column', gap: '1rem'}}>
                <RetirementForm state={reducerState} dispatch={dispatch} updateValue={updateValue}/>
                <RetirementSummary state={reducerState} />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
            <DataGrid
                    autoHeight
                    // className={classes.root}
                    rows={reducerState.resultsTable()}
                    columns={columns}
                    // checkboxSelection
                    pagination
                    rowsPerPageOptions={[25]}
                    pageSize={25}
                    disableSelectionOnClick
                    // disableColumnFilter
                    // hideFooter={true}
                    // disableColumnSelector
                    // disableColumnMenu
                    // components={{
                    //     Toolbar: CustomToolbar,
                    // }}
                />
            </Box>
        </Page>
    )
}

export default RetirementCalc
