import React from 'react'
import DefaultLayout from 'layouts/DefaultLayout'
import PageTitle from 'layouts/components/PageTitle'
import StyledBox from 'layouts/components/StyledBox'
import { Box } from '@mui/system'
import UserAvatar from './components/UserAvatar'
import { Typography } from '@mui/material'

const Account = () => {


    return (
        <>     
        <DefaultLayout>
                <PageTitle>Account</PageTitle>
                <Box sx={{
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(4, 1fr)', 
                    gap: '1rem',
                    '@media (max-width:768px)': {
                        gridTemplateColumns: '1fr'
                    }
                    }}
                >
                    <StyledBox 
                        sx={{
                            '@media (min-width:768px)': {
                                gridColumn: '1 / span 1'
                            }
                        }}
                    >
                        <UserAvatar />
                        <Typography variant='caption' sx={{fontSize: '.675rem', textAlign: 'center'}}>
                            Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
                        </Typography>
                    </StyledBox>
                    <StyledBox 
                        sx={{
                            '@media (min-width:768px)': {
                                gridColumn: '2 / span 3'
                            }
                        }}
                    >
                        Hell
                    </StyledBox>
                </Box>
        </DefaultLayout>
        </>
    )
}

export default Account
