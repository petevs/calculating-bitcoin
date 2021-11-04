import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import CalculateIcon from '@mui/icons-material/Calculate';
import RepeatIcon from '@mui/icons-material/Repeat';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react'

const SideBarMenu = () => {

    const [open, setOpen] = useState(true)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <List>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <CalculateIcon />
                </ListItemIcon>
                <ListItemText primary='Calculators' />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout='auto' unmountOnExit>
                <ListItemButton sx={{ pl: 4}}>
                    <ListItemIcon>
                        <RepeatIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dollar Cost Average" />
                </ListItemButton>
            </Collapse>
        </List>
    )
}

export default SideBarMenu
