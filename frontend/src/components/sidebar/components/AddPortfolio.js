import useModal from 'hooks/useModal'
import PortfolioForm from 'components/PortfolioForm'
import AddIcon from '@mui/icons-material/Add';
import { ListItemButton } from '@mui/material';
import { ListItemIcon } from '@material-ui/core';
import useAuth from 'hooks/useAuth';
import { Redirect } from 'react-router-dom'

const AddPortfolio = () => {

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
                sx={buttonStyle}
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
    }
}