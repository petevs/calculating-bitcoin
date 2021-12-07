import { useState } from 'react'
import { Box } from '@mui/system'
import Page from 'components/Page'
import PageTitle from 'layouts/components/PageTitle';
import { TextField, Typography } from '@mui/material';
import NumberFormat from 'react-number-format';
import { PaymentDetails } from '../taxLiability/taxCalcs';
import Currency from 'components/Currency';
import { MenuItem } from '@material-ui/core';

const SpeculativeAttack = () => {

    const [inputs, setInputs] = useState({
        loanAmount: 1000000,
        interestRate: 2.5,
        numberOfYears: 5,
        py: 12
    })

    const result = new PaymentDetails(inputs.loanAmount, inputs.numberOfYears, inputs.py, (inputs.interestRate / 100))

    const friendlyPeriod = (value) => {
        console.log(value)
        switch(value) {
            case value === 1:
                return ' / year'
            default:
                return ' / month'
        }
    }

    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem', color: '#fff'}}>
            <Box sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '0 0 1rem 0'}}>
                <PageTitle>Speculative Attack</PageTitle>
            </Box>

            <ul style={{color: '#fff'}}>
                <li>How much loan can I afford?</li>
                <li>Payment Schedule</li>
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
                label='Number of Years'
                value={inputs.numberOfYears}
                onValueChange={(e) => setInputs({
                    ...inputs, 
                    numberOfYears: e.floatValue
                })}
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

            <Typography variant='h2'><Currency value={result.loanPayment()} /> / {inputs.py}</Typography>
        </Page>
    )
}

export default SpeculativeAttack
