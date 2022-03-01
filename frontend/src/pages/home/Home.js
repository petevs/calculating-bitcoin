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

    const headline = {
        color: '#fff',
        fontSize: '3rem',
        fontWeight: 700,
        letterSpacing: '-1px',
        textAlign: 'center',
        '@media (max-width: 768px)': {
            fontSize: '3rem',
            lineHeight: '3rem'
        }
    }

    const buttonBox = {
        display: 'grid', 
        gridAutoFlow: 'column', 
        justifyContent: 'center', 
        padding: '2rem',
        gap: '1rem',
        borderBottom: 'thin solid rgba(255, 255, 255, 0.12)',
        '@media (max-width: 768px)': {
            gridAutoFlow: 'row',
            justifyContent: 'stretch',
            padding: '2rem'
        }
}

    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem'}}>
            <Box sx={{padding: '4rem 0 0rem 0'}}>
                <Typography sx={headline}>Make Mock Bitcoin Portfolios</Typography>
            </Box>
            <Box>
                <Typography variant='h6' sx={{color: '#fff', textAlign: 'center'}}>
                    Quickly create Bitcoin portfolios to see how different strategies performed over time.
                </Typography>
                <Box sx={buttonBox}>
                    <Button 
                        size='medium' 
                        // startIcon={<ArrowRightAltIcon />}
                        component={Link}
                        to='/portfolio'
                        variant='outlined'
                    >
                        My Portfolios
                    </Button>
                    <Button 
                        size='medium' 
                        // endIcon={<ArrowRightAltIcon />}
                        component={Link}
                        to='/portfolios/public'
                        variant='outlined'
                    >
                        Public Portfolios
                    </Button>
                    <Button 
                        // startIcon={<AddIcon />}
                        onClick={handleOpen}
                        variant='outlined'
                    >
                        Add Portfolio
                    </Button>
                </Box>
            </Box>
        </Page>
    )
}

export default Home
