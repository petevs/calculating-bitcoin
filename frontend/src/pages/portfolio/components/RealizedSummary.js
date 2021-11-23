import { useContext } from 'react'
import Scorecard from 'components/Scorecard'
import GlobalContext from 'state/GlobalContext'


const RealizedSummary = (props) => {

    const { state } = useContext(GlobalContext)
    const { currency } = state.user

    
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
                title={`Sale Proceeds (${currency})`}
                value={props.totalProceeds || ''}
                numberFormat={{
                    prefix: '$',
                    thousandSeparator: true,
                    decimalScale: 2,
                    fixedDecimalScale: 2 
                }}
            />
            <Scorecard
                title={`Weighted Cost (${currency})`}
                value={props.totalRealizedCost || ''}
                numberFormat={{
                    prefix: '$',
                    thousandSeparator: true,
                    decimalScale: 2,
                    fixedDecimalScale: 2 
                }}
            />
            <Scorecard
                title={`Net Sale Proceeds (${currency})`}
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
