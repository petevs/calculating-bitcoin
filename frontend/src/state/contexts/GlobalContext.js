import { createContext, useReducer, useEffect } from 'react'
import useCombinedReducers from 'use-combined-reducers'
import { auth } from 'firebase'
import { setAuth } from 'state/actions/authActions'
import { setPending } from 'state/actions/authActions'
import { db } from 'firebase'

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
                dispatch(setAuth(user))
            } else {
                dispatch(setAuth(initialAuthState))
            }
            dispatch(setPending(false))
        })

        return () => unsubscribe()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        db.collection('users').doc(state.auth.uid).onSnapshot((doc) => {
            const result = doc.data()
            if(result){
                console.log(result)
            }
        })
    },[state.auth.uid])

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
