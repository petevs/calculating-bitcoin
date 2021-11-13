import { makeFillerTransactions } from "./makeFillerTransactions"
import { calculateTransactions } from "./calculateTransactions"

export const createAllTransactions = (transactions, historicalData, currentPrice) => {

    if(transactions.length < 1){return}

    const fillerTransactions = makeFillerTransactions(transactions, historicalData, currentPrice)

    let allTransactions = [...transactions, ...fillerTransactions]

    allTransactions = allTransactions.sort((a,b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      })


    return calculateTransactions(allTransactions)
}