import React from 'react'
import Page from 'components/Page'
import { Box } from '@mui/system'
import PageTitle from 'layouts/components/PageTitle'
import ListCard from 'components/ListCard'

const CalculatorsMain = () => {

    const calculators = [
                {
                    text: 'Retire on Bitcoin',
                    description: 'See how much bitcoin you need to meet your retirement goals',
                    to: '/calculators/retire-on-bitcoin'
                },
                {
                    text: 'Tax Liability',
                    description: 'COMING SOON: Estimate how much taxes you would owe for a portfolio or individual trade',
                    to: '/calculators/tax-liability'
                },
                {
                    text: 'Trade Preview',
                    description: 'COMING SOON: Preview the implications of a potential trade',
                    to: '/calculators/trade-preview'
                },
                {
                    text: 'Speculative Attack',
                    description: 'COMING SOON: Run the numbers on borrowing to buy bitcoin',
                    to: '/calculators/speculative-attack'
                },
    ]



    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem'}}>
            <Box sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '0 0 1rem 0'}}>
                <PageTitle>Calculators</PageTitle>
            </Box>
            <Box sx={style}>
                {
                    calculators.map(calculator => 
                        <ListCard 
                            title={calculator.text}
                            description={calculator.description} 
                            to={calculator.to} 
                        />    
                    )
                }
            </Box>
        </Page>
    )
}

export default CalculatorsMain

const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(275px,1fr))',
    gap: '1rem',
    '@media (max-width: 1024px)': {
        gridAutoFlow: 'row',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
    }
}