import { useEffect, useContext } from 'react'
import { auth } from 'firebase'
import GlobalContext from 'state/contexts/GlobalContext'
import { setUser, setPending } from 'state/actions/authActions'
import { initialAuthState } from 'state/reducers/authReducer'

const useAuth = () => {


    // useEffect(() => {
    //    const unsubscribe = auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             dispatch(setUser(user))
    //         } else {
    //             dispatch(setUser(initialAuthState))
    //         }
    //         dispatch(setPending(false))
    //     })

    //     return () => unsubscribe()

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])
        
    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const signin = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const signout = () => {
        return auth.signOut()
    }

    const sendPasswordResetEmail = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    const confirmPasswordReset = (code, password) => {
        return auth.confirmPasswordReset(code, password)
    }

    return {
        signin,
        signup,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset
    }

}

export default useAuth
