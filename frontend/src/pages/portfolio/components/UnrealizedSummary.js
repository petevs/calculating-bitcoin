import React from 'react'
import Scorecard from 'components/Scorecard'

const UnrealizedSummary = (props) => {
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
                    title='Total Invested'
                    value={props.totalInvested || ''}
                    numberFormat={{
                        thousandSeparator: true,
                        prefix: '$',
                        decimalScale: 2,
                    }}
                />
                <Scorecard
                    title='Unrealized Gain'
                    value={props.unrealizedGain || ''}
                    numberFormat={{
                        thousandSeparator: true,
                        prefix: '$',
                        decimalScale: 2,
                    }}
                />
                <Scorecard
                    title='Average Bitcoin Cost'
                    value={props.averageCost || ''}
                    numberFormat={{
                        thousandSeparator: true,
                        prefix: '$',
                        decimalScale: 2,
                    }}
                />
                <Scorecard
                    title='Unrealized ROI'
                    value={props.unrealizedROI || ''}
                    numberFormat={{
                        thousandSeparator: true,
                        suffix: '%',
                        decimalScale: 2,
                    }}
                />
        </>
    )
}

export default UnrealizedSummary
