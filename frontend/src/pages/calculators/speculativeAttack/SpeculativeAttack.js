import { useState } from 'react'
import { Box } from '@mui/system'
import Page from 'components/Page'
import PageTitle from 'layouts/components/PageTitle';
import { TextField, Typography, MenuItem, FormControlLabel, Switch } from '@mui/material';
import NumberFormat from 'react-number-format';
import Currency from 'components/Currency';
import AmortizationSchedule from './components/AmortizationSchedule';
import { Loan, PaymentDetails } from './components/paymentCalculations';

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

    const result = new PaymentDetails(inputs.loanAmount, inputs.numberOfYears, inputs.py, (inputs.interestRate / 100))

    const testLoan = new Loan(result.loanPayment(), inputs.numberOfYears, inputs.py, (inputs.interestRate / 100))

    
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
            <NumberFormat
                customInput={TextField}
                label='Loan Amount'
                thousandSeparator={true}
                value={inputs.loanAmount}
                onValueChange={(e) => setInputs({
                    ...inputs, 
                    loanAmount: e.floatValue
                })}
            />
            <NumberFormat
                customInput={TextField}
                label='Interest Rate'
                suffix='%'
                value={inputs.interestRate}
                onValueChange={(e) => setInputs({
                    ...inputs, 
                    interestRate: e.floatValue
                })}
            />            
            <NumberFormat
                customInput={TextField}
                label='Payback Period (Years)'
                value={inputs.numberOfYears}
                onValueChange={(e) => setInputs({
                    ...inputs, 
                    numberOfYears: e.floatValue
                })}
            />
            <FormControlLabel
                sx={switchStyle} 
                control={
                    <Switch 
                        size='small'
                        checked={inputs.interestOnly}
                        onChange={() => setInputs({...inputs, interestOnly: !inputs.interestOnly})} 
                    />
                } 
                label='Interest Only' 
            />
            <TextField
                select
                value={inputs.py}
                label='Payment Frequency'
                onChange={(e) => setInputs({...inputs, py: e.target.value})}
            >
                <MenuItem value={365}>Daily</MenuItem>
                <MenuItem value={52}>Weekly</MenuItem>
                <MenuItem value={26}>Bi-Weekly</MenuItem>
                <MenuItem value={12}>Monthly</MenuItem>
                <MenuItem value={4}>Quarterly</MenuItem>
                <MenuItem value={2}>Semi-Annually</MenuItem>
                <MenuItem value={1}>Annually</MenuItem>
            </TextField>

            
            <Typography variant='h2'><Currency value={inputs.interestOnly ? result.interestOnlyPayment() : result.loanPayment()} /> <span style={{fontSize: '1rem', textTransform: 'uppercase'}}>{inputs.friendlyPeriod()}</span></Typography>
            <AmortizationSchedule rows={result.amortizationSchedule().table} />
        </Page>
    )
}

export default SpeculativeAttack

const switchStyle = {
    '& .MuiTypography-root': {
            fontSize: '.875rem',
            color: 'rgba(255, 255, 255, 0.7)'
        },
    marginLeft: 0, 
    marginRight: 0, 
    justifyContent: 'start',
    textTransform: 'uppercase'
}
