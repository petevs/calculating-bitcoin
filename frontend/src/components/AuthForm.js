import { TextField } from '@mui/material'
import FormBox from './form/FormBox'
import FormHeader from './form/FormHeader'
import FormFooter from './form/FormFooter'
import FormSubmit from './form/FormSubmit'
import ForgotPassword from './form/ForgotPassword'

const AuthForm = () => {
    return (
        <FormBox>
            <FormHeader heading='Log in' />

            <TextField
                label='Email Address'
                id='email'
                size='medium'
                placeholder='example@mail.com'
            />
            <TextField
                label='Password'
                id='password'
                type='password'
                size='medium'
                placeholder='At least 8 characters'
            />

                <FormSubmit>Log in</FormSubmit>
                <ForgotPassword />
                <FormFooter
                    heading="Don't have an account?"
                    buttonText='Sign up'
                    to='/signup'
                />
        </FormBox>
    )
}

export default AuthForm
