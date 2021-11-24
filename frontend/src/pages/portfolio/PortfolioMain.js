import Page from 'components/Page'
import { useContext } from 'react'
import GlobalContext from 'state/GlobalContext'
import { Box, Button } from '@mui/material/';
import PageTitle from 'layouts/components/PageTitle';
import { Link } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle'

const PortfolioMain = () => {

    const { state } = useContext(GlobalContext)

    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem'}}>
            <Box sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '0 0 1rem 0'}}>
                <PageTitle>My Portfolios</PageTitle>
            </Box>
            {
                state.portfolio.portfolioList().map(item => 
                    <Box>
                        <Button
                            component={Link}
                            sx={{color: '#fff'}}
                            to={`/portfolio/${item.id}`}
                            startIcon={<CircleIcon sx={{height: '6px'}}/>}
                        >
                            {item.portfolioName}
                        </Button>
                    </Box>
                )
            }
        </Page>
    )
}

export default PortfolioMain
