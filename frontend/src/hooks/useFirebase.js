import { useContext } from 'react'
import { db } from 'firebase'
import GlobalContext from 'state/GlobalContext'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { parseCsvToTransactions } from 'state/portfolio/utils/parseCsvToTransactions'
import { bitbuyParse, blockfiParse, bullBitcoinParse, coinbaseParse, shakepayParse } from 'state/portfolio/utils/csvParsers'

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
                recurringTransactions: {},
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
                recurringTransactions: state.portfolio.portfolioObj[portfolioId].recurringTransactions ? state.portfolio.portfolioObj[portfolioId].recurringTransactions : {},
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
                portfolioName: `${values.portfolioName} (COPY)`,
                displayName: user.displayName,
                visibility: 'private',
                uid: state.auth.uid
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

    const uploadCsvTransactions = async (url, portfolioId, source) => {
        const { data } = await axios.get(url)

        const parsedData = () => {
            switch(source) {
                case('Shakepay CSV'):
                    return shakepayParse(data)
                case('Bull Bitcoin CSV'):
                    return bullBitcoinParse(data)
                case('Bitbuy CSV'):
                    return bitbuyParse(data)
                case('Coinbase CSV'):
                    return coinbaseParse(data)
                case('Blockfi CSV'):
                    return blockfiParse(data)
                default:
                    return parseCsvToTransactions(data)
            }
        }

        db.collection('portfolios').doc(state.user.uid).update({
            ...state.portfolio.portfolioObj,
            [portfolioId]: {
                ...state.portfolio.portfolioObj[portfolioId],
                transactions: {
                    ...state.portfolio.portfolioObj[portfolioId].transactions,
                    ...parsedData()
                }
            }
        })
    }

    const addRecurringTransaction = (portfolioId, values) => {
        db.collection('portfolios').doc(state.user.uid).update({
            ...state.portfolio.portfolioObj,
            [portfolioId]: {
                ...state.portfolio.portfolioObj[portfolioId],
                recurringTransactions: {
                    ...state.portfolio.portfolioObj[portfolioId].recurringTransactions,
                    [values.id]: {
                        ...values
                    }
                }
            }
        })
    }

    const deleteRecurringTransaction = (portfolioId, transactionId) => {
        const updatedPortfolio = {...state.portfolio.portfolioObj}
        delete updatedPortfolio[portfolioId].recurringTransactions[transactionId]

        db.collection('portfolios').doc(state.user.uid).update({
            ...updatedPortfolio
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
        uploadCsvTransactions,
        addRecurringTransaction,
        deleteRecurringTransaction
    }

}

export default useFirebase
