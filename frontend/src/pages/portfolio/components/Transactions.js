import { Box } from "@mui/system"
import { makeStyles } from '@mui/styles'
import { Typography } from "@mui/material"
import ModalButton from "./ModalButton"
import TransactionForm from "./TransactionForm"
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import AddIcon from '@mui/icons-material/Add';

const Transactions = ({columns, transactions, id}) => {

    const classes = useStyles()

    return (
        <Box sx={tableContainerStyle}>
                    <Typography variant='h6'>Transactions</Typography>
                    <ModalButton
                        sx={{width: '200px', marginBottom: '1rem'}}
                        icon={<AddIcon />}
                        content={<TransactionForm portfolioId={id} />}
                        text='Add Transaction'
                        variant='contained'
                        size='small'
                    />
                    <Box sx={{ flexGrow: 1 }}>
                        <DataGrid
                            autoHeight
                            className={classes.root}
                            rows={transactions}
                            columns={columns}
                            // checkboxSelection
                            pagination
                            disableSelectionOnClick
                            disableColumnFilter
                            disable
                            hideFooter={true}
                            disableColumnSelector
                            disableColumnMenu
                            // components={{
                            //     Toolbar: CustomToolbar,
                            // }}
                        />
                    </Box>
                </Box>
    )
}

export default Transactions


const tableContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
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

const useStyles = makeStyles({
    root: {
        border: 'none',
        '& .MuiDataGrid-columnsContainer': {
            backgroundColor: '#333d48',
            border: 'none',
            borderRadius: '6px',
        },
        '& .MuiDataGrid-toolbarContainer': {
            backgroundColor: '#333d48',
            borderRadius: '0.5rem 0.5rem 0 0',
            borderBottom: '1px solid rgba(81, 81, 81, 1)',
            padding: '.5rem 1rem'
        },
        '& .MuiDataGrid-row:hover': {
            backgroundColor: 'transparent'
        },
        '& .MuiDataGrid-cell': {
            color: '#fff',
            fontWeight: 700,
            textTransform: 'uppercase',
            justifyContent: 'flex-end',
            borderBottom: 'none'
        },
        '& .MuiDataGrid-cell:focus': {
            outline: 'none'
        },
        '& .MuiDataGrid-cell:focus-within': {
            outline: 'none'
        },
        '& .MuiDataGrid-cell--withRenderer': {
            justifyContent: 'flex-end'
        },
        '& .MuiDataGrid-columnSeparator': {
            display: 'none'
        }
      },
})