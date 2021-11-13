import { makeFillerTransactions } from "./makeFillerTransactions"

export const createAllTransactions = (transactions, historicalData, currentPrice) => {

    const fillerTransactions = makeFillerTransactions(transactions, historicalData, currentPrice)

    let allTransactions = [...transactions, ...fillerTransactions]

    allTransactions = allTransactions.sort((a,b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      })


    return allTransactions
}