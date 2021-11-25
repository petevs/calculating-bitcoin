import NumberFormat from 'react-number-format'

const Currency = (props) => {
    return (
        <NumberFormat
            displayType='text' 
            thousandSeparator={true} 
            prefix='$'
            decimalScale={2}
            {...props} 
        />
    )
}

export default Currency
