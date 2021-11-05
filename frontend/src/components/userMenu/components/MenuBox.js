import { Menu } from '@mui/material'
import React from 'react'

const MenuBox = (props) => {
    return (
        <Menu
            {...props}
            sx={{
                zIndex: 99999,
                '& .MuiPaper-root': {
                    minWidth: '220px',
                    backgroundImage: 'none',
                    backgroundColor: 'rgb(33, 43, 54)',
                    boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) 0px 20px 40px -4px',
                    border: '1px solid rgba(145, 158, 171, 0.08)',
                    borderRadius: '8px'
                }
            }}
        >
            {props.children}
        </Menu>
    )
}

export default MenuBox
