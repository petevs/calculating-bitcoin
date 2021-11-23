import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material';
import ModalButton from './ModalButton'
import AddIcon from '@mui/icons-material/Add';
import RecurringTransactionForm from './RecurringTransactionForm';
import RecurringTransaction from './RecurringTransaction';
import { DataGrid } from '@mui/x-data-grid'

const RecurringTransactions = (props) => {

    return (
        <Box sx={tableContainerStyle}>
        <Typography variant='h6'>Recurring Transactions</Typography>
        <Box sx={{
            display: 'grid', 
            gridAutoFlow: 'row', 
            gap: '1rem',
            paddingBottom: '1rem'
            }}>
            {
                props.recurringTransactions.map( item => 
                
                    <RecurringTransaction key={item.id} {...item} />
                    
                )
            }
            <ModalButton
                icon={<AddIcon />}
                content={<RecurringTransactionForm {...props} />}
                text='Add Recurring Transaction'
                variant='contained'
                size='small'
            />
        </Box>
    </Box>
    )
}

export default RecurringTransactions

const tableContainerStyle = {
    backgroundColor: '#212B36',
    boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) 0px 16px 32px -4px',
    borderRadius: '1rem',
    padding: '1rem',
    color: '#fff',
    '& h6': {
        padding: '1rem 0',
        fontWeight: 700,
    }
}

// const useStyles = makeStyles({
//     root: {
//         border: 'none',
//         '& .MuiDataGrid-columnsContainer': {
//             backgroundColor: '#333d48',
//             border: 'none',
//             borderRadius: '8px',
//         },
//         '& .MuiDataGrid-toolbarContainer': {
//             backgroundColor: '#333d48',
//             borderRadius: '0.5rem 0.5rem 0 0',
//             borderBottom: '1px solid rgba(81, 81, 81, 1)',
//             padding: '.5rem 1rem'
//         },
//         '& .MuiDataGrid-row:hover': {
//             backgroundColor: 'transparent'
//         },
//         '& .MuiDataGrid-cell': {
//             color: '#fff',
//             fontWeight: 700,
//             textTransform: 'uppercase',
//             justifyContent: 'flex-end',
//             borderBottom: 'none'
//         },
//         '& .MuiDataGrid-cell:focus': {
//             outline: 'none'
//         },
//         '& .MuiDataGrid-cell:focus-within': {
//             outline: 'none'
//         },
//         '& .MuiDataGrid-cell--withRenderer': {
//             justifyContent: 'flex-end'
//         },
//         '& .MuiDataGrid-columnSeparator': {
//             display: 'none'
//         }
//       },
// })