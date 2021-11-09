export const FETCHING_PORTFOLIO_SUCCESS = 'FETCHING_PORTFOLIO_SUCCESS'


export const initialPortfolioState = {

}

export const portfolioReducer = (state, action) => {
    switch (action.type) {
        case FETCHING_PORTFOLIO_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return
    }
}