import { useContext } from 'react'
import useForm from 'hooks/useForm'
import GlobalContext from 'state/GlobalContext'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
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

    const currencies = [
        ['usd', 'USD - United States Dollar'],
        ['cad', 'CAD - Canadian Dollar']
    ]


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
            <FormControl>
                <InputLabel id='currency'>Default Currency</InputLabel>
                <Select
                    id='currency'
                    name='currency'
                    label='Default Currency'
                    type='select'
                    value={values.currency}
                    onChange={(e) => handleFormChange(e)}
                >
                    {
                        currencies.map(currency => 
                            <MenuItem
                                value={currency[0]}
                            >
                                {currency[1]}
                            </MenuItem>
                                )
                    }
                </Select>
            </FormControl>
            <Button
                variant='contained'
                color='info'
                sx={{
                    gridColumn: '1 / span 2', 
                    justifySelf: 'end'
                }}
            >Save Changes</Button>
        </Box>
    )
}

export default EditUserDetails
