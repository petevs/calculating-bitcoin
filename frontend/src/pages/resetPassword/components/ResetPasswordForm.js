import { Button, TextField, Alert } from '@mui/material'
import FormHeader from 'components/form/FormHeader'
import { useContext } from 'react'
import useForm from 'hooks/useForm'
import * as yup from 'yup'
import useErrors from 'hooks/useErrors'
import { Link } from 'react-router-dom'
import TextButton from 'components/TextButton'
import GlobalContext from 'state/GlobalContext'
import useAuth from 'hooks/useAuth'


const ResetPasswordForm = () => {

    const { state } = useContext(GlobalContext)

    const initialFormValues = {
        email: state.user.email || ''
    }
    
    const initialErrorValues = {
        email: ''
    }

    const schema = yup.object().shape({
        email: yup.string().email('Invalid email format').required()
    })
    
    const { values, handleFormChange} = useForm(initialFormValues)
    const { errors, validateChange} = useErrors(initialErrorValues, schema)
    const { sendPasswordResetEmail, formError } = useAuth()

    const backButton = {
        text: state.user.email ? 'Back to account' : 'Back to log in',
        to: state.user.email ? '/account' : '/login'
    }

    return (
        <>
            <FormHeader heading='Reset Your Password' sx={{gap: '1rem'}}>
                <p>Please enter your email and we'll send you a link that will reset your password.</p>
            </FormHeader>
            {formError && <Alert severity='error'>{formError}</Alert>}
            <TextField
                label='Email Address'
                name='email'
                id='email'
                size='medium'
                placeholder='example@mail.com'
                value={values.email}
                onChange={(e) => handleFormChange(e, validateChange)}
                error={errors.email !== ''}
                helperText={errors.email}
            />
            <Button variant='contained' onClick={() => sendPasswordResetEmail(values.email)}>Reset Password</Button>
            <TextButton component={Link} to={backButton.to} variant='text'>{backButton.text}</TextButton>
            
        </>
    )
}

export default ResetPasswordForm
