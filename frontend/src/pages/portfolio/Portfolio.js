import Page from 'components/Page'
import { useParams } from 'react-router'
import useGetPortfolio from 'hooks/useGetPortfolio'
import PortfolioHeader from './components/PortfolioHeader'
import Loading from 'components/Loading'
import Summary from './components/Summary'
import TransactionActions from './components/TransactionActions'
import { tableTypes } from './components/tableTypes'
import PortfolioChart from './components/PortfolioChart'
import Transactions from './components/Transactions'
import { Box } from '@mui/system'
import Report from './components/Report'
import RecurringTransactions from './components/RecurringTransactions'
import PortfolioTabs from './components/PortfolioTabs'
import { Alert, AlertTitle, TextField } from '@mui/material'
import GlobalContext from 'state/GlobalContext'
import { useContext } from 'react'


const Portfolio = () => {

    let { id } = useParams()

    const { state } = useContext(GlobalContext)

    const { details, summary, performanceType, handlePerformanceChange, allTransactions, recurringTransactionsList } = useGetPortfolio(id)

    const disableEditing = state.auth.uid !== details.uid ? true : false

    if(!details){
        return(<Loading />)
    }

    if(details === 'Not Authorized') {
        return(<Page>You do not have permission to view this portfolio</Page>)
    }

    const filteredTransactions = allTransactions ? allTransactions.filter(item => item.id) : []
    
    const columns = tableTypes('')
    columns.push({
                field: 'actions',
                headerName: ' ',
                align: 'end',
                renderCell: (params) => (
                    <TransactionActions {...params.row} portfolioId={id} />),
                sortable: false,
                editable: false
            })

    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem'}}>
                <PortfolioHeader 
                    {...details}
                    id={id}
                    sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '0 0 1rem 0'}}
                    disableEditing={disableEditing}
                />
                <Summary 
                    {...summary} 
                    performanceType={performanceType} 
                    handlePerformanceChange={handlePerformanceChange} 
                />
                {
                    !allTransactions && 
                    <Alert severity='warning'>
                        <AlertTitle>Add a Transaction to Populate Report</AlertTitle>
                    </Alert>
                }
                <PortfolioChart data={allTransactions} />
                <Box sx={style}>
                    <Transactions columns={columns} transactions={filteredTransactions} id={id} disableEditing={disableEditing} />
                    <RecurringTransactions portfolioId={id} recurringTransactions={recurringTransactionsList} disableEditing={disableEditing} />
                </Box>
                    <PortfolioTabs 
                        tabs={[
                            {key: 1, title: 'Total Performance', content: <Report summary={summary} />},
                            {key: 2, title: 'Tax Liability', content: 'Coming soon...'},
                            {key: 3, title: 'Weighted Cost Table', content: 'Coming soon...'},
                        ]}
                    />
        </Page>
    )
}

const style = {
    display: 'grid', 
    gridTemplateColumns: '2fr 1fr',
    alignItems: 'start',
    gap: '2rem',
    '@media (max-width: 1024px)': {
        gridTemplateColumns: '1fr'
    }
}

export default Portfolio
