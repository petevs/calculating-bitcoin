import { useContext } from 'react'
import { db } from 'firebase'
import GlobalContext from 'state/GlobalContext'

const useFirebase = () => {
    
    const { state } = useContext(GlobalContext)
    const { user } = state

    const updateUserAccount = (field, value) => {
        db.collection('users').doc(user.uid).update({
            account: {
                ...user,
                [field]: value
            }
        })
    }

    return { updateUserAccount }

}

export default useFirebase
