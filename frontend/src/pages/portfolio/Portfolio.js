import Page from 'components/Page'
import { useParams } from 'react-router'
import useGetPortfolio from 'hooks/useGetPortfolio'
import PortfolioHeader from './components/PortfolioHeader'
import Loading from 'components/Loading'
import TransactionForm from './components/TransactionForm'
import ModalButton from './components/ModalButton'
import AddIcon from '@mui/icons-material/Add';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import NumberFormat from 'react-number-format'
import Summary from './components/Summary'
import TransactionActions from './components/TransactionActions'
import { tableTypes } from './components/tableTypes'
import CustomToolbar from './components/CustomToolbar'
import PortfolioChart from './components/PortfolioChart'
import Report from './components/Report'
import NewComponent from './components/NewComponent'
import PortfolioTabs from './components/PortfolioTabs'
import PortfolioTransactionsSimple from './components/PortfolioTransactionsSimple'
import { Typography } from '@mui/material'


const Portfolio = () => {

    const classes = useStyles()

    let { id } = useParams()

    const { details, transactions, summary, performanceType, handlePerformanceChange, allTransactions } = useGetPortfolio(id)

    if(!details){
        return(<Loading />)
    }

    const filteredTransactions = allTransactions ? allTransactions.filter(item => item.id) : []
    
    const columns = tableTypes('')
    columns.push({
                field: 'actions',
                headerName: ' ',
                align: 'end',
                renderCell: (params) => (
                    <TransactionActions {...params.row} portfolioId={id} />),
                
            })

    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem'}}>
                <PortfolioHeader 
                    {...details}
                    id={id}
                    sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '0 0 1rem 0'}}
                />
                <Summary 
                    {...summary} 
                    performanceType={performanceType} 
                    handlePerformanceChange={handlePerformanceChange} 
                />
                <PortfolioChart data={allTransactions} />
                <Box sx={tableContainerStyle}>
                    <Typography variant='h6'>Transactions</Typography>
                    <ModalButton
                        sx={{width: '200px', marginBottom: '1rem'}}
                        icon={<AddIcon />}
                        content={<TransactionForm portfolioId={id} />}
                        text='Add Transaction'
                        variant='contained'
                        size='small'
                    />
                    <Box sx={{ flexGrow: 1 }}>
                        <DataGrid
                            autoHeight
                            className={classes.root}
                            rows={filteredTransactions}
                            columns={columns}
                            checkboxSelection
                            pagination
                            disableSelectionOnClick
                            disableColumnFilter
                            disable
                            hideFooter={true}
                            // components={{
                            //     Toolbar: CustomToolbar,
                            // }}
                        />
                    </Box>
                    <Box sx={{display: 'grid', alignContent: 'center', height: '50px'}}>
                        Footer
                    </Box>
                </Box>
                {/* <PortfolioTabs
                    tabs={
                        [
                            {
                                title: 'Market Weighted Return', 
                                content: 
                                    <Report 
                                        data={allTransactions} 
                                        summary={summary} 
                                    />
                            },
                            {
                                title: 'Transactions', 
                                content:
                                    <Box sx={{display: 'grid'}}>
                                        <ModalButton
                                            sx={{justifySelf: 'end', marginBottom: '1rem'}}
                                            icon={<AddIcon />}
                                            content={<TransactionForm portfolioId={id} />}
                                            text='Add Transaction'
                                            variant='contained'
                                            size='small'
                                        />
                                    </Box> 
                            }
                        ]
                    }
                
                /> */}
        </Page>
    )
}

export default Portfolio

const tableContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#212B36',
    boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) 0px 16px 32px -4px',
    borderRadius: '1rem',
    padding: '1rem',
    color: '#fff',
    '& h6': {
        padding: '1rem 0',
    }
}

const useStyles = makeStyles({
    root: {
        border: 'none',
        '& .MuiDataGrid-columnsContainer': {
            backgroundColor: '#333d48',
            border: 'none',
            borderRadius: '6px 6px 0 0',
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
        }
      },
})


// color: #fff;
//         background-color: #333d48;
//         border-bottom: none;
//         padding: 8px 16px;
//         text-transform: uppercase;
//         &:first-of-type {
//             border-radius: 0.5rem 0 0 0.5rem;
//         }
//         &:last-of-type {
//             border-radius: 0 0.5rem 0.5rem 0;
//         }


                /* <EditTransaction {...params.row} portfolioId={id} />
                <DeleteTransaction portfolioId={id} transactionId={params.row.id} />
                </>) */