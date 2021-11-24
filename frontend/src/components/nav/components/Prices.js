import { useContext } from 'react'
import GlobalContext from 'state/GlobalContext'
import { useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import CurrentPriceBox from './CurrentPriceBox'
import TickerBox from './TickerBox'

const Prices = () => {


    const mobile = useMediaQuery('(max-width: 1024px)')
    const { state } = useContext(GlobalContext)

    if(!state.marketData.marketData){
        return (
            <>
            </>
    )}
    
    const {         
        current_price: price,
        price_change_24h_in_currency: priceChange,
        price_change_percentage_24h_in_currency: percentChange,
        ath,
        high_24h,
        low_24h 
    } = state.marketData.marketData


    const { currency } = state.user

    return (
        <Box sx={wrapper}>
            {
                !mobile &&
                <>
                    <CurrentPriceBox 
                        price={price[currency]} 
                        priceChange={priceChange[currency]} 
                        percentChange={percentChange[currency]}
                    />
                    <TickerBox
                        title={`24H High (${currency})`}
                        value={high_24h[currency]}
                        numberFormat={{
                            thousandSeparator: true,
                            prefix: '$'
                        }}
                    />
                    <TickerBox
                        title={`24H Low (${currency})`}
                        value={low_24h[currency]}
                        numberFormat={{
                            thousandSeparator: true,
                            prefix: '$'
                        }}
                    />
                    <TickerBox
                        title={`ATH (${currency})`}
                        value={ath[currency]}
                        numberFormat={{
                            thousandSeparator: true,
                            prefix: '$'
                        }}
                    />
                </>
            }
        </Box>
    )
}

export default Prices


const wrapper = {
    display: 'grid',
    gridAutoFlow: 'column',
    justifySelf: 'start',
    alignContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    padding: '0 2rem'
}