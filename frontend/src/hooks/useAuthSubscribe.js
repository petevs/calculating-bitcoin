import { auth } from 'firebase'
import { useEffect, useContext } from 'react'
import GlobalContext from 'state/GlobalContext'
import { setAuth, setPending } from 'state/auth/authActions'
import { initialAuthState } from 'state/auth/authReducer'

const useAuthSubscribe = () => {

    const { dispatch } = useContext(GlobalContext)

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

}

export default useAuthSubscribe