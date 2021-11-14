import React from 'react'
import ModalButton from './ModalButton'
import EditIcon from '@mui/icons-material/Edit';
import TransactionForm from './TransactionForm';

const EditTransaction = (props) => {

    return (
        <ModalButton
            sx={{justifyContent: 'start'}}
            icon={<EditIcon />}
            content={<TransactionForm portfolioId={props.portfolioId} {...props} formType='edit' />}
            text='Edit'
        />
    )
}

export default EditTransaction
