import { useContext } from 'react'
import GlobalContext from 'state/GlobalContext'

const useGetPortfolio = (id) => {

    const { state }  = useContext(GlobalContext)
    const { portfolioObj } = state.portfolio
    const details = portfolioObj[id] || ''

    return details

}

export default useGetPortfolio