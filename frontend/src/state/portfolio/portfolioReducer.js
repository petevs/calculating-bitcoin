import { portfolioObjectToArray } from "./utils/portfolioObjectToArray"

export const FETCHING_PORTFOLIO_SUCCESS = 'FETCHING_PORTFOLIO_SUCCESS'
export const FETCHING_PUBLIC_PORTFOLIOS_SUCCESS = 'FETCHING_PUBLIC_PORTFOLIOS_SUCCESS'


export const initialPortfolioState = {
    portfolioObj: {},
    portfolioList: function(){
        return portfolioObjectToArray(this.portfolioObj)
    },
    publicPortfolios: undefined
}

export const portfolioReducer = (state = initialPortfolioState, action) => {
    switch (action.type) {
        case FETCHING_PORTFOLIO_SUCCESS:
            return {
                ...state,
                portfolioObj: {...action.payload}
            }
        case FETCHING_PUBLIC_PORTFOLIOS_SUCCESS:
            return {
                ...state,
                publicPortfolios: action.payload
            }
        default:
            return state
    }
}