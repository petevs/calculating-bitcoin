import { Menu } from '@mui/material'
import React from 'react'

const MenuBox = (props) => {
    return (
        <Menu
            {...props}
            sx={{
                zIndex: 99999,
                '& .MuiPaper-root': {
                    minWidth: '200px'
                }
            }}
        >
            {props.children}
        </Menu>
    )
}

export default MenuBox
