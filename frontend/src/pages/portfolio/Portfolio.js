import React from 'react'
import Page from 'components/Page'

import { useParams } from 'react-router'
import useGetPortfolio from 'hooks/useGetPortfolio'
import PortfolioHeader from './components/PortfolioHeader'
import Loading from 'components/Loading'
import TransactionForm from './components/TransactionForm'
import ModalButton from './components/ModalButton'
import AddIcon from '@mui/icons-material/Add';
import TransactionRow from './components/TransactionRow'
import { DataGrid } from '@mui/x-data-grid'
import EditTransaction from './components/EditTransaction'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import NumberFormat from 'react-number-format'


const Portfolio = () => {

    const classes = useStyles()

    let { id } = useParams()

    const details = useGetPortfolio(id)

    if(!details){
        return(<Loading />)
    }

    const transactions = (transactionObject) => {
        let transactionList = []

        for (const transaction in transactionObject){
            transactionList.push({
                ...transactionObject[transaction]
            })
        }

        return transactionList
    }

    const columns = [
        {
            field: 'date',
            headerName: 'Date',
        },
        {
            field: 'type',
            headerName: 'Type'
        },
        {
            field: 'bitcoin',
            headerName: 'Bitcoin',
            renderCell: (params) => (
                <NumberFormat 
                    displayType='text'
                    value={params.value}
                    decimalScale={8} 
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
                />)
        },
        {
            field: 'actions',
            headerName: 'Actions',
            renderCell: (params) => (<EditTransaction {...params.row} portfolioId={id} />)
        },
    ]

    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start'}}>
                <PortfolioHeader 
                    {...details} id={id}
                />
                <ModalButton
                    sx={{justifySelf: 'start'}}
                    icon={<AddIcon />}
                    content={<TransactionForm portfolioId={id} />}
                    text='Add Transaction'
                />
                <Box sx={{ width: '100%'}}>
                        <DataGrid
                            className={classes.root}
                            rows={transactions(details.transactions)}
                            columns={columns}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            pagination
                            disableSelectionOnClick
                        />
                </Box>
        </Page>
    )
}

export default Portfolio

const useStyles = makeStyles({
    root: {
        '& .MuiDataGrid-cell': {
            color: '#fff',
            fontWeight: 700,
            textTransform: 'uppercase'
        }
      },
})