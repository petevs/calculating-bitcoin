import { useContext, useState } from 'react'
import GlobalContext from 'state/GlobalContext'
import { transactionsObjectToArray } from 'state/portfolio/utils/transactionsObjectToArray'
import { createAllTransactions } from 'state/portfolio/utils/createAllTransactions'

const useGetPortfolio = (id) => {

    const { state }  = useContext(GlobalContext)
    const { currentPrice } = state.marketData.marketData.current_price.usd
    const { historicalData } = state.marketData


    const { portfolioObj, publicPortfolios } = state.portfolio
    const details = portfolioObj[id] || publicPortfolios[id] || 'Not Authorized'
    
    const transactions = transactionsObjectToArray(details.transactions)

    const recurringTransactionsList = transactionsObjectToArray(details.recurringTransactions)

    const allTransactions = createAllTransactions(
        transactions, historicalData, currentPrice, recurringTransactionsList
    )

    const summary = allTransactions ? allTransactions[allTransactions.length - 1] : []

    const [performanceType, setPerformanceType] = useState('Unrealized Performance')
    
    const handlePerformanceChange = (e) => setPerformanceType(e.target.value)

    return { 
        details, 
        transactions, 
        recurringTransactionsList, 
        allTransactions, 
        summary, 
        performanceType, 
        handlePerformanceChange 
    }


}

export default useGetPortfolio