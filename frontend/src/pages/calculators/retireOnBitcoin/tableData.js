import NumberFormat from 'react-number-format'

export const columns = [
    {
        field: 'age',
        headerName: 'Age',
        flex: 0.5
    },
    {
        field: 'year',
        headerName: 'Year',
        flex: 0.5,
    },
    {
        field: 'bitcoinPrice',
        headerName: 'BTC Price',
        renderCell: (params) => (
            <NumberFormat 
                displayType='text'
                thousandSeparator={true}
                prefix='$' 
                value={params.value}
                decimalScale={0}
            />),
        width: 100,
        sortable: false,
        headerAlign: 'right',
        align: 'right',
        flex: 1
    },
    {
        field: 'bitcoinBalance',
        headerName: 'Starting BTC Balance',
        renderCell: (params) => (
            <NumberFormat 
                displayType='text'
                value={params.value}
                decimalScale={8}
                fixedDecimalScale={8}
            />),
        width: 100,
        sortable: false,
        headerAlign: 'right',
        align: 'right',
        flex: 1
    },
    {
        field: 'portfolioValue',
        headerName: 'Portfolio Value',
        renderCell: (params) => (
            <NumberFormat 
                displayType='text'
                thousandSeparator={true}
                prefix='$' 
                value={params.value}
                decimalScale={0}
            />),
        width: 100,
        sortable: false,
        headerAlign: 'right',
        align: 'right',
        flex: 1
    },
    {
        field: 'bitcoinSold',
        headerName: 'BTC Sold',
        renderCell: (params) => (
            <NumberFormat 
                displayType='text'
                value={params.value}
                decimalScale={8}
                fixedDecimalScale={8}
            />),
        width: 100,
        sortable: false,
        headerAlign: 'right',
        align: 'right',
        flex: 1
    },
    {
        field: 'inflationAdjustedIncome',
        headerName: 'Payment (Inflation Adjusted)',
        renderCell: (params) => (
            <NumberFormat 
                displayType='text'
                thousandSeparator={true}
                prefix='$' 
                value={params.value}
                decimalScale={0}
            />),
        width: 100,
        sortable: false,
        headerAlign: 'right',
        align: 'right',
        flex: 1
    },
    {
        field: 'endingBitcoinBalance',
        headerName: 'Ending BTC Balance',
        renderCell: (params) => (
            <NumberFormat 
                displayType='text'
                value={params.value}
                decimalScale={8}
                fixedDecimalScale={8}
            />),
        width: 100,
        sortable: false,
        headerAlign: 'right',
        align: 'right',
        flex: 1
    },
]