import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import ReportRow from './ReportRow'

const Report = (props) => {

    console.log(props)
    return (
        <Box sx={wrapper}>
                <Typography sx={{gridColumn: '1 / span 4'}} variant='h6'>Current Holdings</Typography>
                    <ReportRow
                        title='Current Price'
                        value={props.summary.historicalPrice}
                    />
                    <ReportRow 
                        title='Bitcoin Holdings' 
                        value={props.summary.runningBitcoinBalance} 
                        numberFormat={{
                            decimalScale: 8, 
                            fixedDecimalScale: 8, 
                            thousandSeparator: false, 
                            prefix: 'x '
                            }}
                        className='last'
                    />
                    <ReportRow
                        title='Market Value'
                        value={props.summary.currentValue}
                    />
                    <ReportRow
                        title='Less: Weighted Cost'
                        value={props.summary.totalInvested}
                        numberFormat={{
                            prefix: '($',
                            suffix: ')'
                        }}
                        className='last'
                    />
                    <ReportRow
                        title='Net Unrealized Gain'
                        value={props.summary.unrealizedGain}
                        className='subTotal'
                    />
                <Typography sx={{gridColumn: '1 / span 4', paddingTop: '2rem'}} variant='h6'>Sale Proceeds</Typography>
                    <ReportRow 
                        title='Bitcoin Sold' 
                        value={props.summary.totalBitcoinSold} 
                        numberFormat={{
                            decimalScale: 8, 
                            fixedDecimalScale: 8, 
                            thousandSeparator: false, 
                            prefix: ''
                            }} 
                    />
                    <ReportRow 
                        title='Sale Proceeds'
                        value={props.summary.totalProceeds}
                    />
                    <ReportRow 
                        title='Less: Weighted Cost' 
                        value={props.summary.totalRealizedCost}
                        numberFormat={{
                            prefix: '($',
                            suffix: ')'
                        }}
                        className='last'
                    />
                    <ReportRow
                        title='Net Proceeds'
                        value={props.summary.totalRealizedGain}
                        className='subTotal'
                    />
                    <ReportRow
                        title='Total Return'
                        value={props.summary.totalRealizedGain + props.summary.unrealizedGain}
                        className='subTotal'
                    />
                    <ReportRow
                        title='Market Weighted Return'
                        value={(((props.summary.totalRealizedGain + props.summary.unrealizedGain) / props.summary.totalInvested) - 1) * 100}
                        className='subTotal'
                        numberFormat={{
                            prefix: '',
                            suffix: '%'
                        }}
                    />
        </Box>
    )
}

export default Report

const wrapper = {
    color: '#fff',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '.25rem'
}


