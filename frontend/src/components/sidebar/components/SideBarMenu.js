import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import CalculateIcon from '@mui/icons-material/Calculate';
import CircleIcon from '@mui/icons-material/Circle';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import GlobalContext from 'state/GlobalContext';
import { useContext } from 'react'

const SideBarMenu = () => {

    const { state} = useContext(GlobalContext)

    const [open, setOpen] = useState(true)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <>
            <h2>{state.user.displayName}</h2>
            <List>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <CalculateIcon />
                    </ListItemIcon>
                    <ListItemText primary='Calculators' />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout='auto' unmountOnExit>
                    <ListItemButton
                        component={Link}
                        to='/dca'
                        sx={{ pl: 4, svg: { height: '6px',}}}>
                        <ListItemIcon
                            sx={{fontSize: 14}}
                        >
                            <CircleIcon />
                        </ListItemIcon>
                        <ListItemText 
                            primary="Dollar Cost Average" 
                            primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}    
                        />
                    </ListItemButton>
                </Collapse>
            </List>
        </>
    )
}

export default SideBarMenu
