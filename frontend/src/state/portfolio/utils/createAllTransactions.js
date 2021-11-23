import { makeFillerTransactions } from "./makeFillerTransactions"
import { calculateTransactions } from "./calculateTransactions"
import { createRecurringTransactions } from './createRecurringTransactions'

export const createAllTransactions = (transactions, historicalData, currentPrice, recurringTransactionsList) => {

    if(transactions.length < 1){return}

    let sortedTransactions = transactions.sort((a,b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })

    let generatedRecurringTransactions = []

    if(recurringTransactionsList){
      recurringTransactionsList.forEach(recurringTransaction => {
        const result = createRecurringTransactions(recurringTransaction, historicalData, currentPrice)
        generatedRecurringTransactions = [...generatedRecurringTransactions, ...result]
      })
    }

    const fillerTransactions = makeFillerTransactions(sortedTransactions, historicalData, currentPrice)

    let allTransactions = [...transactions, ...fillerTransactions, ...generatedRecurringTransactions]

    allTransactions = allTransactions.sort((a,b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      })


    return calculateTransactions(allTransactions)
}