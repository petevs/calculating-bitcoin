import Scorecard from 'components/Scorecard'
import { Box } from '@mui/system'
import SummarySelect from './SummarySelect'

const Summary = (props) => {

    console.log(props)
    return (
        <Box>
            <SummarySelect />
            <Box sx={wrapper}>
                
                <Scorecard
                    title='Bitcoin'
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
                    title='Average Cost'
                    value={props.averageCost || ''}
                    numberFormat={{
                        thousandSeparator: true,
                        prefix: '$',
                        decimalScale: 2,
                    }}
                />
            </Box>
        </Box>
    )
}

export default Summary

const wrapper = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))',
    gap: '1rem',

    '@media (max-width: 1024px)': {
        gridAutoFlow: 'row',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
    }
}