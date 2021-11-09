import { FETCHING_MARKET_DATA_ERROR, FETCHING_MARKET_DATA_SUCCESS, FETCHING_MARKET_DATA_LOADING } from "./marketDataReducer"

export const fetchingMarketDataLoading = (data) => {
    return { type: FETCHING_MARKET_DATA_LOADING, payload: data}
}

export const fetchingMarketDataSuccess = (data) => {
    return { type: FETCHING_MARKET_DATA_SUCCESS, payload: data}
}

export const fetchingMarketDataError = (data) => {
    return { type: FETCHING_MARKET_DATA_ERROR, payload: data}
}