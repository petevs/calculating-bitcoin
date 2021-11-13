export const transactionsObjectToArray = (transactionObject) => {
    let transactionList = []

    for (const transaction in transactionObject){
        transactionList.push({
            ...transactionObject[transaction]
        })
    }

    return transactionList
}