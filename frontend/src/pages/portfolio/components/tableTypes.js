import NumberFormat from 'react-number-format'
import TransactionActions from './TransactionActions'

export const tableTypes = (tableType) => {
    switch(tableType) {
        default:
            return columns
    }
}


const columns = [
    {
        field: 'date',
        headerName: 'Date',
    },
    {
        field: 'type',
        headerName: 'Type',
        sortable: false
    },
    {
        field: 'description',
        headerName: 'Description',
        renderCell: (params) => (
            params.value
        ),
        width: 225,
        sortable: false,
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
            width: 125,
            sortable: false,
            headerAlign: 'center',
            align: 'right'
    },
    {
        field: 'deposits',
        headerName: 'Deposits',
        renderCell: (params) => (
            <NumberFormat 
                displayType='text'
                thousandSeparator={true}
                prefix='$' 
                value={params.value}
                decimalScale={0}
                fixedDecimalScale={0} 
            />),
            width: 125,
            sortable: false,
            headerAlign: 'center',
            align: 'right'
        
    },
    {
        field: 'proceeds',
        headerName: 'Proceeds',
        renderCell: (params) => (
            <NumberFormat 
                displayType='text'
                thousandSeparator={true}
                prefix='$' 
                value={params.value}
                decimalScale={0}
                fixedDecimalScale={0} 
            />),
            width: 125,
            sortable: false,
            headerAlign: 'center',
            align: 'right'
        
    },
    {
        field: 'totalDeposits',
        headerName: 'Total Deposits',
        renderCell: (params) => (
            <NumberFormat 
                displayType='text'
                thousandSeparator={true}
                prefix='$' 
                value={params.value}
                decimalScale={0}
                fixedDecimalScale={0} 
            />),
            width: 125,
            sortable: false,
            headerAlign: 'center',
            align: 'right'
    },
    {
        field: 'totalProceeds',
        headerName: 'Total Proceeds',
        renderCell: (params) => (
            <NumberFormat 
                displayType='text'
                thousandSeparator={true}
                prefix='$' 
                value={params.value}
                decimalScale={0}
                fixedDecimalScale={0} 
            />),
            width: 125,
            sortable: false,
            headerAlign: 'center',
            align: 'right'
    },
    {
        field: 'averageCost',
        headerName: 'Average Cost',
        renderCell: (params) => (
            <NumberFormat 
                displayType='text'
                thousandSeparator={true}
                prefix='$' 
                value={params.value}
                decimalScale={0}
                fixedDecimalScale={0} 
            />),
            width: 125,
            sortable: false,
            headerAlign: 'center',
            align: 'right'
    },
    {
        field: 'runningBitcoinBalance',
        headerName: 'BTC Holdings',
        renderCell: (params) => (
            <NumberFormat 
                displayType='text'
                value={params.value}
                decimalScale={8}
                fixedDecimalScale={8}  
            />),
            width: 125,
            sortable: false,
            headerAlign: 'center',
            align: 'right'
    },
    {
        field: 'currentValue',
        headerName: 'Market Value',
        renderCell: (params) => (
            <NumberFormat 
                displayType='text'
                value={params.value}
                decimalScale={0}
                fixedDecimalScale={0}
                prefix={'$'}
                thousandSeparator={true}  
            />),
            width: 125,
            sortable: false,
            headerAlign: 'center',
            align: 'right'
    },
]