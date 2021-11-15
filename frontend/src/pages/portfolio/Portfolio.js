import Page from 'components/Page'

import { useParams } from 'react-router'
import useGetPortfolio from 'hooks/useGetPortfolio'
import PortfolioHeader from './components/PortfolioHeader'
import Loading from 'components/Loading'
import TransactionForm from './components/TransactionForm'
import ModalButton from './components/ModalButton'
import AddIcon from '@mui/icons-material/Add';
import { DataGrid } from '@mui/x-data-grid'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import NumberFormat from 'react-number-format'
import Summary from './components/Summary'
import TransactionActions from './components/TransactionActions'


const Portfolio = () => {

    const classes = useStyles()

    let { id } = useParams()

    const { details, transactions, summary, performanceType, handlePerformanceChange } = useGetPortfolio(id)

    if(!details){
        return(<Loading />)
    }

    const columns = [
        {
            field: 'date',
            headerName: 'Date',
        },
        {
            field: 'type',
            headerName: 'Type',
        },
        {
            field: 'bitcoin',
            headerName: 'Bitcoin',
            renderCell: (params) => (
                <NumberFormat 
                    displayType='text'
                    value={params.value}
                    decimalScale={8}
                    fixedDecimalScale={8}  
                />)
        },
        {
            field: 'dollarAmount',
            headerName: 'Dollars',
            renderCell: (params) => (
                <NumberFormat 
                    displayType='text'
                    thousandSeparator={true}
                    prefix='$' 
                    value={params.value}
                    decimalScale={2}
                    fixedDecimalScale={2} 
                />)
            
        },
        {
            field: 'price',
            headerName: 'Price',
            renderCell: (params) => (
                <NumberFormat 
                    displayType='text'
                    thousandSeparator={true}
                    prefix='$' 
                    value={params.value}
                    decimalScale={2}
                    fixedDecimalScale={2}   
                />)
        },
        {
            field: 'actions',
            headerName: 'Actions',
            renderCell: (params) => (
                <TransactionActions {...params.row} portfolioId={id} />),
            cellClassName: 'right'
            
        },
    ]

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
                <ModalButton
                    sx={{justifySelf: 'end'}}
                    icon={<AddIcon />}
                    content={<TransactionForm portfolioId={id} />}
                    text='Add Transaction'
                    variant='contained'
                    size='small'
                />
                <Box sx={tableContainerStyle}>
                        <DataGrid
                            className={classes.root}
                            rows={transactions}
                            columns={columns}
                            checkboxSelection
                            pagination
                            disableSelectionOnClick
                        />
                </Box>
        </Page>
    )
}

export default Portfolio

const tableContainerStyle = {
    height: '400px',
    width: '100%',
    backgroundColor: '212b36',
    boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) 0px 16px 32px -4px',
    borderRadius: '1rem'
}

const useStyles = makeStyles({
    root: {
        border: 'none',
        '& .MuiDataGrid-columnsContainer': {
            backgroundColor: '#333d48',
            border: 'none',
            borderRadius: '0.5rem 0.5rem 0 0'
        },
        '& .MuiDataGrid-cell': {
            color: '#fff',
            fontWeight: 700,
            textTransform: 'uppercase'
        },
        '& .right': {
            justifyContent: 'flex-end'
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