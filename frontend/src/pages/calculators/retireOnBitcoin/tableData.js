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
                decimalScale={2}
                fixedDecimalScale={2}   
            />),
        width: 100,
        sortable: false,
        headerAlign: 'right',
        align: 'right'
    }
]