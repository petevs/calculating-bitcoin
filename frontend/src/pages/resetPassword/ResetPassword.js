import { Button, TextField } from '@mui/material'
import FormBox from 'components/form/FormBox'
import FormHeader from 'components/form/FormHeader'
import React from 'react'
import useForm from 'hooks/useForm'
import * as yup from 'yup'
import useErrors from 'hooks/useErrors'
import { Link } from 'react-router-dom'
import Page from 'components/Page'
import TextButton from 'components/TextButton'

const ResetPassword = () => {

    const initialFormValues = {
        email: ''
    }

    const schema = yup.object().shape({
        email: yup.string().email('Invalid email format').required()
    })
    
    const { values, handleFormChange} = useForm(initialFormValues)
    const { errors, validateChange} = useErrors(initialFormValues, schema)



    return (
        <Page>
            <FormBox>
                <FormHeader heading='Reset Your Password' sx={{gap: '1rem'}}>
                    <p>Please enter your email and we'll send you a link that will reset your password.</p>
                </FormHeader>
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
                <Button variant='contained'>Reset Password</Button>
                <TextButton component={Link} to='/login' variant='text'>Back to Log in</TextButton>
            </FormBox>
        </Page>
    )
}

export default ResetPassword
