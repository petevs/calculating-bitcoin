import React from 'react'
import { Box } from '@mui/system'
import PageTitle from 'layouts/components/PageTitle'

const PageHeader = (props) => {
    return (
        <Box sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '0 0 1rem 0'}}>
            <PageTitle>{props.title}</PageTitle>
        </Box>
    )
}

export default PageHeader
