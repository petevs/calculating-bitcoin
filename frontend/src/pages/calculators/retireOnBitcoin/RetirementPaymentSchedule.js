import { Box } from '@mui/system'
import { columns } from './tableData'
import { DataGrid } from '@mui/x-data-grid'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'

const RetirementPaymentSchedule = (props) => {

    const classes = useStyles()

    return (
            <Box sx={{ flexGrow: 1 }}>
            <DataGrid
                    autoHeight
                    className={classes.root}
                    rows={props.rows}
                    columns={columns}
                    // checkboxSelection
                    pagination
                    rowsPerPageOptions={[5]}
                    pageSize={5}
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
    )
}

export default RetirementPaymentSchedule

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
