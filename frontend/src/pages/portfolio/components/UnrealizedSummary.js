import { useContext } from 'react'
import Scorecard from 'components/Scorecard'
import GlobalContext from 'state/GlobalContext'

const UnrealizedSummary = (props) => {

    const { state } = useContext(GlobalContext)
    const { currency } = state.user

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
                    title={`Portfolio Value (${currency})`}
                    value={props.currentValue || ''}
                    numberFormat={{
                        thousandSeparator: true,
                        prefix: '$',
                        decimalScale: 2,
                    }}
                />
                <Scorecard
                    title={`Adjusted Cost (${currency})`}
                    value={props.totalInvested || ''}
                    numberFormat={{
                        thousandSeparator: true,
                        prefix: '$',
                        decimalScale: 2,
                    }}
                />
                <Scorecard
                    title={`Unrealized Return (${currency})`}
                    value={props.unrealizedGain || ''}
                    numberFormat={{
                        thousandSeparator: true,
                        prefix: '$',
                        decimalScale: 2,
                    }}
                />
                <Scorecard
                    title={`Average Bitcoin Cost (${currency})`}
                    value={props.averageCost || ''}
                    numberFormat={{
                        thousandSeparator: true,
                        prefix: '$',
                        decimalScale: 2,
                    }}
                />
                {/* <Scorecard
                    title='Unrealized ROI'
                    value={props.unrealizedROI || ''}
                    numberFormat={{
                        thousandSeparator: true,
                        suffix: '%',
                        decimalScale: 2,
                    }}
                /> */}
        </>
    )
}

export default UnrealizedSummary
