import DefaultLayout from 'layouts/DefaultLayout'
import PageTitle from 'layouts/components/PageTitle'
import StyledBox from 'layouts/components/StyledBox'
import { Box } from '@mui/system'
import UserAvatar from './components/UserAvatar'
import { Chip, Typography } from '@mui/material'
import AccountPageWrapper from './components/AccountPageWrapper'
import EditUserDetails from './components/EditUserDetails'
import EditUser from './components/EditUser'


const Account = () => {

    return (
        <>     
        <DefaultLayout>
            <Box sx={{display: 'grid', gap: '1rem'}}>
                <PageTitle>Account</PageTitle>
                <AccountPageWrapper>
                    <StyledBox sx={leftColumn}>
                        <Chip label='Member' size='small' color='info' sx={{justifySelf: 'end', fontWeight: 700, borderRadius: '8px', fontSize: '.75rem', textTransform: 'uppercase'}}/>
                        <UserAvatar />
                        <Typography variant='caption' sx={{fontSize: '.675rem', textAlign: 'center', color: 'rgb(145, 158, 171)'}}>
                            Allowed *.jpeg, *.jpg, *.png, *.gif 
                            <br /> max size of 3.1 MB
                        </Typography>
                    </StyledBox>
                    <StyledBox sx={rightColumn}>
                        <EditUserDetails />
                    </StyledBox>
                </AccountPageWrapper>
            </Box>
        </DefaultLayout>
        </>
    )
}

export default Account


//STYLES

const leftColumn = {
    '@media (min-width:1048px)': {
        gridColumn: '1 / span 2'
    },
    display: 'grid',
    justifyItems: 'center',
    gap: '1rem'

}

const rightColumn = {
    '@media (min-width:1048px)': {
        gridColumn: '3 / span 4'
    },
}