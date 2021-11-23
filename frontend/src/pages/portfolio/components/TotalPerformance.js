import { useContext } from 'react'
import Scorecard from 'components/Scorecard'
import GlobalContext from 'state/GlobalContext'


const TotalPerformance = (props) => {

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
                title={`Total Return (${currency})`}
                value={props.totalGain || ''}
                numberFormat={{
                    prefix: '$',
                    thousandSeparator: true,
                    decimalScale: 2,
                    fixedDecimalScale: 2 
                }}
            />
            <Scorecard
                title={`Total Invested (${currency})`}
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
