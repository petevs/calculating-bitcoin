import { useContext } from 'react'
import { Box } from '@mui/system'
import GlobalContext from 'state/GlobalContext'
import NumberFormat from 'react-number-format'

const CurrentPriceBox = () => {

    const { state } = useContext(GlobalContext)
    const {         
        current_price: price,
        price_change_24h_in_currency: priceChange,
        price_change_percentage_24h_in_currency: percentChange,
        ath,
        high_24h,
        low_24h 
    } = state.marketData.marketData

    return (
        <Box sx={boxStyle}>
            <NumberFormat
                value={price.cad}
                displayType='text'
                thousandSeparator={true}
                prefix='$'
            />
            <NumberFormat
                style={{fontSize: '.675rem', color: priceChange.cad < 0 ? 'red' : 'green'}}
                value={priceChange.cad}
                displayType='text'
                decimalScale={2}
            />
            <NumberFormat
                style={{fontSize: '.675rem', color: percentChange.cad < 0 ? 'red' : 'green'}}
                value={percentChange.cad}
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
    justifyContent: 'start',
    alignItems: 'baseline',
    gap: '.15rem',
    gridTemplateColumns: 'auto auto auto',
    fontSize: '1.4rem',

}