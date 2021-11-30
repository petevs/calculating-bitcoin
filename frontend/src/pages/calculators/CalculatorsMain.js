import React from 'react'
import Page from 'components/Page'
import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import PageTitle from 'layouts/components/PageTitle'

const CalculatorsMain = () => {
    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem'}}>
            <Box sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '0 0 1rem 0'}}>
                <PageTitle>Calculators</PageTitle>
            </Box>
        </Page>
    )
}

export default CalculatorsMain
