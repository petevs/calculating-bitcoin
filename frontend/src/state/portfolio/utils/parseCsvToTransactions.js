export const parseCsvToTransactions = (str, delimiter = ',') => {

    const rows = str.slice(str.indexOf("\n") + 1).split("\r\n")

    const transactions = rows.map((row) => {
            const values = row.split(delimiter)
            return {

                date: values[0],
                type: values[1],
                dollarAmount: Number(values[2]),
                price: Number(values[3]),
                bitcoin: Number(values[4]),
                useHistoricalPrice: false
            }
        })

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