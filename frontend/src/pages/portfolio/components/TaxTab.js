import React from 'react'
import { taxesOwed } from 'pages/calculators/taxLiability/taxCalcs'
import { Box } from '@mui/system'
import Scorecard from 'components/Scorecard'

const TaxTab = (props) => {

    const income = props.totalRealizedGain
    const province = 'alberta'



    return (
        <Box sx={{color: '#fff'}}>
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', alignContent: 'start', gap: '1rem'}}>
                    <Scorecard
                        title='Net Proceeds'
                        value={props.totalRealizedGain}
                        numberFormat={{
                            prefix: '$',
                            thousandSeparator: true,
                            decimalScale: 0
                        }}
                    />
                    <Scorecard
                        title='Federal Taxes'
                        value={taxesOwed(income, province).provincial}
                        numberFormat={{
                            prefix: '$',
                            thousandSeparator: true,
                            decimalScale: 0
                        }}
                    />
                    <Scorecard
                        title='Provincial Taxes'
                        value={taxesOwed(income, province).federal}
                        numberFormat={{
                            prefix: '$',
                            thousandSeparator: true,
                            decimalScale: 0
                        }}
                    />
                    <Scorecard
                        title='CPP'
                        value={taxesOwed(income, province).cpp}
                        numberFormat={{
                            prefix: '$',
                            thousandSeparator: true,
                            decimalScale: 0
                        }}
                    />
                    <Scorecard
                        title='Total Taxes Owed'
                        value={taxesOwed(income, province).total}
                        numberFormat={{
                            prefix: '$',
                            thousandSeparator: true,
                            decimalScale: 0
                        }}
                    />
                    <Scorecard
                        title='Income After Tax'
                        value={income - taxesOwed(income, province).total}
                        numberFormat={{
                            prefix: '$',
                            thousandSeparator: true,
                            decimalScale: 0
                        }}
                    />
                </Box>
        </Box>
    )
}

export default TaxTab
