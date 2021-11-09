export const FETCHING_MARKET_DATA_SUCCESS = "FETCHING_MARKET_DATA_SUCCESS"
export const FETCHING_HISTORICAL_DATA_SUCCESS = "FETCHING FETCHING_HISTORICAL_DATA_SUCCESS"
export const FETCHING_MARKET_DATA_LOADING = "FETCHING_MARKET_DATA_LOADING"
export const FETCHING_MARKET_DATA_ERROR = "FETCHING_MARKET_DATA_ERROR"

export const initialMarketDataState = {
    fetching: undefined,
}

export const marketDataReducer = (state, action) => {
    switch(action.type) {
    case FETCHING_MARKET_DATA_LOADING:
        return {
            ...state,
            fetching: true,
        }
    case FETCHING_MARKET_DATA_SUCCESS:
        return {
            ...state,
            fetching: false,
            marketData: action.payload
        }
    case FETCHING_HISTORICAL_DATA_SUCCESS:
        return {
            ...state,
            fetching: false,
            historicalData: action.payload
        }
    case FETCHING_MARKET_DATA_ERROR:
        return {
            ...state,
            fetching: false,
            error: action.payload
        }
    default:
        return state
    }
}