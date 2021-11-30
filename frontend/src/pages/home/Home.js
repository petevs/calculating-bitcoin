import Page from "components/Page"
import { Box } from "@mui/system"
import PageTitle from "layouts/components/PageTitle"
import { Typography } from "@mui/material"

const Home = () => {
    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem'}}>
            <Box sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '0 0 1rem 0'}}>
                <PageTitle>Welcome</PageTitle>
            </Box>
            <Box>
                <Typography variant='body1' sx={{color: '#fff'}}>
                    We're still under development but feel free to play around with the calculators on here.

                </Typography>
            </Box>
        </Page>
    )
}

export default Home
