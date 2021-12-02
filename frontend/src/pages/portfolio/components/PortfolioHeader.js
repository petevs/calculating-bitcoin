import { Box } from '@mui/system'
import PageTitle from 'layouts/components/PageTitle'
import ModalButton from './ModalButton'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Button } from '@mui/material';
import PortfolioForm from 'components/PortfolioForm';
import useFirebase from 'hooks/useFirebase';
import SharePortfolio from './SharePortfolio';

const PortfolioHeader = (props) => {

    const { deletePortfolio, clonePortfolio } = useFirebase()

    return (
        <Box sx={{...wrapper, ...props.sx}}>
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
                            visibility={props.visibility || 'private'} 
                            id={props.id}
                            currency={props.currency}
                        />
                    }
                    disabled={props.disableEditing}
                />
                <Button
                    onClick={() => deletePortfolio(props.id)} 
                    startIcon={<DeleteIcon />}
                    disabled={props.disableEditing}
                >
                        Delete
                </Button>
                <Button
                    onClick={() => clonePortfolio(props)} 
                    startIcon={<ContentCopyIcon />}
                >
                    Clone
                </Button>
                <SharePortfolio {...props} disabled={props.disableEditing}/>
            </Box>
        </Box>
    )
}

export default PortfolioHeader


const wrapper = {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: '1rem',
    '@media (max-width: 1024px)': {
        gridTemplateColumns: '1fr',
        gap: '1rem',
        textAlign: 'center'
    }
}

const buttonGroup = {
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '1rem',

    '@media (max-width: 1024px)': {
        justifyContent: 'center'
    }
}