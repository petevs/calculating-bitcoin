import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import { Link, useHistory } from 'react-router-dom'
import useDrawer from 'hooks/useDrawer';
import { useMediaQuery } from '@mui/material';

const ListItem = ({to, text}) => {

    const { handleDrawerClose } = useDrawer()

    const history = useHistory()

    const mobile = useMediaQuery('(max-width: 768px)')

    return (
        <ListItemButton
            onClick={() => {
                if(mobile){
                    handleDrawerClose()
                }
                history.push(to)
            }}
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
