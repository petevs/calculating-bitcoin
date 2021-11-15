import React from 'react'
import Scorecard from 'components/Scorecard'

const RealizedSummary = (props) => {

    
    return (
        <>
            <Scorecard
                title='Bitcoin Sold'
                value={props.totalBitcoinSold || ''}
                numberFormat={{
                    decimalScale: 8,
                    fixedDecimalScale: 8 
                }}
            />
            <Scorecard
                title='Sale Proceeds'
                value={props.realizedProceeds || ''}
                numberFormat={{
                    prefix: '$',
                    thousandSeparator: true,
                    decimalScale: 2,
                    fixedDecimalScale: 2 
                }}
            />
            <Scorecard
                title='Realized Cost'
                value={props.realizedCost || ''}
                numberFormat={{
                    prefix: '$',
                    thousandSeparator: true,
                    decimalScale: 2,
                    fixedDecimalScale: 2 
                }}
            />
            <Scorecard
                title='Net Gain'
                value={props.realizedGain || ''}
                numberFormat={{
                    prefix: '$',
                    thousandSeparator: true,
                    decimalScale: 2,
                    fixedDecimalScale: 2 
                }}
            />
        </>
    )
}

export default RealizedSummary
