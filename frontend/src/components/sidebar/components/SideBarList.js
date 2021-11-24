import { useState } from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItem from './ListItem'

const SideBarList = ({icon, title, data, children}) => {

    const [open, setOpen] = useState(true)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <List sx={{'& svg': {color: '#fff'}}}>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout='auto' unmountOnExit>
                {
                    data.map(item => 
                        <ListItem
                            key={item.text}
                            to={item.to}
                            text={item.text}
                        />
                    )
                }
                {children}
            </Collapse>
        </List>
    )
}

export default SideBarList
