import React from 'react'
import Page from 'components/Page'

import { useParams } from 'react-router'
import useGetPortfolio from 'hooks/useGetPortfolio'
import PortfolioHeader from './components/PortfolioHeader'
import Loading from 'components/Loading'


const Portfolio = () => {

    let { id } = useParams()

    const details = useGetPortfolio(id)

    if(!details){
        return(<Loading />)
    }

    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start'}}>
                <PortfolioHeader 
                    title={details.portfolioName || ``} 
                    descripton={details.portfolioDescription}
                    id={id} 
                />
        </Page>
    )
}

export default Portfolio