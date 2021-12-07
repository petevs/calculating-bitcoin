import { Box } from "@mui/system"
import { makeStyles } from '@mui/styles'
import { Typography } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid'
import Currency from "components/Currency"

const AmortizationSchedule = ({rows}) => {

    const classes = useStyles()


    const columns = [
        {
            field: 'period',
            headerName: 'Period',
            minWidth: 225,
            flex: 1,
        },
        {
            field: 'payment',
            headerName: 'Payment',
            renderCell: (params) => <Currency value={params.value} />,
            minWidth: 225,
            flex: 1,
        },
        {
            field: 'interestPayment',
            headerName: 'Interest',
            renderCell: (params) => <Currency value={params.value} />,
            minWidth: 225,
            flex: 1,
        },
        {
            field: 'principlePayment',
            headerName: 'Principle',
            renderCell: (params) => <Currency value={params.value} />,
            minWidth: 225,
            flex: 1,
        },
        {
            field: 'balance',
            headerName: 'Balance',
            renderCell: (params) => <Currency value={params.value} />,
            minWidth: 225,
            flex: 1,
        },

    ]

    return (
        <Box sx={tableContainerStyle}>
        <Typography variant='h6'>Amortizatoin Schedule</Typography>
        <Box sx={{ flexGrow: 1 }}>
            <DataGrid
                autoHeight
                className={classes.root}
                rows={rows}
                columns={columns}
                // checkboxSelection
                pagination
                rowsPerPageOptions={[10]}
                pageSize={10}
                disableSelectionOnClick
                // disableColumnFilter
                // hideFooter={true}
                // disableColumnSelector
                // disableColumnMenu
                // components={{
                //     Toolbar: CustomToolbar,
                // }}
            />
        </Box>
    </Box>
    )
}

export default AmortizationSchedule

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

const useStyles = makeStyles({
    root: {
        border: 'none',
        '& .MuiDataGrid-columnsContainer': {
            backgroundColor: '#333d48',
            border: 'none',
            borderRadius: '8px 8px 0 0',
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
        },
      },
})