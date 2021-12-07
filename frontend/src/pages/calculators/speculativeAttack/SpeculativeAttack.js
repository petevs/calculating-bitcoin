import { useState } from 'react'
import { Box } from '@mui/system'
import Page from 'components/Page'
import PageTitle from 'layouts/components/PageTitle';
import CalculatePayment from './components/CalculatePayment';
import CalculateLoanAmount from './components/CalculateLoanAmount';
import { ToggleButtonGroup, ToggleButton } from '@mui/material'

const SpeculativeAttack = () => {

    const [inputs, setInputs] = useState({
        loanAmount: 100000,
        interestRate: 2.5,
        numberOfYears: 5,
        py: 12,
        interestOnly: false,
        friendlyPeriod: function() {
            switch(this.py) {
                case 1:
                    return ' / year'
                case 26:
                    return ' / every other week'
                case 52:
                    return ' / week'
                case 365:
                    return ' / day'
                case 4:
                    return ' / quarter'
                case 2:
                    return ' / twice a year'
                default:
                    return ' / month'
            }
        }
    })

    const [loanInputs, setLoanInputs] = useState({
        paymentAmount: 1000,
        interestRate: 2.5,
        numberOfYears: 5,
        py: 12,
        interestOnly: false,
        friendlyPeriod: function() {
            switch(this.py) {
                case 1:
                    return ' / year'
                case 26:
                    return ' / every other week'
                case 52:
                    return ' / week'
                case 365:
                    return ' / day'
                case 2:
                    return ' / twice a year'
                case 4:
                    return ' / quarter'
                default:
                    return ' / month'
            }
        }
    })

    const [type, setType] = useState('loan')

    const handleChange = () => {
        if(type === 'loan'){
            setType('payment')
            return
        }

        setType('loan')
    }

    // const testLoan = new Loan(result.loanPayment(), inputs.numberOfYears, inputs.py, (inputs.interestRate / 100))


    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem', color: '#fff'}}>
            <Box sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '0 0 1rem 0'}}>
                <PageTitle>Speculative Attack</PageTitle>
            </Box>

            <ul style={{color: '#fff'}}>
                <li>How much loan can I afford?</li>
                <li>Payment Schedule</li>
                <li>Calculate by Available Cash Flow Per Month</li>
                <li>Pay back with bitcoin appreciation</li>
                <li>Back up payment methods to meet if income stalls debt-to-equity ratio</li>
            </ul>
            <ToggleButtonGroup
                value={type}
                onChange={handleChange}
                size='small'
                color='primary'
                sx={{justifySelf: 'center', marginBottom: '1rem'}}
            >
                <ToggleButton value='loan'>Calculate Loan Amount</ToggleButton>
                <ToggleButton value='payment'>Calculate Payment Amount</ToggleButton>
            </ToggleButtonGroup>
            {
                type === 'loan'
                ? <CalculateLoanAmount inputs={loanInputs} setInputs={setLoanInputs} />
                : <CalculatePayment inputs={inputs} setInputs={setInputs} />
            }
        </Page>
    )
}

export default SpeculativeAttack