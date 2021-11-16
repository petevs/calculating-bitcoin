import NumberFormat from 'react-number-format'
import TransactionActions from './TransactionActions'

export const tableTypes = (tableType) => {
    switch(tableType) {
        case 'averageCost':
            return averageCost
        default:
            return columns
    }
}


const averageCost = [
{
    field: 'date',
    headerName: 'Date',
},
{
    field: 'type',
    headerName: 'Type',
},
{
    field: 'description',
    headerName: 'Transaction',
    renderCell: (params) => (
        params.value
    ),
    width: 225,
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
},
]


const columns = [
    {
        field: 'date',
        headerName: 'Date',
    },
    {
        field: 'type',
        headerName: 'Type',
    },
    {
        field: 'description',
        headerName: 'Transaction',
        renderCell: (params) => (
            params.value
        ),
        width: 225,
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
            />)
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
            />)
        
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
            />)
        
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
            />)
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
            />)
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
            />)
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
    },
]