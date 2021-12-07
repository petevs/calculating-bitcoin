import React from 'react'
import { Box } from '@mui/system'
import Page from 'components/Page'
import PageTitle from 'layouts/components/PageTitle';

const SpeculativeAttack = () => {
    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem'}}>
            <Box sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '0 0 1rem 0'}}>
                <PageTitle>Tax Liability</PageTitle>
            </Box>
        </Page>
    )
}

export default SpeculativeAttack
