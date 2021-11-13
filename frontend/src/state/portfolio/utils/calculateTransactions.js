export const calculateTransactions = (allTransactions) => {

    let runningBitcoinBalance = 0
    let totalInvested = 0
    let averageCost = 0
    let currentValue = 0
    let unrealizedGain = 0
    let unrealizedROI = 0
    let realizedProceeds = 0
    let realizedCost = 0
    let realizedGain = 0
    let totalRealizedCost = 0
    let totalRealizedGain = 0
    let totalRealizedProceeds = 0

    return allTransactions.map( transaction => {

        let bitcoin

        if(transaction.type === 'buy' || !transaction.type){
            runningBitcoinBalance = runningBitcoinBalance + transaction.bitcoin
            totalInvested = totalInvested + transaction.dollarAmount
            averageCost = totalInvested / runningBitcoinBalance
        }
        
        if(transaction.type === 'sell') {
           console.log(averageCost)
            runningBitcoinBalance = runningBitcoinBalance - transaction.bitcoin
            realizedCost = transaction.bitcoin * averageCost
            totalInvested = totalInvested - realizedCost
            realizedProceeds = (transaction.bitcoin * transaction.price)
            realizedGain = realizedProceeds - realizedCost
            totalRealizedCost = totalRealizedCost + realizedCost
            totalRealizedProceeds = totalRealizedProceeds + realizedProceeds
            totalRealizedGain = totalRealizedGain + realizedGain
        }

        currentValue = runningBitcoinBalance * transaction.historicalPrice
        unrealizedGain = currentValue - totalInvested
        unrealizedROI = unrealizedGain / totalInvested * 100

        return {
            date: transaction.date,
            type: transaction.type || '',
            bitcoin: transaction.bitcoin,
            price: transaction.price,
            historicalPrice: transaction.historicalPrice,
            runningBitcoinBalance: runningBitcoinBalance,
            totalInvested: totalInvested,
            averageCost: averageCost,
            unrealizeROI: unrealizedROI,
            realizedProceeds: realizedProceeds,
            realizedCost: realizedCost,
            realizedGain: realizedGain,
            totalRealizedProceeds: totalRealizedProceeds,
            totalRealizedGain: totalRealizedGain,
            totalRealizedCost: totalRealizedCost
        }
    })



}