import React from 'react'
import Scorecard from 'components/Scorecard'

const TotalPerformance = (props) => {
    return (
        <>
           <Scorecard
                    title='Bitcoin Holdings'
                    value={props.runningBitcoinBalance || ''}
                    numberFormat={{
                        prefix: '',
                        decimalScale: 8,
                        fixedDecimalScale: 8 
                    }}
            />
            <Scorecard
                title='Portfolio Value'
                value={props.currentValue || ''}
                numberFormat={{
                    thousandSeparator: true,
                    prefix: '$',
                    decimalScale: 2,
                }}
            />
            <Scorecard
                title='Net Sale Proceeds'
                value={props.realizedGain || ''}
                numberFormat={{
                    prefix: '$',
                    thousandSeparator: true,
                    decimalScale: 2,
                    fixedDecimalScale: 2 
                }}
            />
            <Scorecard
                title='Total Gain'
                value={props.totalGain || ''}
                numberFormat={{
                    prefix: '$',
                    thousandSeparator: true,
                    decimalScale: 2,
                    fixedDecimalScale: 2 
                }}
            />
            <Scorecard
                title='Total Invested'
                value={props.totalCost || ''}
                numberFormat={{
                    prefix: '$',
                    thousandSeparator: true,
                    decimalScale: 2,
                    fixedDecimalScale: 2 
                }}
            />
            <Scorecard
                title='Net Gain'
                value={props.totalNetGain || ''}
                numberFormat={{
                    prefix: '$',
                    thousandSeparator: true,
                    decimalScale: 2,
                    fixedDecimalScale: 2 
                }}
            />
            <Scorecard
                title='ROI'
                value={props.totalROI || ''}
                numberFormat={{
                    suffix: '%',
                    thousandSeparator: true,
                    decimalScale: 2,
                    fixedDecimalScale: 2 
                }}
            />
        </>
    )
}

export default TotalPerformance
