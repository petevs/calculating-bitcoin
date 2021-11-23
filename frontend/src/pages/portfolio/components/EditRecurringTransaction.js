import React from 'react'
import ModalButton from './ModalButton'
import EditIcon from '@mui/icons-material/Edit';
import RecurringTransactionForm from './RecurringTransactionForm';

const EditRecurringTransaction = (props) => {
    return (
        <ModalButton
            sx={{justifyContent: 'start'}}
            icon={<EditIcon />}
            content={<RecurringTransactionForm portfolioId={props.portfolioId} {...props} formType='edit' />}
            text='Edit'
        />
    )
}

export default EditRecurringTransaction
