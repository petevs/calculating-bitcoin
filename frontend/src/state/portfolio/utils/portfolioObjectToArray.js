export const portfolioObjectToArray = (portfolioObj) => {
    if(portfolioObj){
        const portfolioList = []

        for (const key in portfolioObj) {

            const currentPortfolio = portfolioObj[key]
            portfolioList.push(
                {
                    id: key,
                    portfolioDescription: currentPortfolio.description,
                    portfolioName: currentPortfolio.portfolioName,
                    transactions: currentPortfolio.transactions,
                    recurringBuys: currentPortfolio.recurringBuys
                }
            )
        }

        return portfolioList
    }
}