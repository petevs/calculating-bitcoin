import { Box } from '@mui/system'
import NumberFormat from 'react-number-format'
import TransactionActions from './TransactionActions'

export const tableTypes = (tableType) => {
   return columns.map(item => {
        return {
            ...item,
            editable: false,
            sortable: false
        }
    })
}

const columns = [
    {
        field: 'date',
        headerName: 'Date',
        editable: false
    },
    {
        field: 'type',
        headerName: 'Type',
        sortable: false,
        width: 75,
        editable: false,
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: 'description',
        headerName: 'Description',
        renderCell: (params) => (
            params.value
        ),
        width: 225,
        sortable: false,
        editable: false
    },
    {
        field: 'price',
        headerName: 'BTC Price',
        renderCell: (params) => (
            <NumberFormat 
                displayType='text'
                thousandSeparator={true}
                prefix='$' 
                value={params.value}
                decimalScale={2}
                fixedDecimalScale={2}   
            />),
        width: 100,
        sortable: false,
        headerAlign: 'right',
        align: 'right'
    },
    // {
    //     field: 'deposits',
    //     headerName: 'Deposits',
    //     renderCell: (params) => (
    //         <NumberFormat 
    //             displayType='text'
    //             thousandSeparator={true}
    //             prefix='$' 
    //             value={params.value}
    //             decimalScale={0}
    //             fixedDecimalScale={0} 
    //         />),
    //         width: 125,
    //         sortable: false,
    //         headerAlign: 'right',
    //         align: 'right'
        
    // },
    // {
    //     field: 'totalDeposits',
    //     headerName: 'Total Deposits',
    //     renderCell: (params) => (
    //         <NumberFormat 
    //             displayType='text'
    //             thousandSeparator={true}
    //             prefix='$' 
    //             value={params.value}
    //             decimalScale={0}
    //             fixedDecimalScale={0} 
    //         />),
    //         width: 125,
    //         sortable: false,
    //         headerAlign: 'right',
    //         align: 'right'
    // },
    // {
    //     field: 'proceeds',
    //     headerName: 'Proceeds',
    //     renderCell: (params) => (
    //         <NumberFormat 
    //             displayType='text'
    //             thousandSeparator={true}
    //             prefix='$' 
    //             value={params.value}
    //             decimalScale={0}
    //             fixedDecimalScale={0} 
    //         />),
    //         width: 125,
    //         sortable: false,
    //         headerAlign: 'right',
    //         align: 'right'
        
    // },
    // {
    //     field: 'realizedCost',
    //     headerName: 'Weighted Cost',
    //     renderCell: (params) => (
    //         <NumberFormat 
    //             displayType='text'
    //             thousandSeparator={true}
    //             prefix='$' 
    //             value={params.value}
    //             decimalScale={0}
    //             fixedDecimalScale={0} 
    //         />),
    //         width: 125,
    //         sortable: false,
    //         headerAlign: 'right',
    //         align: 'right'
    // },
    // {
    //     field: 'realizedGain',
    //     headerName: 'Net Proceeds',
    //     renderCell: (params) => (
    //         <NumberFormat 
    //             displayType='text'
    //             thousandSeparator={true}
    //             prefix='$' 
    //             value={params.value}
    //             decimalScale={0}
    //             fixedDecimalScale={0} 
    //         />),
    //         width: 125,
    //         sortable: false,
    //         headerAlign: 'right',
    //         align: 'right'
    // },
    // {
    //     field: 'totalRealizedGain',
    //     headerName: 'Total Net Proceeds',
    //     renderCell: (params) => (
    //         <NumberFormat 
    //             displayType='text'
    //             thousandSeparator={true}
    //             prefix='$' 
    //             value={params.value}
    //             decimalScale={0}
    //             fixedDecimalScale={0} 
    //         />),
    //         width: 150,
    //         sortable: false,
    //         headerAlign: 'right',
    //         align: 'right'
    // },
    // {
    //     field: 'runningBitcoinBalance',
    //     headerName: 'BTC Holdings',
    //     renderCell: (params) => (
    //         <NumberFormat 
    //             displayType='text'
    //             value={params.value}
    //             decimalScale={8}
    //             fixedDecimalScale={8}  
    //         />),
    //         width: 125,
    //         sortable: false,
    //         headerAlign: 'right',
    //         align: 'right'
    // },
    // {
    //     field: 'currentValue',
    //     headerName: 'Market Value',
    //     renderCell: (params) => (
    //         <NumberFormat 
    //             displayType='text'
    //             value={params.value}
    //             decimalScale={0}
    //             fixedDecimalScale={0}
    //             prefix={'$'}
    //             thousandSeparator={true}  
    //         />),
    //         width: 125,
    //         sortable: false,
    //         headerAlign: 'right',
    //         align: 'right'
    // },
    // {
    //     field: 'averageCost',
    //     headerName: 'Average Cost',
    //     renderCell: (params) => (
    //         <NumberFormat 
    //             displayType='text'
    //             thousandSeparator={true}
    //             prefix='$' 
    //             value={params.value}
    //             decimalScale={0}
    //             fixedDecimalScale={0} 
    //         />),
    //         width: 125,
    //         sortable: false,
    //         headerAlign: 'right',
    //         align: 'right'
    // },
    // {
    //     field: 'unrealizedGain',
    //     headerName: 'Unrealized Gain',
    //     renderCell: (params) => (
    //         <NumberFormat 
    //             displayType='text'
    //             value={params.value}
    //             decimalScale={0}
    //             fixedDecimalScale={0}
    //             prefix={'$'}
    //             thousandSeparator={true}  
    //         />),
    //         width: 150,
    //         sortable: false,
    //         headerAlign: 'right',
    //         align: 'right'
    // },
    // {
    //     field: 'totalPerformance',
    //     headerName: 'Total Gain',
    //     renderCell: (params) => (
    //         <NumberFormat 
    //             displayType='text'
    //             value={params.value}
    //             decimalScale={0}
    //             fixedDecimalScale={0}
    //             prefix={'$'}
    //             thousandSeparator={true}  
    //         />),
    //         width: 125,
    //         sortable: false,
    //         headerAlign: 'right',
    //         align: 'right'
    // },
]