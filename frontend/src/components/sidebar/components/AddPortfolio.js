import React from 'react'
import { Button } from '@mui/material'
import useModal from 'hooks/useModal'
import PortfolioForm from 'components/PortfolioForm'
import AddIcon from '@mui/icons-material/Add';
import { ListItemButton } from '@mui/material';
import { ListItemIcon, ListItemText } from '@material-ui/core';

const AddPortfolio = () => {

    const { handleModalOpen } = useModal()

    return (
        <>
            <ListItemButton 
                fullWidth 
                sx={buttonStyle}
                onClick={() => handleModalOpen(
                    <PortfolioForm title='Add Portfolio' />
                )}
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