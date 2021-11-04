import { auth } from 'firebase'

const useAuth = () => {
        
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
        signup,
        signin,
        continueAsGuest,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset
    }

}

export default useAuth
