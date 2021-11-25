import { db } from 'firebase'
import { useEffect, useContext } from 'react' 
import GlobalContext from 'state/GlobalContext'
import { setUser } from 'state/user/userActions'
import { initialUserState } from 'state/user/userReducer'

const useSetUser = () => {

    const { state, dispatch } = useContext(GlobalContext)

    useEffect(() => {

            if(!state.auth.pending){
    
                if(state.auth.uid){
                    db.collection('users').doc(state.auth.uid).onSnapshot((doc) => {
                        const result = doc.data()
                        if(result){
                            dispatch(setUser(result.account))
                        }
                    })
                } 
                else {
                    dispatch(setUser(initialUserState))
                }
            }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.auth])

}

export default useSetUser