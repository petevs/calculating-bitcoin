import React from 'react'
import { Box } from '@mui/system'
import NumberFormat from 'react-number-format'
import Currency from 'components/Currency'
import Bitcoin from 'components/Bitcoin'
import Scorecard from 'components/Scorecard'
import { Repeat } from '@mui/icons-material'

const RetirementSummary = ({state}) => {

    return (
        <Box sx={boxStyle}>
            <Scorecard
                title='Portfolio Value Required at Retirement'
                value={state.results.portfolioValueAtRetirement}
                numberFormat={{
                    thousandSeparator: true,
                    decimalScale: 0,
                    prefix: '$'
                }}
            />
            <Scorecard
                title='Estimated Bitcoin Price at Retirement'
                value={state.calculationMethod === 'priceTarget' ? state.results.bitcoinPriceAtRetirement : state.results.calculatedBitcoinPriceAtRetirement}
                numberFormat={{
                    thousandSeparator: true,
                    decimalScale: 0,
                    prefix: '$'
                }}
            />
            <Scorecard
                title='Bitcoin Needed to Retire'
                value={state.calculationMethod === 'priceTarget' ? state.results.bitcoinRequiredUsingPriceTarget : state.results.bitcoinRequiredUsingGrowthRate}
                numberFormat={{
                    decimalScale: 8,
                    fixedDecimalScale: 8,
                }}
            />
            <Scorecard
                title='Current Price of Bitcoin'
                value={state.currentPriceOfBitcoin}
                numberFormat={{
                    thousandSeparator: true,
                    decimalScale: 0,
                    prefix: '$'
                }}
            />
            <Scorecard
                title='Current Investment Required'
                value={state.results.currentInvestmentRequired}
                numberFormat={{
                    thousandSeparator: true,
                    decimalScale: 0,
                    prefix: '$'
                }}
            />
        </Box>
    )
}

export default RetirementSummary


const boxStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))',
    gap: '1rem',

    '@media (max-width: 1024px)': {
        gridAutoFlow: 'row',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
    }
    // backgroundColor: '#212B36',
    // boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) 0px 16px 32px -4px',
    // borderRadius: '1rem',
    // padding: '1rem',
    // color: '#fff',
}