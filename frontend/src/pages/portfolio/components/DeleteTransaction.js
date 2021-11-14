import React from 'react'
import { Button } from '@mui/material'
import useFirebase from 'hooks/useFirebase'
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteTransaction = (props) => {

    const { deleteTransaction } = useFirebase()

    return (
        <Button
            sx={{justifyContent: 'start'}}
            onClick={() => deleteTransaction(props.portfolioId, props.transactionId)}
            startIcon={<DeleteIcon />}
        >
            Delete
        </Button>
    )
}

export default DeleteTransaction
