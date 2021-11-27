export const portfolioObjectToArray = (portfolioObj) => {
    if(portfolioObj){
        const portfolioList = []

        for (const key in portfolioObj) {

            const currentPortfolio = portfolioObj[key]
            portfolioList.push(
                {
                    ...currentPortfolio,
                    id: key,
                    portfolioDescription: currentPortfolio.portfolioDescription,
                    portfolioName: currentPortfolio.portfolioName,
                    transactions: currentPortfolio.transactions,
                    recurringTransactions: currentPortfolio.recurringTransactions,
                    
                }
            )
        }

        return portfolioList
    }
}