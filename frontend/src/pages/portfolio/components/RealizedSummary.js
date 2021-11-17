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
                value={props.totalProceeds || ''}
                numberFormat={{
                    prefix: '$',
                    thousandSeparator: true,
                    decimalScale: 2,
                    fixedDecimalScale: 2 
                }}
            />
            <Scorecard
                title='Weighted Cost'
                value={props.totalRealizedCost || ''}
                numberFormat={{
                    prefix: '$',
                    thousandSeparator: true,
                    decimalScale: 2,
                    fixedDecimalScale: 2 
                }}
            />
            <Scorecard
                title='Net Sale Proceeds'
                value={props.totalRealizedGain || ''}
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
