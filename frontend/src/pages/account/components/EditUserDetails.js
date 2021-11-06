import { useContext } from 'react'
import useForm from 'hooks/useForm'
import GlobalContext from 'state/GlobalContext'
import { TextField } from '@mui/material'
import { Box } from '@mui/system'

const EditUserDetails = () => {

    const { state } = useContext(GlobalContext)
    const { user } = state

    const initialFormValues = {
        email: user.email,
        currency: user.currency,
        displayName: user.displayName || user.email
    }

    const {values, handleFormChange} = useForm(initialFormValues)

    console.log(initialFormValues, values)

    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem'
        }}>
            <TextField
                id='email'
                name='email'
                label='Email'
                value={values.email}
                onChange={(e) => handleFormChange(e)}
            />
            <TextField
                id='displayName'
                name='displayName'
                label='Display Name'
                value={values.displayName}
                onChange={(e) => handleFormChange(e)}
            />
            <TextField
                id='currency'
                name='currency'
                label='Currency'
                type='select'
                value={values.currency}
                onChange={(e) => handleFormChange(e)}
            />
        </Box>
    )
}

export default EditUserDetails
