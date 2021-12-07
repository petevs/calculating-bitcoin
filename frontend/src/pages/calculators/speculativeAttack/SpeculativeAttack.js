import { useState } from 'react'
import { Box } from '@mui/system'
import Page from 'components/Page'
import PageTitle from 'layouts/components/PageTitle';
import CalculatePayment from './components/CalculatePayment';
import CalculateLoanAmount from './components/CalculateLoanAmount';

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
                default:
                    return ' / month'
            }
        }
    })

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
            <CalculatePayment inputs={inputs} setInputs={setInputs} />
            <CalculateLoanAmount inputs={loanInputs} setInputs={setLoanInputs} />
        </Page>
    )
}

export default SpeculativeAttack