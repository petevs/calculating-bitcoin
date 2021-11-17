import { getDatesBetween } from "./getDatesBetween"
import moment from "moment"

export const makeFillerTransactions = (transactions, historicalData, currentPrice) => {
    
    if(transactions){
        const startDate = moment(transactions[0].date)
        const dateList = getDatesBetween(startDate, moment().format('YYYY-MM-DD'))
        
        return dateList.map(item => {
            
            const price = historicalData[item] || currentPrice
    
            return {
                date: item,
                price: price,
                historicalPrice: price,
                dollarAmount: 0,
                bitcoin: 0
            }
        }).slice()
    }


}