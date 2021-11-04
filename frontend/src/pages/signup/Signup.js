import useModal from "hooks/useModal"
import DefaultLayout from "layouts/DefaultLayout"
import SignupForm from "./components/SignupForm"
import { useEffect } from 'react'

const Signup = () => {

    const { handleModalOpen } = useModal()


    useEffect(() => {
        handleModalOpen(<SignupForm />)
    }, [])

    return(
        <DefaultLayout 
            modal={{
                open: true,
                onClose: '',

            }}
        />
    )
}

export default Signup
