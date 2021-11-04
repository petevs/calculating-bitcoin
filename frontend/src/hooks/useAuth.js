import { auth } from 'firebase'
import GlobalContext from 'state/contexts/GlobalContext'
import { useContext } from 'react'

const useAuth = () => {

    const { state } = useContext(GlobalContext)

    const loggedIn = state.auth.uid ? true : false
    const isGuest = state.auth.isAnonymous
        
    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const signin = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const continueAsGuest = () => {
        auth.signInAnonymously()
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
        loggedIn,
        isGuest,
        signup,
        signin,
        continueAsGuest,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset
    }

}

export default useAuth
