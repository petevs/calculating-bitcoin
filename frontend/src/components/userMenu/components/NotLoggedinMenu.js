import React from 'react'
import { MenuItem, Divider } from '@mui/material'
import {Link} from 'react-router-dom'

const NotLoggedinMenu = () => {
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
        </>
    )
}

export default NotLoggedinMenu
