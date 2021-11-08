import { Alert, TextField } from '@mui/material'
import FormBox from './form/FormBox'
import FormHeader from './form/FormHeader'
import FormFooter from './form/FormFooter'
import FormSubmit from './form/FormSubmit'
import ForgotPassword from './form/ForgotPassword'
import useForm from 'hooks/useForm'
import useErrors from 'hooks/useErrors'
import * as yup from 'yup'
import { useState } from 'react'
import ContinueAsGuest from './form/ContinueAsGuest'

const AuthForm = (props) => {

    const initialFormValues = {
        email: '',
        password: ''
    }

    const schema = yup.object().shape({
        email: yup.string().email('Invalid email format').required(),
        password: yup.string().required().min(8, 'Password minimum of 8 characters')
    })

    const {values, handleFormChange } = useForm(initialFormValues)
    const {errors, validateChange } = useErrors(initialFormValues, schema)

    const inputSize= 'medium'

    const [formError, setFormError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await props.onSubmit(values.email, values.password)
        } catch(err) {
            console.log(err.message.replace('Firebase:','').split(".")[0])
            setFormError(err.message.replace('Firebase:','').split(".")[0])
        }
    }

    return (
        <FormBox onSubmit={handleSubmit}>
            <FormHeader heading={props.title}>
                 <ContinueAsGuest />
            </FormHeader>
            {formError && <Alert severity='error'>{formError}</Alert>}
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

                <FormSubmit type='submit'>{props.title}</FormSubmit>
                <ForgotPassword />
                <FormFooter
                    heading={props.footerHeader}
                    buttonText={props.footerButtonText}
                    to={props.footerButtonPath}
                />
        </FormBox>
    )
}

export default AuthForm
