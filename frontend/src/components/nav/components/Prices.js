import { useContext } from 'react'
import GlobalContext from 'state/GlobalContext'
import { useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import CurrentPriceBox from './CurrentPriceBox'
import TickerBox from './TickerBox'

const Prices = () => {


    const mobile = useMediaQuery('(max-width: 1024px)')
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
        <Box sx={wrapper}>
            {
                !mobile &&
                <>
                    <CurrentPriceBox 
                        price={price.cad} 
                        priceChange={priceChange.cad} 
                        percentChange={percentChange.cad}
                    />
                    <TickerBox
                        title='24H High'
                        value={high_24h.cad}
                        numberFormat={{
                            thousandSeparator: true,
                            prefix: '$'
                        }}
                    />
                    <TickerBox
                        title='24H Low'
                        value={low_24h.cad}
                        numberFormat={{
                            thousandSeparator: true,
                            prefix: '$'
                        }}
                    />
                    <TickerBox
                        title='ATH'
                        value={ath.cad}
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