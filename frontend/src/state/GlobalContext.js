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
import { setUser } from './user/userActions'
import Loading from 'components/Loading'


export const GlobalContext = createContext()

export const GlobalProvider= ({children}) => {

    const [state, dispatch] = useCombinedReducers({
        auth: useReducer(authReducer, initialAuthState),
        app: useReducer(appReducer, initialAppState),
        user: useReducer(userReducer, initialUserState)
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
                dispatch(setUser(result.account))
            }
        })
    },[state.auth.uid])

    
    if(state.auth.pending){
        return(
            <Loading />
        )
    }

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
