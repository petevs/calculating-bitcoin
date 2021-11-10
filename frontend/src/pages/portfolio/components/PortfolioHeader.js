import { Box } from '@mui/system'
import PageTitle from 'layouts/components/PageTitle'
import ModalButton from './ModalButton'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Button } from '@mui/material';
import PortfolioForm from 'components/PortfolioForm';
import useFirebase from 'hooks/useFirebase';

const PortfolioHeader = ({ title, portfolioDescription, id }) => {

    const { deletePortfolio } = useFirebase()

    return (
        <Box sx={wrapper}>
            <PageTitle>{title}</PageTitle>
            <Box sx={buttonGroup}>
                <ModalButton
                    text='edit'
                    icon={<EditIcon />}
                    content={
                        <PortfolioForm 
                            title='Edit Portfolio'
                            portfolioName={title}
                            portfolioDescription={portfolioDescription} 
                            id={id}
                        />
                    }
                />
                <Button
                    onClick={() => deletePortfolio(id)} 
                    startIcon={<DeleteIcon />}
                >
                        Delete
                </Button>
                <Button startIcon={<ContentCopyIcon />}>Clone</Button>
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