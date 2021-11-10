import { useContext } from 'react'
import { db } from 'firebase'
import GlobalContext from 'state/GlobalContext'
import { useHistory } from 'react-router-dom'

const useFirebase = () => {
    
    const { state } = useContext(GlobalContext)
    const { user } = state

    const history = useHistory()

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

        history.push(`/portfolio/${portfolioId}`)

        return portfolioId
    }

    const deletePortfolio = async (id) => {

        console.log(id)
        const updatedPortfolio = {...state.portfolio.portfolioObj}
        delete updatedPortfolio[id]

        db.collection('portfolios').doc(state.user.uid).set({
            ...updatedPortfolio
        })
        history.push('/portfolio')
    }


    const clonePortfolio = (details) => {

        const values = {
            ...details,
            portfolioName: `${details.portfolioName} (COPY)` 
        }

        addPortfolio(values)
    }

    return { updateUserAccount, addPortfolio, deletePortfolio, clonePortfolio }

}

export default useFirebase
