import DefaultLayout from 'layouts/DefaultLayout'
import PageTitle from 'layouts/components/PageTitle'
import StyledBox from 'layouts/components/StyledBox'
import { Box } from '@mui/system'
import UserAvatar from './components/UserAvatar'
import { Typography } from '@mui/material'
import useUserDetails from 'hooks/useUserDetails'


const Account = () => {

    const { email } = useUserDetails()


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
                            },
                            display: 'grid',
                            justifyItems: 'center',
                            gap: '1rem'

                        }}
                    >
                        <UserAvatar />
                        <Typography variant='caption' sx={{fontSize: '.675rem', textAlign: 'center', color: 'rgb(145, 158, 171)'}}>
                            Allowed *.jpeg, *.jpg, *.png, *.gif 
                            <br /> max size of 3.1 MB
                        </Typography>
                    </StyledBox>
                    <StyledBox 
                        sx={{
                            '@media (min-width:768px)': {
                                gridColumn: '2 / span 3'
                            }
                        }}
                    >
                        {email}
                    </StyledBox>
                </Box>
        </DefaultLayout>
        </>
    )
}

export default Account
