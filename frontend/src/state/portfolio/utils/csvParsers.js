import Papa from 'papaparse'
import moment from 'moment'


const convertToObject = (transactions) => {
  let newTransactions = {}
  let currentId = Date.now()

  transactions.forEach(transaction => {

      currentId = currentId + 60

      newTransactions = {
          ...newTransactions,
          [currentId]: {
              ...transaction,
              id: currentId
          }
      }
  })

  return newTransactions
}

export const shakepayParse = (data) => {


        const res = Papa.parse(data, {
          // delimiter: ',',
          header: true,
        })
        
        const transactions = res.data.filter(transaction => transaction['Transaction Type'] === 'purchase/sale')
        
        const formattedTransactions = transactions.map(transaction => {

          if(transaction['Direction'] === 'sale') {
            return {
              date: moment(transaction['Date']).format('YYYY-MM-DD'),
              type: 'sell',
              dollarAmount: Number(transaction['Amount Credited']),
              price: Number(transaction['Buy / Sell Rate']),
              bitcoin: Number(transaction['Amount Debited']),
              useHistoricalPrice: false
            }
          }
      
          return {
            date: moment(transaction['Date']).format('YYYY-MM-DD'),
            type: 'buy',
            dollarAmount: Number(transaction['Amount Debited']),
            price: Number(transaction['Buy / Sell Rate']),
            bitcoin: Number(transaction['Amount Credited']),
            useHistoricalPrice: false
          }
        })

        return convertToObject(formattedTransactions)
}


export const bullBitcoinParse = (data) => {

  const res = Papa.parse(data, {
    delimiter: ';',
    header: true,
  })

  const transactions = res.data.filter(transaction => transaction['to-currency'] === 'BTC')

  const formattedTransactions = transactions.map(transaction => {
    return {
      data: moment(transaction['created-at']),
      type: 'buy',
      dollarAmount: Number(transaction['from-amount']),
      price: Number(transaction['from-amount']) / Number(transaction['to-amount']),
      bitcoin: Number(transaction['to-amount']),
      useHistoricalPrice: false
    }
  })

  return convertToObject(formattedTransactions)

}