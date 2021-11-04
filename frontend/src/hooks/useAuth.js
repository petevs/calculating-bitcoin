import { auth } from 'firebase'
import GlobalContext from 'state/contexts/GlobalContext'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import useModal from './useModal'

const useAuth = () => {

    const history = useHistory()
    const { handleModalClose } = useModal()

    const { state } = useContext(GlobalContext)

    const loggedIn = state.auth.uid ? true : false
    const isGuest = state.auth.isAnonymous
    const pending = state.auth.pending
        
    const signup = async (email, password) => {
        await auth.createUserWithEmailAndPassword(email, password)
        history.push('/')
        handleModalClose()
    }

    const signin = async (email, password) => {
        await auth.signInWithEmailAndPassword(email, password)
        history.push('/')
        handleModalClose()
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
        pending,
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
