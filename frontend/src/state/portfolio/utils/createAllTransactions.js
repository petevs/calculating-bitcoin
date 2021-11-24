import { makeFillerTransactions } from "./makeFillerTransactions"
import { calculateTransactions } from "./calculateTransactions"
import { createRecurringTransactions } from './createRecurringTransactions'

export const createAllTransactions = (transactions, historicalData, currentPrice, recurringTransactionsList) => {

    if(transactions.length < 1 && recurringTransactionsList.length < 1){return}

    //Sort one off transactions
    let sortedTransactions = []

    if(transactions.length > 1){
      sortedTransactions = transactions.sort((a,b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      })
    }

    //Generate transactions for recurring transactions
    let generatedRecurringTransactions = []

    if(recurringTransactionsList.length >= 1){

      if(recurringTransactionsList){
        recurringTransactionsList.forEach(recurringTransaction => {
          const result = createRecurringTransactions(recurringTransaction, historicalData, currentPrice)
          generatedRecurringTransactions = [...generatedRecurringTransactions, ...result]
        })
      }
    }

    //Add generatedRecurringTransactions to Sorted Transactions
    sortedTransactions = [...sortedTransactions, ...generatedRecurringTransactions]

    //Generate filler transactions for chart and summary
    const fillerTransactions = makeFillerTransactions(sortedTransactions, historicalData, currentPrice)

    //All Transactions
    let allTransactions = [...transactions, ...fillerTransactions, ...generatedRecurringTransactions]


    //Sort All Transactions
    allTransactions = allTransactions.sort((a,b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      })


    return calculateTransactions(allTransactions)
}