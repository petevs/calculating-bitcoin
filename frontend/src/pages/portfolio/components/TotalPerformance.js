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
                title='Total Return'
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
        </>
    )
}

export default TotalPerformance
