import AuthForm from "components/AuthForm"
import useAuth from "hooks/useAuth"

const LoginForm = () => {

    const { signin } = useAuth()


    return (
        <AuthForm
            title='Log in'
            buttonText='Log in'
            onSubmit={signin}
            footerHeader="Don't have an account?"
            footerButtonText='Sign up'
            footgerButtonPath='/signup'
        />
    )
}

export default LoginForm
