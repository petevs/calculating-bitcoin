import { createContext, useReducer, useEffect } from 'react'
import useCombinedReducers from 'use-combined-reducers'
import { auth } from 'firebase'
import { setAuth } from 'state/auth/authActions'
import { setPending } from 'state/auth/authActions'
import { db } from 'firebase'

//Reducers
import { appReducer, initialAppState } from 'state/app/appReducer'
import { authReducer, initialAuthState } from 'state/auth/authReducer'
import { initialUserState, userReducer } from './user/userReducer'
import { marketDataReducer, initialMarketDataState } from './marketData/marketDataReducer'

export const GlobalContext = createContext()

export const GlobalProvider= ({children}) => {

    const [state, dispatch] = useCombinedReducers({
        auth: useReducer(authReducer, initialAuthState),
        app: useReducer(appReducer, initialAppState),
        user: useReducer(userReducer, initialUserState),
        marketData: useReducer(marketDataReducer, initialMarketDataState)
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
