import { useState } from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItem from './ListItem'

const SideBarList = ({icon, title, data}) => {

    const [open, setOpen] = useState(true)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <List>
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
            </Collapse>
        </List>
    )
}

export default SideBarList
