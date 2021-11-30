import { Box } from '@mui/system'
import NumberFormat from 'react-number-format'

const CurrentPriceBox = (props) => {

    return (
        <Box sx={boxStyle}>
            <NumberFormat
                value={props.price}
                displayType='text'
                thousandSeparator={true}
                prefix='$'
            />
            <NumberFormat
                style={{fontSize: '.675rem', color: props.priceChange < 0 ? 'red' : 'green', paddingLeft: '.5rem'}}
                value={props.priceChange}
                displayType='text'
                prefix={props.priceChange > 0 ? '+ ' : ''}
                thousandSeparator={true}
                decimalScale={0}
            />
            <NumberFormat
                style={{fontSize: '.675rem', color: props.percentChange < 0 ? 'red' : 'green'}}
                value={props.percentChange}
                displayType='text'
                decimalScale={2}
                suffix='%'
            />
        </Box>
    )
}

export default CurrentPriceBox


const boxStyle = {
    display: 'grid',
    alignItems: 'baseline',
    gap: '.15rem',
    gridTemplateColumns: 'auto auto auto',
    fontSize: '1.4rem',

}