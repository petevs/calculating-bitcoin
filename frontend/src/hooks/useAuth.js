import { auth } from 'firebase'
import GlobalContext from 'state/GlobalContext'
import { useContext, useState } from 'react'
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

    const [formError, setFormError] = useState('')

    const signup = async (email, password) => {
        await auth.createUserWithEmailAndPassword(email, password)
        history.push('/')
    }

    const signin = async (email, password) => {
        await auth.signInWithEmailAndPassword(email, password)
        history.push('/')
    }

    const updateEmail = async (email) => {
        const user = auth.currentUser
        try {
            await user.updateEmail(email)

            console.log('success')
        }
        catch(err) {
            console.log(err)
        }
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

    const sendPasswordResetEmail = async (email) => {
        try {
            await auth.sendPasswordResetEmail(email)
            history.push('/reset-password/2')
        } catch(err){
            setFormError(err.message.replace('Firebase:','').split(".")[0])
        }
    }

    const confirmPasswordReset = (code, password) => {
        return auth.confirmPasswordReset(code, password)
    } 
    return {
        formError,
        pending,
        loggedIn,
        isGuest,
        userState,
        signup,
        signin,
        updateEmail,
        continueAsGuest,
        signout,
        forgetGuest,
        sendPasswordResetEmail,
        confirmPasswordReset,
    }

}

export default useAuth
