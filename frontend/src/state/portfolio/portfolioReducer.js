import { portfolioObjectToArray } from "./utils/portfolioObjectToArray"

export const FETCHING_PORTFOLIO_SUCCESS = 'FETCHING_PORTFOLIO_SUCCESS'


export const initialPortfolioState = {
    portfolioObj: {},
    portfolioList: function(){
        return portfolioObjectToArray(this.portfolioObj)
    }
}

export const portfolioReducer = (state = initialPortfolioState, action) => {
    switch (action.type) {
        case FETCHING_PORTFOLIO_SUCCESS:
            return {
                ...state,
                portfolioObj: {...action.payload}
            }
        default:
            return state
    }
}