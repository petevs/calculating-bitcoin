import NumberFormat from 'react-number-format'

export const columns = [
    {
        field: 'age',
        headerName: 'Age'
    },
    {
        field: 'year',
        headerName: 'Year'
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
        align: 'right'
    },
    {
        field: 'bitcoinBalance',
        headerName: 'BTC Balance',
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
        align: 'right'
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
        align: 'right'
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
        align: 'right'
    },
    {
        field: 'inflationAdjustedIncome',
        headerName: 'Inflation Adjusted Retirement Income',
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
        align: 'right'
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
        align: 'right'
    },
]