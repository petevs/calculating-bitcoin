import Page from 'components/Page'
import TaxRow from './TaxRow'
import { taxesOwed } from './taxCalcs'
import { useState } from 'react'
import { TextField, MenuItem } from '@mui/material'
import NumberFormat from 'react-number-format'
import { Box } from '@mui/system'
import PageTitle from 'layouts/components/PageTitle';

const TaxLiability = () => {

    const [income, setIncome] = useState(0)
    const [province, setProvince] = useState('alberta')


    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem'}}>
            <Box sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '0 0 1rem 0'}}>
                <PageTitle>Tax Liability</PageTitle>
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
                <Box sx={{display: 'grid', gridTemplatColumns: '1fr', gap: '1rem', padding: '2rem'}}>
                    <TextField
                        select
                        label='Province'
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                    >
                        <MenuItem value='alberta'>Alberta</MenuItem>
                        <MenuItem value='britishColumbia'>British Columbia</MenuItem>
                    </TextField>
                    <NumberFormat
                        customInput={TextField}
                        label='Income'
                        thousandSeparator={true}
                        prefix='$'
                        onValueChange={(e) => setIncome(e.floatValue)}
                    />
                </Box>
                <NumberFormat
                    displayType='text'
                    value={taxesOwed(income, province).total}
                    thousandSeparator={true}
                    decimalScale={0}
                    prefix='$'
                    style={{
                        fontSize: '2rem',
                        color: '#fff'
                    }}
                />
            </Box>
        </Page>
    )
}

export default TaxLiability
