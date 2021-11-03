import { createContext, useReducer } from 'react'
import useCombinedReducers from 'use-combined-reducers'

//Reducers
import { appReducer, initialAppState } from 'state/reducers/appReducer'
import { useMediaQuery } from '@mui/material'


export const GlobalContext = createContext()

export const GlobalProvider= ({children}) => {

    const [state, dispatch] = useCombinedReducers({
        app: useReducer(appReducer, initialAppState)
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
