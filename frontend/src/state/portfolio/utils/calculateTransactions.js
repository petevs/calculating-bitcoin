import NumberFormat from 'react-number-format'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/system'


export const calculateTransactions = (allTransactions) => {

    
    let runningBitcoinBalance = 0
    let totalInvested = 0
    let averageCost = 0
    let currentValue = 0
    let totalRealizedCost = 0
    let totalRealizedGain = 0
    let totalRealizedProceeds = 0
    let totalBitcoinSold = 0
    let totalCost = 0
    let totalGain = 0
    let totalNetGain = 0
    let totalROI = 0
    let totalDeposits = 0
    let totalProceeds = 0


    const createTransactionDescription = (transaction, type) => {

        const dollarAmount = <NumberFormat thousandSeparator={true} value={transaction.dollarAmount} prefix={'$'} displayType={'text'} decimalScale={0} />
        const bitcoin = <NumberFormat value={transaction.bitcoin} decimalScale={8} fixedDecimalScale={8} displayType={'text'} suffix={' BTC'} />

        if(type === 'buy') {
            return (
                <> 
                    {dollarAmount} <ArrowForwardIcon fontSize='small' /> {bitcoin}
                </>)
        }

        return <> {bitcoin} <ArrowForwardIcon fontSize='small' /> {dollarAmount} </>

    }


    return allTransactions.map( transaction => {

        let deposits = 0
        let proceeds = 0
        let description = ''
        let realizedCost = 0
        let realizedProceeds = 0
        let realizedGain = 0
        let unrealizedGain = 0
        let unrealizedROI = 0
        let totalPerformance = 0

        if(transaction.type === 'buy' || !transaction.type){
            runningBitcoinBalance = runningBitcoinBalance + transaction.bitcoin
            deposits = transaction.dollarAmount
            totalInvested = totalInvested + transaction.dollarAmount
            averageCost = totalInvested / runningBitcoinBalance
            description = createTransactionDescription(transaction, 'buy')
            totalDeposits = totalDeposits + transaction.dollarAmount
        }
        
        if(transaction.type === 'sell') {
            runningBitcoinBalance = runningBitcoinBalance - transaction.bitcoin
            proceeds = transaction.dollarAmount
            realizedCost = transaction.bitcoin * averageCost
            totalInvested = totalInvested - realizedCost
            realizedProceeds = (transaction.bitcoin * transaction.price)
            realizedGain = realizedProceeds - realizedCost
            totalRealizedCost = totalRealizedCost + realizedCost
            totalRealizedProceeds = totalRealizedProceeds + realizedProceeds
            totalRealizedGain = totalRealizedGain + realizedGain
            totalBitcoinSold = totalBitcoinSold + transaction.bitcoin
            description = createTransactionDescription(transaction, 'sell')
            totalProceeds = totalProceeds + transaction.dollarAmount
        }

        currentValue = runningBitcoinBalance * transaction.historicalPrice
        unrealizedGain = currentValue - totalInvested
        unrealizedROI = unrealizedGain / totalInvested * 100
        totalCost = totalInvested + realizedCost
        totalGain = realizedGain + unrealizedGain
        totalNetGain = totalGain - totalCost
        totalROI = totalNetGain / totalCost * 100
        totalPerformance = unrealizedGain + totalRealizedGain

        return {
            id: transaction.id || '',
            date: transaction.date,
            type: transaction.type || '',
            description: description,
            dollarAmount: transaction.dollarAmount,
            deposits: deposits,
            proceeds: proceeds,
            bitcoin: transaction.bitcoin,
            price: transaction.price,
            historicalPrice: transaction.historicalPrice,
            runningBitcoinBalance: runningBitcoinBalance,
            totalInvested: totalInvested,
            averageCost: averageCost,
            currentValue: currentValue,
            unrealizedROI: unrealizedROI,
            unrealizedGain: unrealizedGain,
            realizedProceeds: realizedProceeds,
            realizedCost: realizedCost,
            realizedGain: realizedGain,
            totalRealizedProceeds: totalRealizedProceeds,
            totalRealizedGain: totalRealizedGain,
            totalRealizedCost: totalRealizedCost,
            totalBitcoinSold: totalBitcoinSold,
            totalCost: totalCost,
            totalGain: totalGain,
            totalNetGain: totalNetGain,
            totalROI: totalROI,
            totalDeposits: totalDeposits,
            totalProceeds: totalProceeds,
            totalPerformance: totalPerformance

        }
    })



}