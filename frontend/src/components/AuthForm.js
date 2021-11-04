import { TextField } from '@mui/material'
import FormBox from './form/FormBox'
import FormHeader from './form/FormHeader'
import FormFooter from './form/FormFooter'
import FormSubmit from './form/FormSubmit'
import ForgotPassword from './form/ForgotPassword'
import useForm from 'hooks/useForm'

const AuthForm = () => {

    const initialFormValues = {
        email: '',
        password: ''
    }

    const {values, handleFormChange } = useForm(initialFormValues)

    const inputSize= 'medium'


    return (
        <FormBox>
            <FormHeader heading='Log in' />

            <TextField
                label='Email Address'
                name='email'
                id='email'
                size={inputSize}
                placeholder='example@mail.com'
                value={values.email}
                onChange={handleFormChange}
            />
            <TextField
                label='Password'
                name='password'
                id='password'
                type='password'
                size={inputSize}
                placeholder='At least 8 characters'
                value={values.password}
                onChange={handleFormChange}
            />

                <FormSubmit onClick={() => console.log(values)}>Log in</FormSubmit>
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
