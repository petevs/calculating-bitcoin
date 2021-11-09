import { FETCHING_PORTFOLIO_SUCCESS } from "./portfolioReducer"

export const fetchingPortfolioSuccess = (data) => {
    return { type: FETCHING_PORTFOLIO_SUCCESS, payload: data}
}