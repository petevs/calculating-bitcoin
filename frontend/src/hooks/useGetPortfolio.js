import { useContext } from 'react'
import GlobalContext from 'state/GlobalContext'
import { makeFillerTransactions } from 'state/portfolio/utils/makeFillerTransactions'
import { transactionsObjectToArray } from 'state/portfolio/utils/transactionsObjectToArray'
import { createAllTransactions } from 'state/portfolio/utils/createAllTransactions'

const useGetPortfolio = (id) => {

    const { state }  = useContext(GlobalContext)
    const { currentPrice } = state.marketData.marketData.current_price.usd
    const { historicalData } = state.marketData


    const { portfolioObj } = state.portfolio
    const details = portfolioObj[id] || ''
    
    const transactions = transactionsObjectToArray(details.transactions)

    const allTransactions = createAllTransactions(
        transactions, historicalData, currentPrice
    )

    return { details, transactions, allTransactions }

}

export default useGetPortfolio