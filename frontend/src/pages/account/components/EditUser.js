import { useContext } from 'react'
import { Button, TextField } from '@mui/material'
import useAuth from 'hooks/useAuth'
import GlobalContext from 'state/GlobalContext'
import { Box } from '@mui/system'

const EditUser = () => {

    const { state } = useContext(GlobalContext)
    const { user } = state

    const { sendPasswordResetEmail } = useAuth()

    return (
        <>
                <TextField
                    sx={{display: 'grid', justifySelf: 'stretch', minWidth: '300px'}}
                    id='email'
                    name='email'
                    label='Email'
                    value={user.email}
                    disabled
                />
                <TextField
                    sx={{display: 'grid', justifySelf: 'stretch', minWidth: '300px'}}
                    id='password'
                    name='password'
                    type='password'
                    label='Password'
                    value='password'
                    disabled
                />
                <Box sx={{gridColumn: '1 / span 2', justifySelf: 'end', marginTop: '-.5rem'}}>
                    <Button type='text' size='small' onClick={() => sendPasswordResetEmail(user.email)}>Reset Password</Button>
                </Box>
            </>
    )
}

export default EditUser