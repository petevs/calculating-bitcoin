import { createContext, useReducer, useEffect } from 'react'
import useCombinedReducers from 'use-combined-reducers'
import { auth } from 'firebase'
import { setUser } from 'state/actions/authActions'
import { setPending } from 'state/actions/authActions'

//Reducers
import { appReducer, initialAppState } from 'state/reducers/appReducer'
import { authReducer, initialAuthState } from 'state/reducers/authReducer'


export const GlobalContext = createContext()

export const GlobalProvider= ({children}) => {

    const [state, dispatch] = useCombinedReducers({
        auth: useReducer(authReducer, initialAuthState),
        app: useReducer(appReducer, initialAppState),
    })

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(setUser(user))
            } else {
                dispatch(setUser(initialAuthState))
            }
            dispatch(setPending(false))
        })

        return () => unsubscribe()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
