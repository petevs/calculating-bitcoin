import Page from "components/Page"
import { Box } from "@mui/system"
import PageTitle from "layouts/components/PageTitle"
import { Button, Typography } from "@mui/material"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AddIcon from '@mui/icons-material/Add';
import useAuth from 'hooks/useAuth';
import { Redirect } from 'react-router-dom'
import useModal from 'hooks/useModal'
import PortfolioForm from 'components/PortfolioForm'
import { Link } from 'react-router-dom'

const Home = () => {

    const { handleModalOpen } = useModal()
    const { loggedIn } = useAuth()

    const handleOpen = () => {
        if(loggedIn){
            handleModalOpen(
                <PortfolioForm title='Add Portfolio' />
            )
        } else {
            <Redirect to={"/login"} />
        }

    }

    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem'}}>
            <Box sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '0 0 1rem 0'}}>
                <PageTitle>Welcome</PageTitle>
            </Box>
            <Box>
                <Typography variant='body1' sx={{color: '#fff'}}>
                    We're still under development but feel free to play around with the calculators on here.
                </Typography>
                <Box sx={{display: 'grid', gridAutoFlow: 'row', justifyItems: 'start', paddingTop: '1rem', gap: '1rem'}}>
                    <Button 
                        size='medium' 
                        startIcon={<ArrowRightAltIcon />}
                        component={Link}
                        to='/portfolio'
                    >
                        My Portfolios
                    </Button>
                    <Button 
                        size='medium' 
                        startIcon={<ArrowRightAltIcon />}
                        component={Link}
                        to='/portfolios/public'
                    >
                        Public Portfolios
                    </Button>
                    <Button 
                        startIcon={<AddIcon />}
                        onClick={handleOpen}
                    >
                        Add Portfolio
                    </Button>
                </Box>
            </Box>
        </Page>
    )
}

export default Home
