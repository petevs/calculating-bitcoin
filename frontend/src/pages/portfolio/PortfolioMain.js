import Page from 'components/Page'
import { useContext } from 'react'
import GlobalContext from 'state/GlobalContext'
import { Box} from '@mui/material/';
import PageTitle from 'layouts/components/PageTitle';
import PortfolioCard from './components/PortfolioCard';

const PortfolioMain = () => {

    const { state } = useContext(GlobalContext)

   return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem'}}>
            <Box sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '0 0 1rem 0'}}>
                <PageTitle>My Portfolios</PageTitle>
            </Box>
            <Box sx={style}>
                {
                    state.portfolio.portfolioList().filter(item => item.visibility !== 'public').map(item => 
                        <PortfolioCard key={item.id} {...item} />
                    )
                }
            </Box>
        </Page>
    )
}

export default PortfolioMain

const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(275px,1fr))',
    gap: '1rem',
    '@media (max-width: 1024px)': {
        gridAutoFlow: 'row',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
    }
}