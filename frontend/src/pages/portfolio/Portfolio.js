import React from 'react'
import Page from 'components/Page'

import { useParams } from 'react-router'
import useGetPortfolio from 'hooks/useGetPortfolio'
import PortfolioHeader from './components/PortfolioHeader'
import Loading from 'components/Loading'
import TransactionForm from './components/TransactionForm'
import ModalButton from './components/ModalButton'
import AddIcon from '@mui/icons-material/Add';


const Portfolio = () => {

    let { id } = useParams()

    const details = useGetPortfolio(id)

    if(!details){
        return(<Loading />)
    }

    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start'}}>
                <PortfolioHeader 
                    {...details} id={id}
                />
                <ModalButton
                    sx={{justifySelf: 'start'}}
                    icon={<AddIcon />}
                    content={<TransactionForm portfolioId={id} />}
                    text='Add Transaction'
                />
        </Page>
    )
}

export default Portfolio