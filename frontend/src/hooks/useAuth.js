import { auth } from 'firebase'
import GlobalContext from 'state/contexts/GlobalContext'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

const useAuth = () => {

    const history = useHistory()

    const { state } = useContext(GlobalContext)
    const {
        uid: loggedIn,
        isAnonymous: isGuest,
        pending
    } = state.auth

    const userState = () => {

        if(loggedIn && isGuest){
            return 'LoggedinGuest'
        }

        if(loggedIn && !isGuest){
            return 'Loggedin'
        }

        if(!loggedIn){
            return 'NotLoggedin'
        }
    }

        
    const signup = async (email, password) => {
        await auth.createUserWithEmailAndPassword(email, password)
        history.push('/')
    }

    const signin = async (email, password) => {
        await auth.signInWithEmailAndPassword(email, password)
        history.push('/')
    }

    const continueAsGuest = async () => {
        await auth.signInAnonymously()
        history.push('/')
    }


    const signout = async () => {
        await auth.signOut()
        history.push('/')
    }

    const forgetGuest = async () => {
        await auth.currentUser.delete()
        history.push('/')
    }

    const sendPasswordResetEmail = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    const confirmPasswordReset = (code, password) => {
        return auth.confirmPasswordReset(code, password)
    } 
    return {
        pending,
        loggedIn,
        isGuest,
        userState,
        signup,
        signin,
        continueAsGuest,
        signout,
        forgetGuest,
        sendPasswordResetEmail,
        confirmPasswordReset,
    }

}

export default useAuth
