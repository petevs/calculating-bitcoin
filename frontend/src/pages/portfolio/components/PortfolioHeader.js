import { Box } from '@mui/system'
import PageTitle from 'layouts/components/PageTitle'
import ModalButton from './ModalButton'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

const PortfolioHeader = ({title}) => {
    return (
        <Box sx={wrapper}>
            <PageTitle>{title}</PageTitle>
            <Box sx={buttonGroup}>
                <ModalButton
                    text='edit'
                    icon={<EditIcon />}
                />
                <Button startIcon={<DeleteIcon />}>Delete</Button>
            </Box>
        </Box>
    )
}

export default PortfolioHeader


const wrapper = {
    display: 'grid',
    gridTemplateColumns: '1fr auto'
}

const buttonGroup = {
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '1rem'
}