import { Button, Divider, MenuItem } from '@mui/material'
import useAuth from 'hooks/useAuth'
import { Link } from 'react-router-dom'

const LoggedinMenu = () => {

    const { signout } = useAuth()


    return (
        <>
            <MenuItem
                component={Link}
                to='/portfolio'
            >
                Portfolios
            </MenuItem>
            {/* <MenuItem
                component={Link}
                to='/calculators'
            >
                Comparisons
            </MenuItem>
            <MenuItem
                component={Link}
                to='/calculators'
            >
                Calculations
            </MenuItem>
            <MenuItem
                component={Link}
                to='/bookmarks'
            >
                Bookmarks
            </MenuItem> */}
            <MenuItem
                component={Link}
                to='/account'
            >
                Account
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
