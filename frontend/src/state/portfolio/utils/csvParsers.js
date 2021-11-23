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
      date: moment(transaction['created-at']).format('YYYY-MM-DD'),
      type: 'buy',
      dollarAmount: Number(transaction['from-amount']),
      price: Number(transaction['from-amount']) / Number(transaction['to-amount']),
      bitcoin: Number(transaction['to-amount']),
      useHistoricalPrice: false
    }
  })

  return convertToObject(formattedTransactions)

}

export const bitbuyParse = (data) => {
  const res = Papa.parse(data, {
    delimiter: ',',
    header: true,
  })

  const transactions = res.data.filter(transaction => transaction['side'] === 'BUY')

  const formattedTransactions = transactions.map(transaction => {

    return {
      date: moment(transaction['date']).format('YYYY-MM-DD'),
      type: 'buy',
      dollarAmount: Number(transaction['weightedAverageFillPrice'] * Number(transaction['quantity'])),
      price: Number(transaction['weightedAverageFillPrice']),
      bitcoin: Number(transaction['quantity']),
      useHistoricalPrice: false
    }
  })

  return convertToObject(formattedTransactions)
}

export const coinbaseParse = (data) => {
  const res = Papa.parse(data, {
    delimiter: ',',
    header: true,
  })

  const transactions = res.data.filter(transaction => transaction['Transaction Type'] === 'Buy')

  const formattedTransactions = transactions.map(transaction => {

    return {
      date: moment(transaction['Timestamp']).format('YYYY-MM-DD'),
      type: 'buy',
      dollarAmount: Number(transaction['Total (inclusive of fees)']),
      price: Number(transaction['Spot Price at Transaction']),
      bitcoin: Number(transaction['Quantity Transacted']),
      useHistoricalPrice: false
    }
  })

  return convertToObject(formattedTransactions)
}

export const blockfiParse = (data) => {
  const res = Papa.parse(data, {
    delimiter: ',',
    header: true,
  })

  const transactions = res.data.filter(transaction => transaction['Transaction Type'] === 'Interest Payment')

  const formattedTransactions = transactions.map(transaction => {

    return {
      date: moment(transaction['Confirmed At']).format('YYYY-MM-DD'),
      type: 'buy',
      dollarAmount: 0,
      price: 0,
      bitcoin: Number(transaction['Amount']),
      useHistoricalPrice: false
    }
  })

  return convertToObject(formattedTransactions)
}