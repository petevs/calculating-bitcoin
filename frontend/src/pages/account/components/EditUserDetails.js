import { useContext } from 'react'
import useForm from 'hooks/useForm'
import useErrors from 'hooks/useErrors'
import GlobalContext from 'state/GlobalContext'
import { Button, MenuItem, TextField } from '@mui/material'
import { Box } from '@mui/system'
import * as yup from 'yup'
import { db } from 'firebase'

const EditUserDetails = () => {

    const { state } = useContext(GlobalContext)
    const { user } = state

    const initialErrors = {
        email: '',
        currency: '',
        displayName: ''
    }

    const initialFormValues = {
        email: user.email,
        currency: user.currency,
        displayName: user.displayName || user.email
    }

    const schema = yup.object().shape({
        email: yup.string().email('Invalid email format').required(),
        currency: yup.string(),
        displayName: yup.string().min(3, 'Display name must be at least 3 characters')
    })

    const {values, handleFormChange} = useForm(initialFormValues)
    const {errors, validateChange } = useErrors(initialErrors, schema)

    const currencies = [
        ['usd', 'USD - United States Dollar'],
        ['cad', 'CAD - Canadian Dollar']
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await db.collection('users').doc(user.uid).update({
                account: {
                    ...user,
                    ...values
                }
            })
        }
        catch(err) {
            console.log(err)
        }
    }

    console.log(values, initialFormValues)

    return (
        <Box>
            <Box 
                sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                '@media (max-width: 1400px)': {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1rem'
                }
            }}>
                <TextField
                    sx={{display: 'grid', justifySelf: 'stretch', minWidth: '300px'}}
                    id='email'
                    name='email'
                    label='Email'
                    value={values.email}
                    onChange={(e) => handleFormChange(e, validateChange)}
                    error={errors.email !== ''}
                    helperText={errors.email}
                />
                <TextField
                    sx={{display: 'grid', justifySelf: 'stretch', minWidth: '300px'}}
                    id='displayName'
                    name='displayName'
                    label='Display Name'
                    value={values.displayName}
                    onChange={(e) => handleFormChange(e, validateChange)}
                    error={errors.displayName !== ''}
                    helperText={errors.displayName}
                />
                <TextField
                    select
                    id='currency'
                    name='currency'
                    label='Default Currency'
                    type='select'
                    value={values.currency}
                    onChange={(e) => handleFormChange(e, validateChange)}
                    error={errors.currency !== ''}
                    helperText={errors.currency}
                >
                    {
                        currencies.map(currency => 
                            <MenuItem
                                key={currency[0]}
                                value={currency[0]}
                            >
                                {currency[1]}
                            </MenuItem>
                                )
                    }
                </TextField>
            </Box>
            <Box
                sx={{display: 'grid', gridTemplateColumns: '1fr auto auto', marginTop: '1rem', gap: '1rem'}}
            >
                {/* {
                values.displayName !== initialFormValues.displayName &&
                    <Button
                        onClick={() => setValues(initialFormValues)}
                    >
                        Cancel
                    </Button>
                } */}
                <Button
                    variant='contained'
                    color='primary'
                    onClick={(e) => handleSubmit(e)}
                    sx={{
                        gridColumn: '1 / span 2', 
                        justifySelf: 'end'
                    }}
                >Save Changes</Button>
            </Box>
        </Box>
    )
}

export default EditUserDetails
