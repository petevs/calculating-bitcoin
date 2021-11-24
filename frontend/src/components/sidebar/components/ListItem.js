import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import { Link } from 'react-router-dom'

const ListItem = ({to, text}) => {
    return (
        <ListItemButton
            component={Link}
            to={to}
            sx={{ pl: 4, svg: { height: '6px',}}}>
        <ListItemIcon
            sx={{fontSize: 14}}
        >
            <CircleIcon />
        </ListItemIcon>
        <ListItemText 
            primary={text}
            primaryTypographyProps={{ fontWeight: 'medium' }}    
        />
    </ListItemButton>
    )
}

export default ListItem
