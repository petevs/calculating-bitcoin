import React from 'react'
import Page from 'components/Page'
import { Box } from '@mui/system'
import PageTitle from 'layouts/components/PageTitle'

const TradePreview = () => {
    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem', color: '#fff'}}>
        <Box sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '0 0 1rem 0'}}>
            <PageTitle>Trade Preview</PageTitle>
        </Box>
            
        </Page>
    )
}

export default TradePreview
