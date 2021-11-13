export const calculateTransactions = (allTransactions) => {

    let runningBitcoinBalance = 0
    let totalInvested = 0
    let averageCost = 0
    let currentValue = 0
    let unrealizedGain = 0
    let unrealizedROI = 0
    let realizedProceeds = 0
    let realizedCost = 0
    let realizedGain =0

    allTransactions.map( transaction => {

        let bitcoin

        if(transaction.type === 'buy' || !transaction.type){
            runningBitcoinBalance = runningBitcoinBalance + transaction.bitcoin
            totalInvested = totalInvested + transaction.dollarAmount
            averageCost = totalInvested /runningBitcoinBalance
            currentValue = runningBitcoinBalance * transaction.historicalPrice
            unrealizedGain = currentValue - totalInvested
            unrealizedROI = unrealizedGain / totalInvested * 100
        }
        
        if(transaction.type === 'sell') {
            runningBitcoinBalance = runningBitcoinBalance - transaction.bitcoin

            realizedGain = realizedGain + (transaction.bitcoin * transaction.price)
        }

        return {
            date: transaction.date,
            type: transaction.type || '',
            bitcoin: transaction.bitcoin,
            price: transaction.price,
            historicalPrice: transaction.historicalPrice

        }


    })



}