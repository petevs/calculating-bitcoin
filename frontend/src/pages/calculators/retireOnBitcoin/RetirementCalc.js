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
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'

const RetirementCalc = () => {

    const classes = useStyles()

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
            </Box>
            <RetirementSummary state={reducerState} />
            <Box sx={tableContainerStyle}>
            <Typography variant='h6'>Retirement Payment Schedule</Typography>
            <Box sx={{ flexGrow: 1 }}>
            <DataGrid
                    autoHeight
                    className={classes.root}
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
            </Box>
        </Page>
    )
}

export default RetirementCalc

const tableContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#212B36',
    boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) 0px 16px 32px -4px',
    borderRadius: '1rem',
    padding: '1rem',
    color: '#fff',
    '& h6': {
        padding: '1rem 0',
        fontWeight: 700,
    }
}


const useStyles = makeStyles({
    root: {
        border: 'none',
        '& .MuiDataGrid-columnsContainer': {
            backgroundColor: '#333d48',
            border: 'none',
            borderRadius: '8px 8px 0 0',
        },
        '& .MuiDataGrid-toolbarContainer': {
            backgroundColor: '#333d48',
            borderRadius: '0.5rem 0.5rem 0 0',
            borderBottom: '1px solid rgba(81, 81, 81, 1)',
            padding: '.5rem 1rem'
        },
        '& .MuiDataGrid-row:hover': {
            backgroundColor: 'transparent'
        },
        '& .MuiDataGrid-cell': {
            color: '#fff',
            fontWeight: 700,
            textTransform: 'uppercase',
            justifyContent: 'flex-end',
            borderBottom: 'none'
        },
        '& .MuiDataGrid-cell:focus': {
            outline: 'none'
        },
        '& .MuiDataGrid-cell:focus-within': {
            outline: 'none'
        },
        '& .MuiDataGrid-cell--withRenderer': {
            justifyContent: 'flex-end'
        },
        '& .MuiDataGrid-columnSeparator': {
            display: 'none'
        },
      },
})
