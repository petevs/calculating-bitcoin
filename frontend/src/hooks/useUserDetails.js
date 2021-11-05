import { useContext } from 'react'
import GlobalContext from 'state/GlobalContext'

const useUserDetails = () => {

    const { state } = useContext(GlobalContext)
    const { user } = state

    /*
        avatarURL,
        currency,
        displayName,
        email,
        uid
    */

    return {...user}

}

export default useUserDetails