import { Button, Divider, MenuItem } from '@mui/material'
import useAuth from 'hooks/useAuth'
import { Link } from 'react-router-dom'

const LoggedinMenu = () => {

    const { signout } = useAuth()


    return (
        <>
            <MenuItem
                component={Link}
                to='/account'
            >
                Account
            </MenuItem>
            <MenuItem
                component={Link}
                to='/settings'
            >
                Settings
            </MenuItem>
            <Divider />
            <Button 
                sx={{width: '100%'}}
                onClick={() => signout()}
            >
                Sign Out
            </Button>
        </>
    )
}

export default LoggedinMenu
