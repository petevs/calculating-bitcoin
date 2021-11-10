import { Box } from '@mui/system'
import PageTitle from 'layouts/components/PageTitle'
import ModalButton from './ModalButton'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Button } from '@mui/material';
import PortfolioForm from 'components/PortfolioForm';
import useFirebase from 'hooks/useFirebase';

const PortfolioHeader = (props) => {

    const { deletePortfolio, clonePortfolio } = useFirebase()

    return (
        <Box sx={wrapper}>
            <PageTitle>{props.portfolioName}</PageTitle>
            <Box sx={buttonGroup}>
                <ModalButton
                    text='edit'
                    icon={<EditIcon />}
                    content={
                        <PortfolioForm 
                            title='Edit Portfolio'
                            portfolioName={props.portfolioName}
                            portfolioDescription={props.portfolioDescription} 
                            id={props.id}
                        />
                    }
                />
                <Button
                    onClick={() => deletePortfolio(props.id)} 
                    startIcon={<DeleteIcon />}
                >
                        Delete
                </Button>
                <Button
                    onClick={() => clonePortfolio(props)} 
                    startIcon={<ContentCopyIcon />}
                >
                    Clone
                </Button>
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