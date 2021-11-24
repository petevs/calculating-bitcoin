import { List, ListItemText } from '@material-ui/core'
import { ListItemButton, ListItemIcon } from '@mui/material'
import React from 'react'

const SideBarListItem = (props) => {
    return (
        <List>
            <ListItemButton
                {...props.button}
                sx={{'& svg': {color: '#fff'}}}
            >
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
                <ListItemText primary={props.text} />
            </ListItemButton>
        </List>
    )
}

export default SideBarListItem