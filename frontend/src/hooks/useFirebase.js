import { useContext } from 'react'
import { db } from 'firebase'
import GlobalContext from 'state/GlobalContext'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { parseCsvToTransactions } from 'state/portfolio/utils/parseCsvToTransactions'

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
                reccuringBuys: {},
            }
        })

        history.push(`/portfolio/${portfolioId}`)

        return portfolioId
    }

    const updatePortfolio = async (values, id) => {
        const portfolioId = id 
        await db.collection('portfolios').doc(state.user.uid).update({
            ...state.portfolio.portfolioObj,
            [portfolioId]: {
                ...values,
                transactions: state.portfolio.portfolioObj[portfolioId].transactions,
                reccuringBuys: state.portfolio.portfolioObj[portfolioId].recurringBuys ? state.portfolio.portfolioObj[portfolioId].recurringBuys : {},
            }
        })

        return portfolioId
    }

    const deletePortfolio = async (id) => {

        const updatedPortfolio = {...state.portfolio.portfolioObj}
        delete updatedPortfolio[id]

        db.collection('portfolios').doc(state.user.uid).set({
            ...updatedPortfolio
        })
        history.push('/portfolio')
    }


    const clonePortfolio = async (details) => {

        const values = {...details}
        delete values['sx']
        delete values['id']

        const portfolioId = Date.now()

        await db.collection('portfolios').doc(state.user.uid).set({
            ...state.portfolio.portfolioObj,
            [portfolioId]: {
                ...values,
                portfolioName: `${values.portfolioName} (COPY)`
            }
        })

        history.push(`/portfolio/${portfolioId}`)
    }

    const toggleVisibility = (portfolioId, visibility) => {

        db.collection('portfolios').doc(state.user.uid).update({
            ...state.portfolio.portfolioObj,
            [portfolioId]: {
                ...state.portfolio.portfolioObj[portfolioId],
                visibility: visibility === 'public' ? 'private' : 'public'
            }
        })
    }

    const addTransaction = (portfolioId, values) => {
        db.collection('portfolios').doc(state.user.uid).update({
            ...state.portfolio.portfolioObj,
            [portfolioId]: {
                ...state.portfolio.portfolioObj[portfolioId],
                transactions: {
                    ...state.portfolio.portfolioObj[portfolioId].transactions,
                    [values.id]: {
                        ...values
                    }
                }
            }
        })
    }

    const deleteTransaction = (portfolioId, transactionId) => {
        const updatedPortfolio = {...state.portfolio.portfolioObj}
        delete updatedPortfolio[portfolioId].transactions[transactionId]

        db.collection('portfolios').doc(state.user.uid).update({
            ...updatedPortfolio
        })
    }

    const uploadCsvTransactions = async (url, portfolioId) => {
        const { data } = await axios.get(url)
        const parsedData = parseCsvToTransactions(data)

        db.collection('portfolios').doc(state.user.uid).update({
            ...state.portfolio.portfolioObj,
            [portfolioId]: {
                ...state.portfolio.portfolioObj[portfolioId],
                transactions: {
                    ...state.portfolio.portfolioObj[portfolioId].transactions,
                    ...parsedData
                }
            }
        })
    }



    return { 
        updateUserAccount, 
        addPortfolio,
        updatePortfolio, 
        deletePortfolio, 
        clonePortfolio, 
        toggleVisibility,
        addTransaction,
        deleteTransaction,
        uploadCsvTransactions
    }

}

export default useFirebase
