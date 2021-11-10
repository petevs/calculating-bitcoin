import { useContext } from 'react'
import { db } from 'firebase'
import GlobalContext from 'state/GlobalContext'

const useFirebase = () => {
    
    const { state } = useContext(GlobalContext)
    const { user } = state

    const updateUserAccount = (field, value) => {
        db.collection('users').doc(user.uid).update({
            account: {
                ...user,
                [field]: value
            }
        })
    }

    const addPortfolio = async (values, id) => {
        const portfolioId = id || Date.now()
        await db.collection('portfolios').doc(state.user.uid).set({
            ...state.portfolio.portfolioObj,
            [portfolioId]: {
                ...values,
                transactions: {},
                reccuringBuys: {}
            }
        })

        return portfolioId
    }

    return { updateUserAccount, addPortfolio }

}

export default useFirebase
