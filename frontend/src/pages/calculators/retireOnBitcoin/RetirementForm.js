import RetirementGoals from './RetirementGoals'
import NowUntilRetirement from './NowUntilRetirement'
import DuringRetirement from './DuringRetirement'
import { Box } from '@mui/system'
import { Button } from '@mui/material'

const RetirementForm = (props) => {


    const formValues = {
        currentYear: props.state.currentYear,
        currentAge: props.state.currentAge,
        retirementAge: props.state.retirementAge,
        ageOfDeath: props.state.ageOfDeath,
        currentBitcoinHoldings: props.state.currentBitcoinHoldings,
        bitcoinGrowthRateUntilRetirement: props.state.bitcoinGrowthRateUntilRetirement,
        bitcoinYearlyGrowthRate: props.state.bitcoinYearlyGrowthRate,
        bitcoinPriceAtRetirement: props.state.bitcoinPriceAtRetirement,
        inflationUntilRetirement: props.state.inflationUntilRetirement,
        inflationAfterRetirement: props.state.inflationAfterRetirement,
        requiredYearlyIncome: props.state.requiredYearlyIncome,
        calculationMethod: props.state.calculationMethod,
    }

    const previousValues = {
        currentYear: props.state.previousState.currentYear,
        currentAge: props.state.previousState.currentAge,
        retirementAge: props.state.previousState.retirementAge,
        ageOfDeath: props.state.previousState.ageOfDeath,
        currentBitcoinHoldings: props.state.previousState.currentBitcoinHoldings,
        bitcoinGrowthRateUntilRetirement: props.state.previousState.bitcoinGrowthRateUntilRetirement,
        bitcoinYearlyGrowthRate: props.state.previousState.bitcoinYearlyGrowthRate,
        bitcoinPriceAtRetirement: props.state.previousState.bitcoinPriceAtRetirement,
        inflationUntilRetirement: props.state.previousState.inflationUntilRetirement,
        inflationAfterRetirement: props.state.previousState.inflationAfterRetirement,
        requiredYearlyIncome: props.state.previousState.requiredYearlyIncome,
        calculationMethod: props.state.previousState.calculationMethod,
    }

    const compare = () => {
        if(previousValues.currentYear === undefined){
            return true
        }
        return JSON.stringify(formValues) === JSON.stringify(previousValues)
    }

    return (
        <Box sx={{display: 'grid', gap: '2rem', padding: '1rem'}}>
            <RetirementGoals {...props} />
            <NowUntilRetirement {...props} />
            <DuringRetirement {...props} />
            <Box sx={{display: 'grid', gap: '1rem'}}>
                <Button variant='contained' size='small' disabled={compare()} onClick={props.updateCalculation}>Update</Button>
                <Button variant='outlined' size='small' disabled={compare()} onClick={() => props.dispatch(props.cancelChanges())}>Cancel</Button>
            </Box>
        </Box>
    )
}

export default RetirementForm