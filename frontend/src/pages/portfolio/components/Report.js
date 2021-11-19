import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import ReportRow from './ReportRow'

const Report = (props) => {

    return (
        <Box sx={wrapper}>
                <Typography sx={{gridColumn: '1 / span 4', textTransform: 'uppercase'}} variant='body-1'>Unrealized Performance</Typography>
                    <ReportRow
                        title='Current BTC Price'
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
                <Typography sx={{gridColumn: '1 / span 4', textTransform: 'uppercase', paddingTop: '2rem'}} variant='body-1'>Realized Performance</Typography>
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
                        value={(props.summary.totalRealizedGain + props.summary.unrealizedGain) / props.summary.totalInvested * 100}
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
    gap: '.25rem',
    // backgroundColor: '#212B36',
    // boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) 0px 16px 32px -4px',
    // borderRadius: '1rem',
    // padding: '2rem',
}


