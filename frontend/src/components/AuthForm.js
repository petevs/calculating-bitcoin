import { TextField } from '@mui/material'
import FormBox from './form/FormBox'
import FormHeader from './form/FormHeader'
import FormFooter from './form/FormFooter'
import FormSubmit from './form/FormSubmit'
import ForgotPassword from './form/ForgotPassword'
import useForm from 'hooks/useForm'
import useErrors from 'hooks/useErrors'
import * as yup from 'yup'
import { useEffect } from 'react'

const AuthForm = (props) => {

    const initialFormValues = {
        email: '',
        password: ''
    }

    const schema = yup.object().shape({
        email: yup.string().email('Invalid email format').required(),
        password: yup.string().required().min(8)
    })

    const {values, handleFormChange } = useForm(initialFormValues)
    const {errors, validateChange } = useErrors(initialFormValues, schema)

    const inputSize= 'medium'

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await props.onSubmit(values.email, values.password)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <FormBox onSubmit={handleSubmit}>
            <FormHeader heading={props.title} />

            <TextField
                label='Email Address'
                name='email'
                id='email'
                size={inputSize}
                placeholder='example@mail.com'
                value={values.email}
                onChange={(e) => handleFormChange(e, validateChange)}
                error={errors.email !== ''}
                helperText={errors.email}
            />
            <TextField
                label='Password'
                name='password'
                id='password'
                type='password'
                size={inputSize}
                placeholder='At least 8 characters'
                value={values.password}
                onChange={(e) => handleFormChange(e, validateChange)}
                error={errors.password !== ''}
                helperText={errors.password}
            />

                <FormSubmit type='submit'>Log in</FormSubmit>
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
