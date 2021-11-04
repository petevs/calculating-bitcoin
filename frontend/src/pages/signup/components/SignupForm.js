import AuthForm from "components/AuthForm"
import useAuth from "hooks/useAuth"

const SignupForm = () => {

    const { signup } = useAuth()


    return (
        <AuthForm
            title='Sign up'
            buttonText='Sign up'
            onSubmit={signup}
            footerHeader="Already have an account?"
            footerButtonText='Login'
            footerButtonPath='/login'
        />
    )
}

export default SignupForm
