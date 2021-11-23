import moment from 'moment'


const getDates = (recurringTransaction) => {
    let dateObj = {}
    let current = moment(recurringTransaction.startDate)
    let stopDate = moment().format('YYYY-MM-DD')
    const today = moment().format('YYYY-MM-DD')

    if(recurringTransaction.useEndDate) {
        stopDate = moment(recurringTransaction.endDate).format('YYYY-MM-DD')
    }

    let newFrequency = 1

    switch(recurringTransaction.frequency) {
        case 'weekly':
            newFrequency = 7
            break
        case 'monthly':
            newFrequency = 30
            break
        default:
            newFrequency = 1
    }

   //Set count to frequency so buy the first day
   let count = newFrequency - 1

   while(current.isSameOrBefore(today)){

        count = count + 1
        let action = false

        if(count === newFrequency){
            action = true
            count = 0
        }

        if(current.isSameOrAfter(stopDate)){
            action = false
        }

        dateObj = {
            ...dateObj,
            [current.format('YYYY-MM-DD')]: action
        }

        current.add(1, 'days')
    }

    const dateList = []
    for( const key in dateObj){
        if(dateObj[key]){
            dateList.push(key)
        }
    }

    return dateList

}



export const createRecurringTransactions = (recurringTransaction, historicalData, currentPrice) => {

    const dateList = getDates(recurringTransaction)

    return dateList.map(item => {
        const price = historicalData[item] || currentPrice
    
        return {
            date: item,
            price: price,
            historicalPrice: price,
            dollarAmount: recurringTransaction.purchaseAmount,
            bitcoin: recurringTransaction.purchaseAmount / price
        }
    }).slice()



}