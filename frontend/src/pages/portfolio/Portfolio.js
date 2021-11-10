import React from 'react'
import Page from 'components/Page'

import { useParams } from 'react-router'
import useGetPortfolio from 'hooks/useGetPortfolio'
import PageTitle from 'layouts/components/PageTitle'


const Portfolio = () => {

    let { id } = useParams()

    const details = useGetPortfolio(id)

    console.log(details)

    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start'}}>
                <PageTitle>{details.portfolioName}</PageTitle>
        </Page>
    )
}

export default Portfolio