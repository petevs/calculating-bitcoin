import React from 'react'
import Page from 'components/Page'
import { Box } from '@mui/system'
import PageTitle from 'layouts/components/PageTitle'
import NumberFormat from 'react-number-format'
import { TextField } from '@mui/material'

const CurrencyConverter = () => {
    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem', color: '#fff'}}>
            <Box sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '0 0 1rem 0'}}>
                <PageTitle>Currency Converter</PageTitle>
            </Box>
            <NumberFormat
            />
        </Page>
    )
}

export default CurrencyConverter
