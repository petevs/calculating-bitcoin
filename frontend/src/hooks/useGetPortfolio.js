import { useContext } from 'react'
import GlobalContext from 'state/GlobalContext'
import { transactionsObjectToArray } from 'state/portfolio/utils/transactionsObjectToArray'

const useGetPortfolio = (id) => {

    const { state }  = useContext(GlobalContext)
    const { portfolioObj } = state.portfolio
    const details = portfolioObj[id] || ''
    const transactions = transactionsObjectToArray(details.transactions)

    return { details, transactions }

}

export default useGetPortfolio