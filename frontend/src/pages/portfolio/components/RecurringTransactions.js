import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material';
import ModalButton from './ModalButton'
import AddIcon from '@mui/icons-material/Add';

const RecurringTransactions = () => {
    return (
        <Box sx={tableContainerStyle}>
        <Typography variant='h6' sx={{textAlign: 'center'}}>Recurring Transactions</Typography>
        <Box sx={{
            display: 'grid', 
            gridAutoFlow: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '1rem',
            paddingBottom: '1rem'
            }}>
            <ModalButton
                icon={<AddIcon />}
                content={<>I will be the recurring form</>}
                text='Add Transaction'
                variant='contained'
                size='small'
            />
        </Box>
    </Box>
    )
}

export default RecurringTransactions

const tableContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
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