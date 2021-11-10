import { FETCHING_PORTFOLIO_SUCCESS, FETCHING_PUBLIC_PORTFOLIOS_SUCCESS } from "./portfolioReducer"

export const fetchingPortfolioSuccess = (data) => {
    return { type: FETCHING_PORTFOLIO_SUCCESS, payload: data}
}

export const fetchingPublicPortfoliosSuccess = (data) => {
    return { type: FETCHING_PUBLIC_PORTFOLIOS_SUCCESS, payload: data}
}