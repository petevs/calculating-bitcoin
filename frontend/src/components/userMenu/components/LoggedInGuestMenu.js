import { MenuItem, Divider, Button } from '@mui/material'
import {Link} from 'react-router-dom'
import useAuth from 'hooks/useAuth'

const LoggedInGuestMenu = () => {

    const { forgetGuest } = useAuth()

    return (
        <>
            <MenuItem
                component={Link}
                to='/signup'
            >
                Sign up
            </MenuItem>
            <MenuItem
                component={Link}
                to='/login'
            >
                Log in
            </MenuItem>
            <Divider />
            <Button 
                sx={{width: '100%'}}
                onClick={() => forgetGuest()}
            >
                Forget Me
            </Button>
        </>
    )
}

export default LoggedInGuestMenu
