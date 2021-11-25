import NumberFormat from 'react-number-format'

const Bitcoin = (props) => {
    return (
        <NumberFormat
            displayType='text' 
            suffix=' BTC'
            decimalScale={8}
            fixedDecimalScale={8}
            {...props} 
        />
    )
}

export default Bitcoin
