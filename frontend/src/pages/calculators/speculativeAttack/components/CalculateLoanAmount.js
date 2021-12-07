import { TextField, Typography, MenuItem, FormControlLabel, Switch } from '@mui/material';
import NumberFormat from 'react-number-format';
import Currency from 'components/Currency';
import AmortizationSchedule from './AmortizationSchedule';
import { Loan } from './paymentCalculations'; 

const CalculateLoanAmount = ({inputs, setInputs}) => {

const result = new Loan(inputs.paymentAmount, inputs.numberOfYears, inputs.py, (inputs.interestRate / 100))


    return (
        <>
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
            <NumberFormat
                customInput={TextField}
                label='Payment Amount'
                thousandSeparator={true}
                value={inputs.paymentAmount}
                onValueChange={(e) => setInputs({
                    ...inputs, 
                    paymentAmount: e.floatValue
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
            <Typography variant='h2'><Currency value={result.loanAmount()} /></Typography>
        </>
    )
}

export default CalculateLoanAmount

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
