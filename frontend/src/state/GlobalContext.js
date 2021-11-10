import { createContext, useReducer } from 'react'
import useCombinedReducers from 'use-combined-reducers'

//Reducers
import { appReducer, initialAppState } from 'state/app/appReducer'
import { authReducer, initialAuthState } from 'state/auth/authReducer'
import { initialUserState, userReducer } from './user/userReducer'
import { marketDataReducer, initialMarketDataState } from './marketData/marketDataReducer'
import { initialPortfolioState, portfolioReducer } from './portfolio/portfolioReducer'

export const GlobalContext = createContext()

export const GlobalProvider= ({children}) => {

    const [state, dispatch] = useCombinedReducers({
        auth: useReducer(authReducer, initialAuthState),
        app: useReducer(appReducer, initialAppState),
        user: useReducer(userReducer, initialUserState),
        marketData: useReducer(marketDataReducer, initialMarketDataState),
        portfolio: useReducer(portfolioReducer, initialPortfolioState)
    })

    return (
        <GlobalContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext
