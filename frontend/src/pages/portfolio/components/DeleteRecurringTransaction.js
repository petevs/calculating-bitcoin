import React from 'react'
import { Button } from '@mui/material'
import useFirebase from 'hooks/useFirebase'
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteRecurringTransaction = (props) => {

    const { deleteRecurringTransaction } = useFirebase()

    return (
        <Button
            sx={{justifyContent: 'start'}}
            onClick={() => deleteRecurringTransaction(props.portfolioId, props.transactionId)}
            startIcon={<DeleteIcon />}
        >
            Delete
        </Button>
    )
}

export default DeleteRecurringTransaction
