import useModal from "hooks/useModal"
import DefaultLayout from "layouts/DefaultLayout"
import LoginForm from "./components/LoginForm"
import { useEffect } from 'react'

const Login = () => {

    const { handleModalOpen } = useModal()


    useEffect(() => {
        handleModalOpen(<LoginForm />)
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

export default Login
