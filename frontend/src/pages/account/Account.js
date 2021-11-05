import React from 'react'
import DefaultLayout from 'layouts/DefaultLayout'
import PageTitle from 'layouts/components/PageTitle'
import StyledBox from 'layouts/components/StyledBox'
import { Box } from '@mui/system'

const Account = () => {
    return (
        <>
        <DefaultLayout>
                <PageTitle>Account</PageTitle>
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem'}}>
                    <StyledBox sx={{gridColumn: '1 / span 1'}}>Hell</StyledBox>
                    <StyledBox sx={{gridColumn: '2 / span 3'}}>Hell</StyledBox>
                </Box>
        </DefaultLayout>
        </>
    )
}

export default Account
