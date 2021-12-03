import useModal from 'hooks/useModal'
import PortfolioForm from 'components/PortfolioForm'
import AddIcon from '@mui/icons-material/Add';
import { ListItemButton, ListItemIcon } from '@mui/material';
import useAuth from 'hooks/useAuth';
import { Redirect } from 'react-router-dom'

const AddPortfolio = (props) => {

    const { handleModalOpen } = useModal()
    const { loggedIn } = useAuth()

    const handleOpen = () => {
        if(loggedIn){
            handleModalOpen(
                <PortfolioForm title='Add Portfolio' />
            )
        } else {
            <Redirect to={"/login"} />
        }

    }

    return (
        <>
            <ListItemButton 
                sx={{...buttonStyle, ...props.sx}}
                onClick={() => handleOpen()}
            >
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                Add Portfolio
            </ListItemButton>
        </>
    )
}

export default AddPortfolio


const buttonStyle = {
    paddingLeft: '2rem',
    fontSize: '1rem',
    color: 'orange',
    '& .MuiSvgIcon-root': {
        color: 'orange'
    },
}